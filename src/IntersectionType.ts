type IntersectionAnimal = {
  species: string;
  age: number;
};
type IntersectionHuman = IntersectionAnimal & { name: string };

const intersectionTama: IntersectionAnimal = {
  species: "cat",
  age: 10,
};

const intersectionOmo: IntersectionHuman = {
  name: "omo",
  species: "ホモサピエンス",
  age: 38,
};

type IntersectionPrimitive = IntersectionAnimal & string;

type FunctionalHuman = { name: string };
type FunctionalAnimal = { species: string };
function getFunctionalName(human: FunctionalHuman) {
  return human.name;
}
function getFunctionalSpecies(animal: FunctionalAnimal) {
  return animal.species;
}

const mysteryFunc2 =
  Math.random() < 0.5 ? getFunctionalName : getFunctionalSpecies;
const omosan2: FunctionalAnimal & FunctionalHuman = {
  name: "omosan",
  species: "ホモサピエンス",
};
console.log(mysteryFunc2(omosan2));
