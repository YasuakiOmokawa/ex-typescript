type User = { name: string; age: number };
const obj_literal = {
  name: 'Jack',
  age: 21,
  telNumber: '000-0000-0000',
};
const u = obj_literal as User;

console.log(u);

console.log(u.telNumber);
