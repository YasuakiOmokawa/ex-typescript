async function get3(): Promise<number> {
  return 3;
}

const pGet3 = get3();
pGet3.then((num) => {
  console.log(`num: ${num}`);
});
