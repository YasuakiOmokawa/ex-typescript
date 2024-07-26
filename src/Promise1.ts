import { readFile } from "fs/promises";

const p = readFile("foo2.txt", "utf-8");

p.then((result) => {
  console.log("success!");
  console.table(result);
});
p.catch((error) => {
  console.log("error!");
  console.table(error);
});
