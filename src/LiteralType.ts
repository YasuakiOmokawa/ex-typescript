type FooString = "foo";

const thisIsFooString: FooString = "foo";

function signNumber(type: "plus" | "minus") {
  return type === "plus" ? 1 : -1;
}

console.log(signNumber("plus")); // 1
console.log(signNumber("minus")); // -1
