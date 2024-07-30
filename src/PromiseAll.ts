import { readFile } from "fs/promises";

const pFoo = readFile("foo.txt", "utf8");
const pBar = readFile("bar.txt", "utf8");

const p = Promise.all([pFoo, pBar]);

p.then((results) => {
  console.log(`foo: ${results[0]}`);
  console.log(`bar: ${results[1]}`);
});
