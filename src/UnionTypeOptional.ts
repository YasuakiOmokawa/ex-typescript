type OptionalHuman = {
  name: string;
  age?: number;
};

const omo4: OptionalHuman = {
  name: "omo4",
  age: 23,
};
const omo5: OptionalHuman = {
  name: "omo5",
};

type OptionalAnimalType = {
  species: string;
};

const cat2 = {
  species: "cat",
  age: 3,
};

const partiaCat: OptionalAnimalType = cat2;

console.log(partiaCat.species); // cat
console.log(partiaCat);
