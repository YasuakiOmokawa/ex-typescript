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

function getCommonUserName(user: Common.User) {
  switch (user.type) {
    case "human":
      return user.name;
    case "animal":
      return "NoName";
  }
}

const mysteryFuncDesuyo = Math.random() < 0.5 ? getBeingName : getBeingSpecies;

const omoIntersection: Union.Human & Union.Animal = {
  name: "omokawa",
  species: "human being",
};

const value = mysteryFuncDesuyo(omoIntersection);
console.log(value);

const hogeHuman: Common.User = {
  name: "hogeHuman",
  age: 45,
  type: "human",
};

const hogeHuman2: Common.User = {
  name: "hogeHuman2",
  type: "human",
};

const hogeAnimal: Common.User = {
  type: "animal",
  species: "hoge desuyo",
};

console.log(getCommonUserName(hogeHuman2));
console.log(getCommonUserName(hogeAnimal));

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

function signNumber(type: Common.SignType) {
  return type === "plus" ? 1 : -1;
}

function numberWithSign(num: number, type: Common.SignType | "none") {
  if (type === "none") {
    return 0;
  } else {
    return num * signNumber(type);
  }
}

console.log(numberWithSign(2, "none"));
console.log(numberWithSign(3, "minus"));
console.log(numberWithSign(4, "plus"));

function useNumber(num: number) {
  return num > 0 ? "plus" : num < 0 ? "minus" : "zero";
}

const omo1 = "omo";
const omo2: "omo" = "omo";

let omo3 = omo1;
let omo4 = omo2;

function formatNumberOrString(value: string | number) {
  return typeof value === "number" ? value.toFixed(3) : value;
}

console.log(formatNumberOrString("3.14"));
console.log(formatNumberOrString("omokawa"));
