type ForIntersectionAnimal = {
  species: string;
  age: number;
};

type ForIntersectionHuman = ForIntersectionAnimal & {
  name: string;
};

const tamaSan3: ForIntersectionAnimal = {
  species: "cat",
  age: 4,
};
const omoSan2: ForIntersectionHuman = {
  species: "human",
  age: 17,
  name: "Yasuaki Omokawa",
};
