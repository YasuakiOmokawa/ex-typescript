console.log(sum2(100));

function sum2(max: number): number {
  try {
    let result = 0;
    for (let i = 0; i <= max; i++) {
      result += i;
    }
    return result;
  } finally {
    console.log("sumから脱出します！");
  }
}
