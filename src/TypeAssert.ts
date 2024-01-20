type AnimalAssert = {
  tag: "animal";
  species: string;
};
type HumanAssert = {
  tag: "human";
  name: string;
};
type UserAssert = AnimalAssert | HumanAssert;

function getNamesIfAllHuman(
  users: readonly UserAssert[]
): string[] | undefined {
  if (users.every((user) => user.tag === "human")) {
    return (users as HumanAssert[]).map((user) => user.name);
  }
  return undefined;
}

console.log(
  getNamesIfAllHuman([
    { tag: "human", name: "omo" },
    { tag: "human", name: "tama" },
  ])
); // [ 'omo', 'tama' ]
console.log(
  getNamesIfAllHuman([
    { tag: "human", name: "omo" },
    { tag: "animal", species: "cat" },
  ])
); // undefined
