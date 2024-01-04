type ADTAnimal = {
  tag: "animal";
  species: string;
};
type ADTHuman = {
  tag: "human";
  name: string;
};
type ADTUser = ADTAnimal | ADTHuman;

const adtTama: ADTUser = {
  tag: "animal",
  species: "cat",
};
const adtOmosan: ADTUser = {
  tag: "human",
  name: "omosan",
};

function getADTName(user: ADTUser) {
  if (user.tag === "human") {
    return user.name;
  } else {
    return "名無し";
  }
}
console.log(getADTName(adtTama)); // 名無し
console.log(getADTName(adtOmosan)); // omosan
