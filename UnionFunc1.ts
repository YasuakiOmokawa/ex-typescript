type Human = { name: string };
type Animal = { species: string };

function getBeingName(human: Human) {
  return human.name;
}
function getBeingSpecies(animal: Animal) {
  return animal.species;
}

const mysteryFuncDesuyo = Math.random() < 0.5 ? getBeingName : getBeingSpecies;
