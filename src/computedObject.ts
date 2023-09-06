import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const messages = {
  good: '0以上の数値です',
  bad: '負の数値です',
}

rl.question('数値を入力してください： ', (input) => {
  const num = Number(input);
  console.log(messages[num >= 0 ? "good" : "bad"]);
  rl.close();
});

