for (const step of sequence(1, 100)) {
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

function sequence(start: number, end: number): number[] {
  return Array.from({ length: end - start + 1 }, (_, i) => i + start);
}
