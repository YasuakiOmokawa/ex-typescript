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
