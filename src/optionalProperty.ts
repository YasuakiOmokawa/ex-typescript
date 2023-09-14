type MyObj = {
  foo: number;
  bar?: string;
};

const myObj: MyObj = {
  foo: 123,
};

console.log(myObj.bar);  // => undefined
console.log(myObj.foo);  // => 123
