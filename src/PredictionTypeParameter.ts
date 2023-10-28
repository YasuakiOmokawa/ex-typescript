function doubleFunction<T>(func: (arg: T) => T): (arg: T) => T {
  return (arg) => func(func(arg));
}

type NumberToNumber = (arg: number) => number;

const plusTwo: NumberToNumber = doubleFunction((x) => x + 1);
console.log(plusTwo(1)); // 3
