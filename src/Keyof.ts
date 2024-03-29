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
  cm: 10,
  m: 1e3,
  km: 1e6,
};

function convertUnits(
  value: number,
  unit: keyof typeof mmConversionTable
): typeof mmConversionTable {
  const mmValue = value * mmConversionTable[unit];
  return {
    mm: mmValue,
    cm: mmValue / 10,
    m: mmValue / 1e3,
    km: mmValue / 1e6,
  };
}

console.log(convertUnits(5600, "m"));
console.log(convertUnits(5600, "cm"));

function get<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const lookofOmoName = get(lookofOmo, "name");
console.log(lookofOmoName);
const lookofOmoAge = get(lookofOmo, "age");
console.log(lookofOmoAge);

console.log(get(mmConversionTable, "m")); // 1000

type NumberObj = {
  0: string;
  1: number;
};

const numberObj: NumberObj = {
  0: "one",
  "1": 38,
};

numberObj["0"] = "two";
numberObj[1] = 39;

type NumberObjKeys = keyof NumberObj;
console.log(numberObj);

function get2<T, K extends keyof T & string>(obj: T, key: K): T[K] {
  const keyName: string = key;
  return obj[key];
}
