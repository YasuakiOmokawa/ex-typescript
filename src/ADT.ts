type ADTAnimal = {
  tag: "animal";
  species: string;
};
type ADTHuman = {
  tag: "human";
  name: string;
};
type ADTUser = ADTAnimal | ADTHuman;

const adtTama: ADTUser = {
  tag: "animal",
  species: "cat",
};
const adtOmosan: ADTUser = {
  tag: "human",
  name: "omosan",
};
