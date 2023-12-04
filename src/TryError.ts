console.log("エラーの検証をします");
throwError();
console.log("エラーの検証をしました");

function throwError() {
  const error = new Error("エラーが発生しました");
  throw error;
}
