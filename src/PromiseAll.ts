import { readFile } from "fs/promises";

const p = Promise.all([
  readFile("foo.txt", "utf8"),
  readFile("bar.txt", "utf8"),
]);

p.then((results) => {
  const [foo, bar] = results;
  console.log(`foo: ${foo}`);
  console.log(`bar: ${bar}`);
});
