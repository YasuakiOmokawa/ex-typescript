const dynamicSum = (...args: number[]) => args.reduce((sum, n) => sum + n, 0);

console.log(dynamicSum(1, 2, 3, 4, 5)); // 15
console.log(dynamicSum(1, 2, 3)); // 6
console.log(dynamicSum(1, 2)); // 3
