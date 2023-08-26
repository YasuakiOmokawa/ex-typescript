import { createInterface } from 'readline';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('What is your name? ', (name) => {
  const result = name + 1000;
  console.log(`Hello ${result}!`);
  rl.close();
});
