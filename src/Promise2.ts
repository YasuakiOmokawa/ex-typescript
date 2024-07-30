const p = new Promise<number>((resolve) => {
  setTimeout(() => {
    resolve(666);
  }, 3000);
});

p.then((num) => {
  console.log(`result: ${num}`);
});
