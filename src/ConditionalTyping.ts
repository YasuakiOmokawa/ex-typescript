import { Common } from "./commonTypes";

export function argChecker<M extends "string" | "number">(
  mode: M,
  ...args: Common.RestArgs<M>
) {
  return `${mode}: ${args}`;
}
