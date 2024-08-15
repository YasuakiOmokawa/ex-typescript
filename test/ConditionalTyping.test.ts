import { argChecker } from "../src/ConditionalTyping";

test("stringモードの呼び出し検査", () => {
  expect(argChecker("string", "hoge", "fuga")).toBe("string: hoge,fuga");
});

test("numberモードの呼び出し検査", () => {
  expect(argChecker("number", 1, 2, 3)).toBe("number: 1,2,3");
});
