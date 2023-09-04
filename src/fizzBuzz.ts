let result: string = '';

for (let i = 1; i <= 100; i++) {
  if (i % 15 === 0) {
    result += 'FizzBuzz ';
    console.log('FizzBuzz');
  } else if (i % 3 === 0 && i % 5 !== 0) {
    result += 'Fizz ';
    console.log('Fizz');
  } else if (i % 5 === 0 && i % 3 !== 0) {
    result += 'Buzz ';
    console.log('Buzz');
  } else {
    result += `${i} `;
    console.log(i);
  }
}

console.log(result);
