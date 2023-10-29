for (let step = 1; step <= 100; step++) {
  const message = getFizzBuzzString(step);
  console.log(message);
}

function getFizzBuzzString(i: number): string {
  if (i % 15 === 0) {
    return "FizzBuzz";
  } else if (i % 3 === 0) {
    return "Fizz";
  } else if (i % 5 === 0) {
    return "Buzz";
  } else {
    return i.toString();
  }
}
