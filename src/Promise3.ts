const p = Promise.resolve(100);

p.then((result) => {
  console.log(`result is ${result}`);
});

const p2 = new Promise((resolve) => {
  resolve(100);
});

p2.then((result) => {
  console.log(`result2 is ${result}`);
});
