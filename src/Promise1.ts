import { readFile } from "fs/promises";

const p = readFile("foo.txt", "utf-8");

p.then((data) => {
  console.log(data);
});
