type UhyoUser = {
  name: string;
  age: number;
  private: boolean;
};

const users: UhyoUser[] = [
  { name: "uhyo", age: 26, private: false },
  { name: "john", age: 30, private: true },
  { name: "Mary", age: 32, private: false },
];

console.log(users.map((user) => user.name)); // ["uhyo", "john", "Mary"]
console.log(users.filter((user) => user.private)); // [{ name: "john", age: 30, private: true }]
