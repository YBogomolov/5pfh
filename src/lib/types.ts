export type NonEmptyArray<T> = [T, ...T[]];

export type Roll = `${number}-${number}`;

export type Dice = 6 | 10 | "2D6" | 100;

interface Options {
  readonly skipDiceResolution?: true;
}

export interface SimpleGeneratorEntry extends Options {
  readonly roll: Roll;
  readonly result: string;
}

export interface TableGeneratorEntryColumn {
  readonly header: string;
  readonly result: string | (() => string);
}

export interface TableGeneratorEntry extends Options {
  readonly roll: Roll;
  readonly columns: NonEmptyArray<TableGeneratorEntryColumn>;
}

export interface Generator<Entry> extends Options {
  readonly title: string;
  readonly dice: Dice;
  readonly table: NonEmptyArray<Entry>;
}

export type SimpleGenerator = Generator<SimpleGeneratorEntry>;

export type TableGenerator = Generator<TableGeneratorEntry>;
