import { createInterface } from 'readline';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('パスワードを入力してください： ', (password) => {
  if (password === 'hogehoge') {
    console.log('ログインしました');
  } else {
    console.log('Who are you?');
  }
  rl.close();
});
