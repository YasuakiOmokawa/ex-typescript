type SwitchAnimal = {
  tag: "animal";
  species: string;
};
type SwitchHuman = {
  tag: "human";
  name: string;
};

type SwitchUser = SwitchAnimal | SwitchHuman;

function getSwitchUserName(user: SwitchUser): string {
  switch (user.tag) {
    case "human":
      return user.name;
    case "animal":
      return "名無し";
  }
}

console.log(getSwitchUserName({ tag: "animal", species: "cat" })); // 名無し
