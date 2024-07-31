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

async function main() {
  const num1 = await get3Await();
  const num2 = await get3Await();
  const num3 = await get3Await();
  return num1 + num2 + num3;
}

console.log("start call get3 await");
main().then((result) => {
  console.log(`result: ${result}`);
});
console.log("called get3 await");
