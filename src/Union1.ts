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
