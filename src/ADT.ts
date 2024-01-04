type ADTAnimal = {
  tag: "animal";
  species: string;
};
type ADTHuman = {
  tag: "human";
  name: string;
};
type ADTUser = ADTAnimal | ADTHuman;
