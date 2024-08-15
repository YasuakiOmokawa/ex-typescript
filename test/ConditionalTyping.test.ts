import exp from "constants";
import { argChecker, isPrimitive } from "../src/ConditionalTyping";

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
