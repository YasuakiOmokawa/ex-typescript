import increment, { value } from "./counter.js";
import type { Animal } from "./animal.js";
import { tama } from "./animal.js";
const message: string = "Hello World";

console.log(message);
increment();
console.log(`increment value: ${value}`);
increment();
console.log(`increment value: ${value}`);
increment();
console.log(`increment value: ${value}`);

const dog: Animal = {
  age: 5,
  species: "dog",
};
console.log(dog, tama);

const myCat: Animal = {
  ...tama,
};
