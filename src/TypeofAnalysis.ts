function formatNumberOrString(value: string | number) {
  if (typeof value === "number") {
    return value.toFixed(3);
  } else {
    return value;
  }
}

console.log(formatNumberOrString("hoge")); // hoge
console.log(formatNumberOrString(10.125)); // 10.125
