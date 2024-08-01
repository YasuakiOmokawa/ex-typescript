type ForUnionAnimal = {
  species: string;
  age: string;
};
type ForUnionHuman = {
  name: string;
  age: number;
};

type ForUnionUser = ForUnionAnimal | ForUnionHuman;

const tamaSan: ForUnionUser = {
  species: "john doe species",
  age: "seventeen",
};
const omoSan: ForUnionUser = {
  name: "omokawa",
  age: 1,
};

function getUserNameDaze2(user: ForUnionUser) {
  return user.age;
}
