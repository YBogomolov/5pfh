export type NonEmptyArray<T> = [T, ...T[]];

export type Roll = `${number}-${number}`;

export type Dice = 6 | 10 | "2D6" | 100;

export interface SimpleGeneratorEntry {
  readonly roll: Roll;
  readonly result: string;
}

export interface TableGeneratorEntryColumn {
  readonly header: string;
  readonly result: string;
}

export interface TableGeneratorEntry {
  readonly roll: Roll;
  readonly columns: NonEmptyArray<TableGeneratorEntryColumn>;
}

export interface Generator<Entry> {
  readonly title: string;
  readonly dice: Dice;
  readonly table: NonEmptyArray<Entry>;
}

export type SimpleGenerator = Generator<SimpleGeneratorEntry>;

export type TableGenerator = Generator<TableGeneratorEntry>;
