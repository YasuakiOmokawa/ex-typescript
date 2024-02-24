// type GenericMappedType<T, P, K> = {
//   [P in K]: T;
// };

type Fruit = "apple" | "banana" | "orange";
type FruitNumbers = { [P in Fruit]: number };

const fruitNumbers: FruitNumbers = {
  apple: 5,
  banana: 10,
  orange: 3,
};

type FruitArrays = { [P in Fruit]: P[] };

const fruitArrays: FruitArrays = {
  apple: ["apple", "apple"],
  banana: ["banana"],
  orange: ["orange"],
};
