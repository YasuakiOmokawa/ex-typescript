type RestArgs<M> = M extends "string"
  ? [string, string]
  : [number, number, number];

function funcM<M extends "string" | "number">(mode: M, ...args: RestArgs<M>) {
  console.log(mode, ...args);
}

funcM("string", "hoge", "fuga");
funcM("number", 1, 2, 3);
