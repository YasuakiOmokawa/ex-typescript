const repeatNames = <T extends { name: string }>(
  element: T,
  length: number
): T[] => {
  return Array(length).fill(element);
};

type NameAndAge = { name: string; age: number };

const resultNames = repeatNames({ name: "Jack" }, 10);
console.log(resultNames);

const resultNameAndAges = repeatNames<NameAndAge>(
  { name: "Jack", age: 32 },
  20
);
console.log(resultNameAndAges);

type FuncOfRepeatName = <T>(arg: T, num: number) => T[];

const funcOfRepeatName: FuncOfRepeatName = (element, number) => {
  return Array(number).fill(element);
};

console.log(funcOfRepeatName({ name: "Jack-desu" }, 10));
