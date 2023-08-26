import { createInterface } from 'readline';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('What is your name? ', (name) => {
  const number = Number(name);
  console.log(number * 2);
  rl.close();
});
