interface Array {
  map<U>(callbackfn: (value: T, index: number, array: [T, ...T[]]) => U): [U, ...U[]];
}
