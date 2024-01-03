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

function numberWithSign2(num: number, type: SignType | "none") {
  if (type === "none") {
    return 0;
  }
  return num * signNumber2(type);
}

console.log(numberWithSign2(5, "plus")); // 5

function numberWithSign3(num: number, type: SignType | "none") {
  return type === "none" ? 0 : num * signNumber2(type);
}

console.log(numberWithSign3(5, "plus")); // 5
