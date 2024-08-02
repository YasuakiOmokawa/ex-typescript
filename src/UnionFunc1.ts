import { Common } from "./commonTypes.js";

namespace Union {
  export type Human = { name: string };
  export type Animal = { species: string };
}

function getBeingName(human: Union.Human) {
  return human.name;
}
function getBeingSpecies(animal: Union.Animal) {
  return animal.species;
}

const mysteryFuncDesuyo = Math.random() < 0.5 ? getBeingName : getBeingSpecies;

const omoIntersection: Union.Human & Union.Animal = {
  name: "omokawa",
  species: "human being",
};

const value = mysteryFuncDesuyo(omoIntersection);
console.log(value);

const hogeHuman: Common.Human = {
  name: "hogeHuman",
  age: 45,
};

const hogeHuman2: Common.Human = {
  name: "hogeHuman2",
};

console.log(hogeHuman);

function useMaybeCommonHuman(human: Common.Human | undefined) {
  const age = human?.age;
  console.log(age);
}

function useCommonTime(getTimeFunc: Common.GetTimeFunc | undefined) {
  const timerOrUndefined = getTimeFunc?.();
}
