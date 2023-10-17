type FuncSignature = {
  isUsed?: boolean;
  (num: number): void;
};

const doubleSignature: FuncSignature = (num) => console.log(num * 2);

doubleSignature(3); // 6
console.log(doubleSignature.isUsed); // undefined
doubleSignature.isUsed = true;
console.log(doubleSignature.isUsed); // true
