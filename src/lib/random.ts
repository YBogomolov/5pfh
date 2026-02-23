import type { Dice } from "./types";

export const rollDice = (x: Dice): number => {
  if (typeof x === "number") return Math.ceil(Math.random() * x);

  const [num, sides] = x.split("D") as [string, string];

  return Array.from({ length: +num }, () => rollDice(+sides as Dice)).reduce((a, b) => a + b);
};

export const rollD6 = (): number => rollDice(6);
export const rollD10 = (): number => rollDice(10);
export const rollD100 = (): number => rollDice(100);
export const roll2D6 = (): number => rollDice("2D6");
