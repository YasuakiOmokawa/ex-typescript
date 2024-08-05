import { Common } from "./commonTypes";

export function setAge(human: Common.Human, age: Common.Human["age"]) {
  return {
    ...human,
    age,
  };
}
