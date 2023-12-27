type UnionOptionalHuman = {
  name: string;
  age?: number;
};

const omoIsOptionalHuman: UnionOptionalHuman = {
  name: "omo",
  age: 38,
};

const dadIsOptionalHuman: UnionOptionalHuman = {
  name: "tama",
  age: undefined,
};

function useMaybeHuman(human: UnionOptionalHuman | undefined): number {
  return human?.age ?? 0;
}

console.log(useMaybeHuman(omoIsOptionalHuman)); // 38
console.log(useMaybeHuman(dadIsOptionalHuman)); // 0
console.log(useMaybeHuman(undefined)); // 0
