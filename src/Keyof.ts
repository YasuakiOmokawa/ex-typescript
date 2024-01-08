type LookofHuman = {
  type: "human";
  name: string;
  age: bigint;
};

function setLookofAge(human: LookofHuman, age: LookofHuman["age"]) {
  return { ...human, age };
}

const lookofOmo: LookofHuman = {
  type: "human",
  name: "omo",
  age: 38n,
};

const lookofOmo2 = setLookofAge(lookofOmo, 39n);
console.log(lookofOmo2);

type LookofHumanKeys = keyof LookofHuman;

let key: LookofHumanKeys = "type";
key = "age";
