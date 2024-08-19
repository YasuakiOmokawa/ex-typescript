import { Common } from "../src/commonTypes";
import {
  argChecker,
  isPrimitive,
  getNumberIfExists,
  getNumberIfExists2,
  doubleOption,
  getFeaturedUseName,
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
  describe("データ存在のケース", () => {
    const four: Common.Option<number> = {
      type: "some",
      value: 4,
    };

    it("返却", () => {
      expect(getNumberIfExists(four)).toBe(4);
    });

    it("[assert] 返却", () => {
      expect(getNumberIfExists2(four)).toBe(4);
    });
  });

  describe("データがないケース", () => {
    const nothing: Common.Option<number> = {
      type: "none",
    };

    it("返却しない", () => {
      expect(getNumberIfExists(nothing)).toBe(undefined);
    });

    it("[assert] 例外をスローする", () => {
      expect(() => {
        getNumberIfExists2(nothing);
      }).toThrow(/has nothing value/);
    });
  });

  describe("doubleOption()", () => {
    test("データがあるならコールバック適用", () => {
      const five: Common.Option<number> = {
        type: "some",
        value: 5,
      };
      expect(doubleOption(five)).toMatchObject({ type: "some", value: 10 });
    });

    test("データがないならコールバック適用", () => {
      const nothing: Common.Option<number> = {
        type: "none",
      };
      expect(doubleOption(nothing)).toMatchObject(nothing);
    });
  });
});

describe("getFeaturedUserName()", () => {
  it("enable feature", () => {
    const user: Common.FeaturedUser2 = {
      enableFeature: true,
      newName: "john",
    };
    expect(getFeaturedUseName(user)).toBe("john");
  });

  it("disable feature", () => {
    const user: Common.FeaturedUser2 = {
      enableFeature: false,
      oldName: "john",
    };
    expect(getFeaturedUseName(user)).toBe("john");
  });
});
