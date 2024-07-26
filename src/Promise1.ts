import { createInterface } from "readline/promises";
import { readFile } from "fs/promises";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const promisedRl = rl.question("please input file name: ");
promisedRl.then((line) => {
  const promisedRf = readFile(line, "utf-8");
  promisedRf.then((result) => {
    console.log("success!");
    console.table(result);
  });
  promisedRf.catch((error) => {
    console.log("error!");
    console.table(error);
  });
});
promisedRl.finally(() => {
  rl.close();
});
