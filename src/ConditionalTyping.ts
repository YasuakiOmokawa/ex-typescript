import { Common } from "./commonTypes";

export function argChecker<M extends "string" | "number">(
  mode: M,
  ...args: Common.RestArgs<M>
) {
  return `${mode}: ${args}`;
}

const kimbley: Common.Freeze<Common.NestedPerson> = {
  type: "nested_person",
  name: "hoge",
  address: {
    country: "Japan",
    city: "Tokyo",
  },
};

export const isPrimitive = (value: unknown): boolean => Object(value) !== value;

export function getNumberIfExists<T>(object: Common.Option<T>): T | undefined {
  if (isSome(object)) return object.value;
}

function isSome<T>(object: Common.Option<T>): object is Common.Some<T> {
  return object.type === "some";
}

export function getNumberIfExists2<T>(object: Common.Option<T>): T {
  assertSome(object);

  return object.value;
}

function assertSome<T>(
  object: Common.Option<T>
): asserts object is Common.Some<T> {
  if (object.type !== "some") {
    throw new Error("Given Type has nothing value");
  }
}
