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

function mapOption<T, U>(
  object: Common.Option<T>,
  callback: (param: T) => U
): Common.Option<U> {
  if (object.type === "some") {
    return {
      type: "some",
      value: callback(object.value),
    };
  } else {
    return object;
  }
}

export function doubleOption(obj: Common.Option<number>) {
  return mapOption(obj, (x) => x * 2);
}
