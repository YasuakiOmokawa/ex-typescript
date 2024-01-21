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
  return user2.name;
}
