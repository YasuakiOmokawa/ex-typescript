const sleepForAwait = (duration: number) => {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, duration);
  });
};

async function get3Await() {
  console.log("have called get3 await");
  await sleepForAwait(1000);
  console.log("steps after await");
  return 3;
}

console.log("start call get3 await");
const pAwait = get3Await();
pAwait.then((num) => {
  console.log(`num: ${num}`);
});
console.log("called get3 await");
