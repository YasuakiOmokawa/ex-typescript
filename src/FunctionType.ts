type F = (repeatNum: number) => string;

const xRepeat: F = (num) => "x".repeat(num);

console.log(xRepeat(10)); // 'xxxxxxxxxx'
console.log(xRepeat(5)); // 'xxxxx'
