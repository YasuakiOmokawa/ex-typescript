const numbers = [1, 2, 3];
console.log(numbers);
console.log([10, 20, 30, ...numbers]);
console.log(numbers[0]);
console.log(numbers["1"]);
numbers['1'] = 10;
console.log(numbers["1"]);

const onlyNumbers: number[] = [1, 2, 3];
const stringsOrNumbers: (string | number)[] = [1, 2, 3, '4'];
const nullableNumbers: (number | null)[] = [1, 2, null];

