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

const mmConversionTable = {
  mm: 1,
  m: 1e3,
  km: 1e6,
};

function convertUnits(value: number, unit: keyof typeof mmConversionTable) {
  const mmValue = value * mmConversionTable[unit];
  return {
    mm: mmValue,
    m: mmValue / 1e3,
    km: mmValue / 1e6,
  };
}

console.log(convertUnits(5600, "m"));
