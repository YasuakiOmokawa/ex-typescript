type UnaryFunc = (arg: number) => number;
type BinaryFunc = (arg1: number, arg2: number) => number;

const double: UnaryFunc = (arg) => arg * 2;
const sums: BinaryFunc = (arg1, arg2) => arg1 + arg2;

const bin: BinaryFunc = double;
console.log(bin(1, 2));
