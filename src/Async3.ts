async function get3(): Promise<number> {
  console.log("have called get3()");
  return 3;
}

console.log("begin to call get3()");
const pGet3 = get3();
pGet3.then((num) => {
  console.log(`num: ${num}`);
});
console.log("called get3()");
