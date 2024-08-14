import { Common } from "./commonTypes";

export function getSpecies(obj: unknown) {
  if (isCommonAnimal(obj)) {
    return obj.species;
  } else {
    return "this is incorrect";
  }
}

export function checkAndGetSpecies(obj: unknown) {
  assertCommonAnimal(obj);
  return obj.species;
}

function isStringOrNumber(value: unknown): value is string | number {
  return typeof value === "string" || typeof value === "number";
}

function isCommonAnimal(value: unknown): value is Common.Animal {
  if (!isPropertyAccessible(value)) return false;
  return value.type === "animal" && typeof value.species === "string";
}

function isPropertyAccessible(
  value: unknown
): value is { [key: string]: unknown } {
  return value != null;
}

function assertCommonAnimal(value: unknown): asserts value is Common.Animal {
  if (!isPropertyAccessible(value)) {
    throw new Error("Given value is null or undefined");
  }
  if (value.type !== "animal" || typeof value.species !== "string") {
    throw new Error("Given value is not a Coomon.Animal");
  }
}
