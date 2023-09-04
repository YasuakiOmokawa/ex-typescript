import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("名前を入力してください： ", (name) => {
  switch (name) {
    case "Alice":
      console.log("アリスです");
      break;
    case "Bob":
      console.log("ボブです");
      break;
    default:
      console.log("どちらでもありません");
      break;
  }
  rl.close();
});
