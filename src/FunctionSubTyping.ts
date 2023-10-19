type HasNameType = { name: string };
type HasNameAndAgeType = { name: string; age: number };

const fromAge = (age: number): HasNameAndAgeType => ({
  name: "John",
  age,
});

const onlyName: (age: number) => HasNameType = fromAge;
const hasName: HasNameType = onlyName(10);
console.log(hasName);
