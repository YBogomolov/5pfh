import { rollD100, rollDice } from "@/lib/random";
import type { TableGeneratorEntry, SimpleGenerator, TableGenerator } from "@/lib/types";

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

const formatTableGeneratorEntry = (entry: TableGeneratorEntry): string => {
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

export const generateCrewType = (): string => getValue(rollD100(), gen.generators["Crew Type"]);
export const generateCrewBackground = (): string => getValue(rollD100(), gen.generators["Background Table"]);
export const generateCrewMotivation = (): string => getValue(rollD100(), gen.generators["Motivation Table"]);
export const generateCrewClass = (): string => getValue(rollD100(), gen.generators["Class Table"]);

export const generateCrewEquipment = (): string =>
  [
    // 3 rolls on military weapon table
    getValue(rollD100(), gen.generators["Military Weapon"]),
    getValue(rollD100(), gen.generators["Military Weapon"]),
    getValue(rollD100(), gen.generators["Military Weapon"]),
    // 3 rolls on low tech weapon table
    getValue(rollD100(), gen.generators["Low Tech Weapon"]),
    getValue(rollD100(), gen.generators["Low Tech Weapon"]),
    getValue(rollD100(), gen.generators["Low Tech Weapon"]),
    // 1 roll on gear table
    getValue(rollD100(), gen.generators["Gear Table"]),
    // 1 roll on gadget table
    getValue(rollD100(), gen.generators["Gadget Table"]),
  ].join(", ");
