type HasToString = {
  toString: () => string;
};

function useToString1(value: HasToString) {
  console.log(`value is ${value.toString()}`);
}

useToString1({
  toString() {
    return "foo";
  },
});

useToString1(3.14);

function useToString2(value: HasToString & object) {
  console.log(`value is ${value.toString()}`);
}

useToString2({
  toString() {
    return "foo!";
  },
});

// useToString2(3.14);

function useNever(value: never) {
  // never型はどんな型にも代入できる
  const num: number = value;
  const str: string = value;
  console.log(`value is ${value}`);
}

// useNever({});
// useNever(3.14);
