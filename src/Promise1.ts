import { createInterface } from "readline/promises";
import { readFileSync } from "fs";

export function readFileTest() {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("please input file name: ")
    .then((line) => {
      try {
        const result = readFileSync(line, "utf-8");
        console.log("success read file!");
        console.table(result);
      } catch (error: unknown) {
        console.log("error read file!");
        console.table(error);
      }
    })
    .catch((error: unknown) => {
      console.log("error read line interface.");
      console.table(error);
    })
    .finally(() => {
      rl.close();
      console.log("closes read line interface.");
    });
}
