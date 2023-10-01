type BaseObject = {
  foo?: number;
};
const baseObject1: BaseObject = {};
const baseObject2: BaseObject = { foo: 123 };

console.log(baseObject1.foo); // undefined
console.log(baseObject2.foo); // 123

const { foo = 100 } = baseObject1;
console.log(foo); // 100
const { foo: foo2 = 200 } = baseObject2;
console.log(foo2); // 123

const destructObj = { foo: null };
const { foo: foo3 = 300 } = destructObj;
console.log(foo3); // null

type NestedObject = {
  foo?: {
    bar: number;
  };
};
const nestedObject1: NestedObject = {
  foo: {
    bar: 123,
  },
};
const nestedObject2: NestedObject = {};
const { foo: { bar: bar1 } = { bar: 500 } } = nestedObject1;
console.log(bar1); // 123
const { foo: { bar: bar2 } = { bar: 500 } } = nestedObject2;
console.log(bar2); // 500
