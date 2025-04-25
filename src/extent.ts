function extent(nums: Iterable<number>) {
  let minMax: [number, number] | null = null;
  let oldMin: number, oldMax: number;
  for (const num of nums) {
    if (!minMax) {
      minMax = [num, num];
    } else {
      [oldMin, oldMax] = minMax;
      minMax = [Math.min(num, oldMin), Math.max(num, oldMax)];
    }
  }
  return minMax;
}

console.log(extent([0, 1, 2]));
