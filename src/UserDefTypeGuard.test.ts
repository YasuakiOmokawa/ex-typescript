import exp from "constants";
import {
  isStringOrNumber,
  isCommonAnimal,
  getSpecies,
} from "./UserDefTypeGuard";

test("不明な値が数値であることを判定", () => {
  const maybeNumber: unknown = 123;
  expect(isStringOrNumber(maybeNumber)).toBe(true);
});

describe("unknownの型のプロパティアクセスをしたい", () => {
  const somethingMove: unknown = {
    type: "animal",
    species: "cat",
  };

  it("お前はAnimalだ", () => {
    expect(isCommonAnimal(somethingMove)).toBe(true);
  });

  it("動物の条件を満たすunknownなので種別が取得できる", () => {
    expect(getSpecies(somethingMove)).toBe("cat");
  });

  const somethingMove2: unknown = {
    type: "human",
    name: "hugahuga",
  };

  it("動物の条件を満たすunknownではないことを表示する", () => {
    expect(getSpecies(somethingMove2)).toBe("this is incorrect");
  });
});
