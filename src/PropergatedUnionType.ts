type PropAnimal = {
  species: string;
  age: string;
};
type PropHuman = {
  name: string;
  age: number;
};

type PropUnionUser = PropAnimal | PropHuman;

const tamaProps: PropUnionUser = {
  species: "cat",
  age: "10歳",
};

const omosanProps: PropUnionUser = {
  name: "omosan",
  age: 38,
};

function getUnionAge(user: PropUnionUser) {
  const age = user.age;
  console.log(age);
}

getUnionAge(tamaProps); // 10歳
getUnionAge(omosanProps); // 38
