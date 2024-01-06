type SwitchAnimal = {
  tag: "animal";
  species: string;
};
type SwitchHuman = {
  tag: "human";
  name: string;
};
type SwitchRobot = {
  tag: "robot";
  name: string;
};

type SwitchUser = SwitchAnimal | SwitchHuman | SwitchRobot;

function getSwitchUserName(user: SwitchUser): string {
  switch (user.tag) {
    case "human":
      return user.name;
    case "animal":
      return "名無し";
    case "robot":
      return `CPU ${user.name}`;
  }
}

console.log(getSwitchUserName({ tag: "animal", species: "cat" }));
console.log(getSwitchUserName({ tag: "human", name: "omo" }));
console.log(getSwitchUserName({ tag: "robot", name: "tama" }));
