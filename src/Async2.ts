import { readFile } from "fs";

readFile("foo.txt", "utf-8", (_err, result) => {
  console.log(result);
});
console.log("start reading");
