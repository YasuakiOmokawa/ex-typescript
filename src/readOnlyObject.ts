type ReadOnlyObj = {
  readonly foo: number;
  readonly bar: string;
};

const readOnlyObj: ReadOnlyObj = {
  foo: 123,
  bar: 'hello, world',
};

// readOnlyObj.foo = 456;  // => Error: Cannot assign to 'foo' because it is a read-only property.

