type ProcessUser = {
  name: string;
  age: number;
  premiumUser: boolean;
};

const csvData: string = `
uhyo,26,1
john,30,0
Mary,32,1
`;

const processUsers: ProcessUser[] = csvData
  .trim()
  .split("\n")
  .map((line) => {
    const [name, ageString, premiumUserString] = line.split(",");
    return {
      name: name,
      age: Number(ageString),
      premiumUser: premiumUserString === "1",
    };
  });

for (const user of processUsers) {
  if (user.premiumUser) {
    console.log(`${user.name}(${user.age}) is premium user`);
  } else {
    console.log(`${user.name}(${user.age}) is not premium user`);
  }
}
