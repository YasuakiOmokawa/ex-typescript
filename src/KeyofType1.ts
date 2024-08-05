import { Common } from "./commonTypes";

function setAge(human: Common.Human, age: Common.Human["age"]) {
  return {
    ...human,
    age,
  };
}

const omoKey: Common.Human = {
  type: "human",
  name: "omo",
  age: 39,
};

console.log(setAge(omoKey, 40));
