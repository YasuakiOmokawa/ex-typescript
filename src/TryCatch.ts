try {
  console.log("エラーを発生させます");
  throwError2();
  console.log("エラーを発生させました");
} catch (err) {
  console.log("エラーをキャッチしました");
  console.log(err);
}
console.log("おわり");

function throwError2() {
  throw new Error("エラーが発生しました!!!!");
}

//  エラーを発生させます > エラーをキャッチしました > Error: エラーが発生しました!!!!
