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

export function getNumberIfExists(
  object: Common.Option<number>
): number | undefined {
  if (isSome(object)) return object.value;
}

function isSome(
  object: Common.Option<number>
): object is { type: "some"; value: number } {
  return object.type === "some";
}

export function getNumberIfExists2(object: Common.Option<number>): number {
  assertSome(object);

  return object.value;
}

function assertSome(
  object: Common.Option<number>
): asserts object is { type: "some"; value: number } {
  if (object.type !== "some") {
    throw new Error("Given Type has nothing value");
  }
}
