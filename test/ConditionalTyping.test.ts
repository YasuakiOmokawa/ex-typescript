import { Common } from "../src/commonTypes";
import {
  argChecker,
  isPrimitive,
  getNumberIfExists,
} from "../src/ConditionalTyping";

test("stringモードの呼び出し検査", () => {
  expect(argChecker("string", "hoge", "fuga")).toBe("string: hoge,fuga");
});

test("numberモードの呼び出し検査", () => {
  expect(argChecker("number", 1, 2, 3)).toBe("number: 1,2,3");
});

test("プロパティのないデータはtrue", () => {
  expect(isPrimitive("hoge")).toBeTruthy;
  expect(isPrimitive(/hoge/)).toBeTruthy;
});

test("プロパティのあるデータはfalse", () => {
  expect(isPrimitive({ hoge: "fuga" })).toBeFalsy;
});

describe("getNumberIfExists()", () => {
  it("データが存在すれば返却", () => {
    const four: Common.Option<number> = {
      type: "some",
      value: 4,
    };

    expect(getNumberIfExists(four)).toBe(4);
  });

  it("データがないので返却しない", () => {
    const nothing: Common.Option<number> = {
      type: "none",
    };

    expect(getNumberIfExists(nothing)).toBe(undefined);
  });
});
