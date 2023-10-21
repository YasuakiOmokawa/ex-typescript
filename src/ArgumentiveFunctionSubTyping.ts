type HasNameArgumented = { name: string };
type HasNameAndAgeArgumented = { name: string; age: number };

const showName = (obj: HasNameArgumented) => {
  console.log(obj.name);
};

const g: (obj: HasNameAndAgeArgumented) => void = showName;

g({ name: "John", age: 10 });
const h = g({ name: "JohnDesu", age: 30 });
console.log(h); // undefined
