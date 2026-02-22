import { rollDice } from "@/lib/random";
import type { SimpleGenerator, TableGenerator, TableGeneratorEntry } from "@/lib/types";

import * as gen from "./data";

export const resolveDice = (value: string): string => {
  let localValue = value.slice();

  while (/\dD\d{1,3}/.test(localValue)) {
    const match = /\dD\d{1,3}/.exec(localValue);
    if (!match) break;
    const [num, sides] = match[0].split("D") as [string, string];
    const total = Array.from({ length: +num }, () => rollDice(+sides)).reduce((a, b) => a + b);
    localValue = localValue.replace(match[0], total.toString());
  }

  while (/\d\+\d/.test(localValue)) {
    const match = /\d\+\d/.exec(localValue);
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

      const maybeNextGen = result in gen.generators ? gen.generators[result as keyof typeof gen.generators] : null;
      if (!maybeNextGen) return resolveDice(result);

      const newRoll = rollDice(generator.dice);
      return getValue(newRoll, maybeNextGen);
    }
  }

  throw new RangeError(`Roll ${roll} was not found in generator ${generator.title}`);
};
