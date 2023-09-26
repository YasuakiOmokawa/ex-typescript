const numbers = [1, 2, 3];
console.log(numbers);
console.log([10, 20, 30, ...numbers]);
console.log(numbers[0]);
console.log(numbers["1"]);
numbers['1'] = 10;
console.log(numbers["1"]);

const onlyNumbers: number[] = [1, 2, 3];

onlyNumbers.push(4);
console.log(onlyNumbers.includes(1)); // true
console.log(onlyNumbers.includes(0)); // false
 