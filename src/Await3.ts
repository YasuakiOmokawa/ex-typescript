import { readFile } from "fs/promises";
import Timeout from "await-timeout";

const timer = new Timeout();
let data: string = "";
try {
  data = await Promise.race([
    readFile("uhyo.txt", "utf8"),
    timer.set(1, "TimeOut!"),
  ]);
} catch (error) {
  console.log("file read error: ", error);
  data = "";
} finally {
  timer.clear();
}

let count = 0;
let currentIndex = 0;
while (true) {
  const nextIndex = data.indexOf("uhyo", currentIndex);
  if (nextIndex >= 0) {
    count++;
    currentIndex = nextIndex + 1;
  } else {
    break;
  }
}
console.log(count);
