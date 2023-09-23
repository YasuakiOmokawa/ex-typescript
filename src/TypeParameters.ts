type Family<Parent, Child> = {
  mother: Parent;
  father: Parent;
  child: Child;
};

const family: Family<string, number> = {
  mother: 'mom',
  father: 'dad',
  child: 1,
};

console.log(family);

type HasName = { name: string };
type HasAge = { age: number };
type NeoFamily<Parent extends HasName, Child extends HasAge> = {
  mother: Parent;
  father: Parent;
  child: Child;
};

type Animal = { name: string; category: string };
const neoFamily: NeoFamily<Animal, HasAge> = {
  mother: { name: 'mom', category: 'human' },
  father: { name: 'dad', category: 'human' },
  child: { age: 1 },
};
