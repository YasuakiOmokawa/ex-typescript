import { Common } from "./commonTypes";

export function isStringOrNumber(value: unknown): value is string | number {
  return typeof value === "string" || typeof value === "number";
}

export function isCommonAnimal(value: any): value is Common.Animal {
  if (value == null) return false;
  return value.type === "animal" && typeof value.species === "string";
}

export function getSpecies(obj: unknown) {
  if (isCommonAnimal(obj)) {
    return obj.species;
  } else {
    return "this is incorrect";
  }
}
