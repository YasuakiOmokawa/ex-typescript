import { readFile } from "fs/promises";

const p = Promise.all([
  readFile("foo.txt", "utf8"),
  readFile("bar.txt", "utf8"),
]);

p.then(([foo, bar]) => {
  console.log(`foo: ${foo}`);
  console.log(`bar: ${bar}`);
});
