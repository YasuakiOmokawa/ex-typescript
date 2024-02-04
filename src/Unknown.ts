function doNothing(val: unknown) {
  console.log(val);
  if (typeof val === "function") {
    console.log("This is a function");
  }
}

doNothing("hoge"); // hoge
doNothing(10); // 10
doNothing({}); // [object Object]
doNothing(() => {});
