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
    const user: string[] = line.split(",");
    return {
      name: user[0],
      age: Number(user[1]),
      premiumUser: Boolean(Number(user[2])),
    };
  });

for (const user of processUsers) {
  if (user.premiumUser) {
    console.log(`${user.name}(${user.age}) is premium user`);
  } else {
    console.log(`${user.name}(${user.age}) is not premium user`);
  }
}
