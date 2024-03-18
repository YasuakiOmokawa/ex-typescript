import increment, { value } from "./counter.js";
import * as Animals from "./animal.js";
const message: string = "Hello World";

console.log(message);
increment();
console.log(`increment value: ${value}`);
increment();
console.log(`increment value: ${value}`);
increment();
console.log(`increment value: ${value}`);

const dog: Animals.Animal = {
  age: 5,
  species: "dog",
};
console.log(dog, tama);

const myCat: Animals.Animal = {
  ...Animals.tama,
};

export const omo: HumanModule = {
  age: 3,
  name: "omo",
};
