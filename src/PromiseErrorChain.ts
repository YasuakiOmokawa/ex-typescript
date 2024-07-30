import { readFile } from "fs/promises";

const sleepReject = (duration: number) => {
  return new Promise<never>((_resolve, reject) => {
    setTimeout(reject, duration);
  });
};

readFile("foo.txt", "utf8")
  .then(() => sleepReject(100))
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(`error occoured: ${error}`);
  });
