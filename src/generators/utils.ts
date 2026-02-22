import { rollDice } from "@/lib/random";
import type { SimpleGenerator, TableGenerator, TableGeneratorEntry } from "@/lib/types";

import * as gen from "./data";

export const resolveDice = (value: string): string => {
  let localValue = value.slice();

  // Regular xDy resolution:
  const xDyRegex = /\dD\d{1,3}/;
  while (xDyRegex.test(localValue)) {
    const match = xDyRegex.exec(localValue);
    if (!match) break;
    const [num, sides] = match[0].split("D") as [string, string];
    const total = Array.from({ length: +num }, () => rollDice(+sides)).reduce((a, b) => a + b);
    localValue = localValue.replace(match[0], total.toString());
  }

  // "Roll xDy, keep highest" resolution:
  const xDhyRegex = /\dDh\d{1,3}/;
  while (xDhyRegex.test(localValue)) {
    const match = xDhyRegex.exec(localValue);
    if (!match) break;
    const [num, sides] = match[0].split("Dh") as [string, string];
    const max = Math.max(...Array.from({ length: +num }, () => rollDice(+sides)));
    localValue = localValue.replace(match[0], max.toString());
  }

  // "Roll xDy, keep lowest" resolution:
  const xDlyRegex = /\dDl\d{1,3}/;
  while (xDlyRegex.test(localValue)) {
    const match = xDlyRegex.exec(localValue);
    if (!match) break;
    const [num, sides] = match[0].split("Dl") as [string, string];
    const max = Math.min(...Array.from({ length: +num }, () => rollDice(+sides)));
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

export const formatTableGeneratorEntry = (entry: TableGeneratorEntry): string => {
  return entry.columns
    .filter((col) => col.result != "-")
    .map((col) => resolveDice(col.result))
    .join("\n");
};

export const getValue = (roll: number, generator: SimpleGenerator | TableGenerator): string => {
  for (const row of generator.table) {
    const [low, high] = row.roll.split("-") as [string, string];

    if (+low <= roll && roll <= +high) {
      if (!("result" in row)) return formatTableGeneratorEntry(row);

      const { result } = row;

      // Special case: "Roll twice on X":
      if (result.includes("Roll twice on ")) {
        const regex = /Roll twice on ([^.]+)/;
        const match = result.match(regex);
        const genName = match?.[1];
        if (!genName || !(genName in gen.generators)) return resolveDice(result);

        const firstRoll = rollDice(generator.dice);
        const secondRoll = rollDice(generator.dice);

        const firstResult = getValue(firstRoll, gen.generators[genName as keyof typeof gen.generators]);
        const secondResult = getValue(secondRoll, gen.generators[genName as keyof typeof gen.generators]);

        const replacement = `${firstResult}, ${secondResult}`;

        return resolveDice(result.replace(regex, replacement));
      }

      const maybeNextGen = result in gen.generators ? gen.generators[result as keyof typeof gen.generators] : null;
      if (!maybeNextGen) return resolveDice(result);

      const newRoll = rollDice(generator.dice);
      return getValue(newRoll, maybeNextGen);
    }
  }

  throw new RangeError(`Roll ${roll} was not found in generator ${generator.title}`);
};
