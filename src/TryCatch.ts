try {
  throwError3();
  console.log("これは表示されない");
} catch (err) {
  console.log(err);
}

function throwError3() {
  const error = new Error("エラーが発生しました");
  throw error;
  console.log("これは表示されない");
}
