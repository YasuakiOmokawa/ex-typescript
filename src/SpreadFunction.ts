const calcSum = (...args: number[]) => {
  return args.reduce((sum, n) => sum + n, 0);
};

const nums = [1, 2, 3, 4, 5];
console.log(calcSum(...nums)); // 15
