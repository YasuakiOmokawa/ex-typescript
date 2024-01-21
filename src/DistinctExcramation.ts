type DistinctHuman = {
  tag: "human";
  name: string;
};

function getOneUserName(
  user1?: DistinctHuman,
  user2?: DistinctHuman
): string | undefined {
  if (user1 === undefined && user2 === undefined) {
    return undefined;
  }
  if (user1 !== undefined) {
    return user1.name;
  }
  return user2!.name;
}

console.log(getOneUserName({ tag: "human", name: "omo" })); // omo
console.log(getOneUserName(undefined, { tag: "human", name: "tama" })); // tama
console.log(getOneUserName(undefined, undefined)); // undefined
