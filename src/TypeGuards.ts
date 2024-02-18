function isStringOrNumber(value: unknown): value is string | number {
  return typeof value === "string" || typeof value === "number";
}

const something: unknown = 123;

if (isStringOrNumber(something)) {
  console.log(something.toString());
}

function isStringOrNumberInvalid(value: unknown): value is string | number {
  return typeof value === "string" || typeof value === "boolean";
}

console.log(isStringOrNumberInvalid(something));

type HumanGuard = {
  type: "Human";
  name: string;
  age: number;
};

function isHuman(value: any): value is HumanGuard {
  if (value == null) return false;
  return (
    value.type === "Human" &&
    typeof value.name === "string" &&
    typeof value.age === "number"
  );
}

console.log(isHuman({ type: "Human", name: "Taro", age: 25 }));

function assertHuman(value: any): asserts value is HumanGuard {
  if (value == null) {
    throw new Error("value is null or undefined");
  }
  if (
    value.type !== "Human" ||
    typeof value.name !== "string" ||
    typeof value.age !== "number"
  ) {
    throw new Error("value is not a Human");
  }
}

function checkAndUseHumanGuard(value: unknown) {
  assertHuman(value);
  console.log(value.name);
}
