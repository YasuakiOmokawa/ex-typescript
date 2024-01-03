type SignType = "plus" | "minus";
function signNumber2(type: SignType) {
  return type === "plus" ? 1 : -1;
}

function numberWithSign(num: number, type: SignType | "none") {
  if (type === "none") {
    return 0;
  } else {
    return num * signNumber2(type);
  }
}

console.log(numberWithSign(5, "plus")); // 5
console.log(numberWithSign(5, "minus")); // -5
console.log(numberWithSign(5, "none"));
