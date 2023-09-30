const struct = {
  name1: "John",
  age1: 30,
  location1: "New York",
};

const { name1, age1 } = struct;

const nested = {
  title: "Hello World",
  object2: {
    dest_name: "John",
    dest_age: 30,
  },
};

const {
  title,
  object2: { dest_name, dest_age },
} = nested;

console.log(dest_name); // 'John'

const dest_arr = ["John2", 40, "New York"];
const [dest_name1, dest_age1] = dest_arr;
console.log(dest_name1); // 'John2'
console.log(dest_age1); // 40
