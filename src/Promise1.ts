import { createInterface } from "readline/promises";
import { readFile } from "fs/promises";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const promisedRl = rl.question("please input file name: ");
promisedRl.then((line) => {
  readFile(line, "utf-8")
    .then((result) => {
      console.log("success read file!");
      console.table(result);
    })
    .catch((error: unknown) => {
      console.log("error read file!");
      console.table(error);
    });
});
promisedRl.catch((error: unknown) => {
  console.log("error read line interface.");
  console.table(error);
});
promisedRl.finally(() => {
  rl.close();
  console.log("closes read line interface.");
});
