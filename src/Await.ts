const sleepForAwait = (duration: number) => {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, duration);
  });
};

async function get3Await() {
  await sleepForAwait(1000);
  return 3;
}

const pAwait = get3Await();
pAwait.then((num) => {
  console.log(`num: ${num}`);
});
