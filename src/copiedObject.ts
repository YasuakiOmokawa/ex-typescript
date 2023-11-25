const foo = { bar: 1 };
const bar = foo;
const baz = { bar: 1 };

console.log(foo === bar); // true
console.log(foo === baz); // false

const foo2 = { ...foo };
foo2.bar = 2;
console.log(foo2); // { bar: 2 }
console.log(foo); // { bar: 1 }

