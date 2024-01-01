const hogeType1 = "hoge";
let hogeType2 = "hoge";

let hogeType3: string | number = "hoge";
hogeType3 = 1;
let onlyMember: "omo" | "tama" = "tama";

const wideningObject = {
  name: "omo",
  age: 38,
};

type notWideningType = {
  readonly name: string;
  readonly age: number;
};

const notWideningObject: notWideningType = {
  name: "omo",
  age: 38,
};
