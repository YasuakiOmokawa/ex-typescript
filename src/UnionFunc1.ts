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
  const timerStringOrUndefined = getTimeFunc?.().toString();
}

function getHelloString(): `Hello, ${number}!` {
  if (Math.random() > 0.3) {
    return "Hello, 0.3!";
  } else {
    return "Hello, 1!";
  }
}

function makeKey<T extends string>(userName: T) {
  return `user:${userName}` as const;
}

const omoKey: "user:omo" = makeKey("omo");

function fromKey<T extends string>(key: `user:${T}`) {
  return key.slice(5) as T;
}

const omos2 = fromKey("user:omo");

function signNumber(type: "plus" | "minus") {
  return type === "plus" ? 1 : -1;
}
function useNumber(num: number) {
  return num > 0 ? "plus" : num < 0 ? "minus" : "zero";
}

const omo1 = "omo";
const omo2: "omo" = "omo";

let omo3 = omo1;
let omo4 = omo2;
