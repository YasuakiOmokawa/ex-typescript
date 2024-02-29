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
