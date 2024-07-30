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

const pR = Promise.reject("dameyo");
// const pR = new Promise((resolve, reject) => {
//   reject("dame-yo!");
// });
pR.catch((error) => {
  console.log(`error is ${error}`);
});
