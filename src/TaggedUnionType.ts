type Option<T> =
  | {
      type: "some";
      value: T;
    }
  | {
      type: "none";
    };

function showNumber(option: Option<number>): void {
  if (option.type === "some") {
    console.log(option.value);
  }
}

showNumber({ type: "some", value: 100 });
showNumber({ type: "none" });
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
