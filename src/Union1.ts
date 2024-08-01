type ForUnionAnimal = {
  species: string;
};
type ForUnionHuman = {
  name: string;
};

type ForUnionUser = ForUnionAnimal | ForUnionHuman;

const tamaSan: ForUnionUser = {
  species: "john doe species",
};
const omoSan: ForUnionUser = {
  name: "omokawa",
};

function getUserNameDaze(user: ForUnionUser): string {
  return user.name;
}

const tamaSan2 = {
  species: "john doe species",
  specialProp1: "hoge",
};

const animalSan: ForUnionAnimal = tamaSan2;
animalSan.species; // enable access so that type-defined.
