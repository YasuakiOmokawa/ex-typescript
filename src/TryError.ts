console.log("エラーの検証をします");
// throwError();
console.log(getAverage([1, 2, 3]));
console.log(getAverage([]));
console.log("エラーの検証をしました");

function throwError() {
  const error = new Error("エラーが発生しました");
  throw error;
}

function getAverage(nums: number[]) {
  if (nums.length === 0) {
    throw new Error("配列の要素が0です");
  }
  return nums.reduce((a, b) => a + b) / nums.length;
}
