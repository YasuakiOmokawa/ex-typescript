import { readFile } from "fs/promises";

const sleepReject = (duration: number) => {
  return new Promise<never>((_resolve, reject) => {
    setTimeout(reject, duration);
  });
};

const p = Promise.any([
  readFile("foo.txt", "utf8"),
  readFile("bar.txt", "utf8"),
  sleepReject(1),
]);

p.then((result) => {
  console.log("results below:");
  console.table(result);
});
