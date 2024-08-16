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
  if (object.type === "some") return object.value;
}
