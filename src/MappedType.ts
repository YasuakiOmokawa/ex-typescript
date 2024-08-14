import { Common } from "./commonTypes";

const cutleries: Common.Cutlery = {
  japanese: "chopstics",
  french: "knife and fork",
};

const keyValuesAndName: Common.KeyValuesAndName = {
  name: "hoge",
  fuga: "hare",
};

const allFreezedObject = {
  a: "b",
  b: {
    c: "d",
    e: "f",
  },
} as const;
