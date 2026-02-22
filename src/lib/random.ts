export const rollDice = (x: number): number => Math.ceil(Math.random() * x);

export const rollD6 = (): number => rollDice(6);
export const rollD10 = (): number => rollDice(10);
export const rollD100 = (): number => rollDice(100);
