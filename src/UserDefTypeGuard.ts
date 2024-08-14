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

function isCommonAnimal(value: any): value is Common.Animal {
  if (value == null) return false;
  return value.type === "animal" && typeof value.species === "string";
}

function assertCommonAnimal(value: any): asserts value is Common.Animal {
  if (value == null) {
    throw new Error("Given value is null or undefined");
  }
  if (value.type !== "animal" || typeof value.species !== "string") {
    throw new Error("Given value is not a Coomon.Animal");
  }
}
