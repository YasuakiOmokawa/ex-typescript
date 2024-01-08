type LookofHuman = {
  type: "human";
  name: string;
  age: number;
};

function setLookofAge(human: LookofHuman, age: LookofHuman["age"]) {
  return { ...human, age };
}

const lookofOmo: LookofHuman = {
  type: "human",
  name: "omo",
  age: 38,
};

const lookofOmo2 = setLookofAge(lookofOmo, 39);
console.log(lookofOmo2);
