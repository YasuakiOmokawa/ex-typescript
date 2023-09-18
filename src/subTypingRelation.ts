import { type } from "os";

type Foobar = {
  foo: number;
  bar: string;
};
type FoobarRelated = {
  foo: number;
  bar: string;
  baz: boolean;
};

const foobar: FoobarRelated = {
  foo: 123,
  bar: 'hello, world',
  baz: true,
};
const foobar2: Foobar = foobar;

type Animal = {
  age: number;
};
type Human = {
  name: string;
  age: number;
};
type AminalFamily = {
  familyName: string;
  father: Animal;
  mother: Animal;
  child: Animal;
};
type HumanFamily = {
  familyName: string;
  father: Human;
  mother: Human;
  child: Human;
};


