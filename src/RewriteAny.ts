type AnyHuman = {
  type: "human";
  name: string;
  age: number;
};

function isPropertyAccesible(
  value: unknown
): value is { [key: string]: unknown } {
  return value != null;
}

function isAnyHuman(value: unknown): value is AnyHuman {
  if (!isPropertyAccesible(value)) return false;
  return (
    value.type === "human" &&
    typeof value.name === "string" &&
    typeof value.age === "number"
  );
}
