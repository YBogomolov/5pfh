export type NonEmptyArray<T> = [T, ...T[]];

export type Roll = `${number}-${number}`;

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
  readonly dice: 6 | 10 | 100;
  readonly table: NonEmptyArray<Entry>;
}

export type SimpleGenerator = Generator<SimpleGeneratorEntry>;

export type TableGenerator = Generator<TableGeneratorEntry>;
