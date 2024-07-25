import { readFile } from "fs";
import { performance } from "perf_hooks";

const startTime = performance.now();
readFile("foo.txt", "utf-8", (_err, _result) => {
  const endTime = performance.now();
  console.log(`elapsed ${endTime - startTime} miliseconds`);
});
console.log("start reading");
