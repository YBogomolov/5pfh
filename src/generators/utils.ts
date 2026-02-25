import { rollDice } from "@/lib/random";
import type { Dice, SimpleGenerator, SimpleGeneratorEntry, TableGenerator, TableGeneratorEntry } from "@/lib/types";

import * as gen from "./data";

export const resolveDice = (value: string): string => {
  let localValue = value.slice();

  // Regular xDy resolution:
  const xDyRegex = /\dD\d{1,3}(?!\+[a-zA-Z])/;
  while (xDyRegex.test(localValue)) {
    const match = xDyRegex.exec(localValue);
    if (!match) break;
    const [num, sides] = match[0].split("D") as [string, string];
    const total = Array.from({ length: +num }, () => rollDice(+sides as Dice)).reduce((a, b) => a + b);
    localValue = localValue.replace(match[0], total.toString());
  }

  // "Roll xDy, keep highest" resolution:
  const xDhyRegex = /\dDh\d{1,3}/;
  while (xDhyRegex.test(localValue)) {
    const match = xDhyRegex.exec(localValue);
    if (!match) break;
    const [num, sides] = match[0].split("Dh") as [string, string];
    const max = Math.max(...Array.from({ length: +num }, () => rollDice(+sides as Dice)));
    localValue = localValue.replace(match[0], max.toString());
  }

  // "Roll xDy, keep lowest" resolution:
  const xDlyRegex = /\dDl\d{1,3}/;
  while (xDlyRegex.test(localValue)) {
    const match = xDlyRegex.exec(localValue);
    if (!match) break;
    const [num, sides] = match[0].split("Dl") as [string, string];
    const max = Math.min(...Array.from({ length: +num }, () => rollDice(+sides as Dice)));
    localValue = localValue.replace(match[0], max.toString());
  }

  // After dice being resolved, simplify "x+y" into their sum:
  const plusRegex = /\d\+\d/;
  while (plusRegex.test(localValue)) {
    const match = plusRegex.exec(localValue);
    if (!match) break;
    const [a, b] = match[0].split("+") as [string, string];
    const total = +a + +b;
    localValue = localValue.replace(match[0], total.toString());
  }

  return localValue;
};

export const formatTableGeneratorEntry = (entry: TableGeneratorEntry, skipDiceResolution?: true): string =>
  entry.columns
    .filter((col) => col.result !== "-")
    .map((col) => {
      const result = typeof col.result === "string" ? col.result : col.result();

      return (skipDiceResolution ?? entry.skipDiceResolution)
        ? `${col.header}: ${result}`
        : `${col.header}: ${resolveDice(result)}`;
    })
    .join("\n");

export function resolveRolls(row: SimpleGeneratorEntry, generator: SimpleGenerator): string;
export function resolveRolls(row: TableGeneratorEntry, generator: TableGenerator): string;
export function resolveRolls(
  row: TableGeneratorEntry | SimpleGeneratorEntry,
  generator: TableGenerator | SimpleGenerator,
): string {
  if (generator.skipDiceResolution ?? row.skipDiceResolution) {
    return "result" in row ? row.result : formatTableGeneratorEntry(row);
  }

  const resolveRollsInternal = (result: string): string => {
    // Special case: "Roll once/twice on X":
    const regex = /Roll (once|twice) on the ([^.]+)/;
    if (regex.test(result)) {
      const match = result.match(regex);
      const genName = match?.[2];
      if (!genName || !(genName in gen.generators)) return row.skipDiceResolution ? result : resolveDice(result);

      const times = TIMES[match[1]] ?? 0;
      const replacement = Array.from({ length: times }, () => {
        const roll = rollDice(generator.dice);
        return getValue(roll, gen.generators[genName as keyof typeof gen.generators]);
      }).join(", ");

      const finalResult = result.replace(regex, replacement);

      return row.skipDiceResolution ? finalResult : resolveDice(finalResult);
    }

    const maybeNextGen = result in gen.generators ? gen.generators[result as keyof typeof gen.generators] : null;
    if (!maybeNextGen) return row.skipDiceResolution ? result : resolveDice(result);

    const newRoll = rollDice(generator.dice);
    return getValue(newRoll, maybeNextGen);
  };

  if ("result" in row) {
    return resolveRollsInternal(row.result);
  }

  return formatTableGeneratorEntry({
    ...row,
    columns: row.columns.map((col) => ({
      ...col,
      result: resolveRollsInternal(typeof col.result === "string" ? col.result : col.result()),
    })),
  });
}

const TIMES: Record<string, number> = { once: 1, twice: 2 };

export const getValue = (roll: number, generator: SimpleGenerator | TableGenerator): string => {
  for (const row of generator.table) {
    const [low, high] = row.roll.split("-") as [string, string];

    if (+low <= roll && roll <= +high) {
      return resolveRolls(row as never, generator as never);
    }
  }

  throw new RangeError(`Roll ${roll} was not found in generator ${generator.title}`);
};
