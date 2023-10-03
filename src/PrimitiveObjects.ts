// Date
const date_1 = new Date();
console.log(date_1);

const regexp_1 = /ab+c/;

console.log(regexp_1.test("abbbbc")); // true
console.log(regexp_1.test("ac")); // false
