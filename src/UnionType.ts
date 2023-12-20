type AnimalForUnion = {
  species: string;
};
type HumanForUnion = {
  name: string;
};

type UnionUser = AnimalForUnion | HumanForUnion;

const tama: UnionUser = {
  species: "cat",
};
const omosan: UnionUser = {
  name: "omosan",
};

const catWoman: UnionUser = {
  name: "catWoman",
  species: "cat",
};
