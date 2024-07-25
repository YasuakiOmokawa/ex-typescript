import { performance } from "perf_hooks";

setTimeout(() => {
  console.log("called timer after 100 milliseconds!");
}, 100);

const startTime = performance.now();
let count: number = 0;
while (performance.now() - startTime < 1000) {
  count++;
}
console.log(`${count.toLocaleString()} times loop in 1000 milliseconds.`);
