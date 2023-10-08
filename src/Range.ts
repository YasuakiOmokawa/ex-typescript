function range(min: number, max: number): number[] {
  const result: number[] = [];
  for (let i = min; i < max; i++) {
    result.push(i);
  }
  return result;
}

console.log(range(0, 5)); // [0, 1, 2, 3, 4]
console.log(range(0, 3)); // [0, 1, 2]
