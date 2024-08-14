import { getSpecies, checkAndGetSpecies } from "./UserDefTypeGuard";

describe("unknownの型のプロパティアクセスをしたい", () => {
  describe("アクセスできる場合", () => {
    const somethingMove: unknown = {
      type: "animal",
      species: "cat",
    };

    it("動物の条件を満たすunknownなので種別が取得できる", () => {
      expect(getSpecies(somethingMove)).toBe("cat");
    });

    it("[assert ver.] 動物の条件を満たすunknownなので種別が取得できる", () => {
      expect(checkAndGetSpecies(somethingMove)).toBe("cat");
    });
  });

  describe("アクセスできない場合", () => {
    const somethingMove2: unknown = {
      type: "human",
      name: "hugahuga",
    };

    it("動物の条件を満たすunknownではないことを表示する", () => {
      expect(getSpecies(somethingMove2)).toBe("this is incorrect");
    });

    it("[assert ver.] 動物の条件を満たすunknownではないことを表示する", () => {
      expect(() => {
        checkAndGetSpecies(somethingMove2);
      }).toThrow("Given value is not a Coomon.Animal");
    });
  });
});
