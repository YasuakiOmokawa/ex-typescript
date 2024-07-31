import { readFile } from "fs/promises";
import Timeout from "await-timeout";

const timer = new Timeout();
try {
  const data = await Promise.race([
    readFile("uhyo.txt", "utf8"),
    timer.set(0, "TimeOut!"),
  ]).catch((error) => {
    console.log(
      "file read error! process continue on empty string data. error details: ",
      error
    );
    return "";
  });
  countUhyo(data);
} finally {
  timer.clear();
}

function countUhyo(data: string) {
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
}
