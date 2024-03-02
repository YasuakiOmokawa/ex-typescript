type Some<T> = {
  tag: "some";
  value: T;
};
type None = {
  tag: "none";
};

type Option<T> = Some<T> | None;

function isSome<T>(object: Option<T>): object is Some<T> {
  return object.tag === "some";
}

function isPropertyAccesible2(
  value: unknown
): value is { [key: string]: unknown } {
  return value != null;
}

function isSome2(value: unknown): value is Option<number> {
  if (!isPropertyAccesible2(value)) return false;
  return value.type === "some" && typeof value.value === "number";
}

function showNumber(option: Option<number>): void {
  if (isSome(option)) {
    console.log(option.value);
  }
}

showNumber({ tag: "some", value: 100 });
showNumber({ tag: "none" });
console.log("done");

type OptionObject<T> =
  | {
      hasValue: true;
      value: T;
    }
  | {
      hasValue: false;
    };

const optionNumber: OptionObject<number> = {
  hasValue: true,
  value: 100,
};
const optionString: OptionObject<string> = {
  hasValue: false,
};

function showNumberObject(option: OptionObject<number>): void {
  if (option.hasValue) {
    console.log(option.value);
  }
}

showNumberObject(optionNumber);
showNumberObject(optionString);
console.log("showNumberObject done");
