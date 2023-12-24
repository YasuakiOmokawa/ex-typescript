type MysteryFunc = ((arg: string) => string) | ((arg: string) => number);

function mysteryFunc(func: MysteryFunc) {
  const result = func("hello");
  console.log(result);
}

mysteryFunc((arg: string) => arg.length);
mysteryFunc((arg: string) => arg);
