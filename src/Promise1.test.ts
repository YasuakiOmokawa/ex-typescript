import { readFileTest } from "./Promise1";
import mockStdin from "mock-stdin";
import { readFileSync } from "fs";

console.log = jest.fn();

describe("ファイル読み取りテスト", () => {
  let stdin: ReturnType<typeof mockStdin.stdin>;

  const execute = (input: string): void => {
    readFileTest();
    stdin.send(input);
    stdin.end();
  };

  beforeEach(() => {
    stdin = mockStdin.stdin();
  });

  describe("存在するファイルを指定した場合", () => {
    const input = "foo.txt\n";

    beforeEach(() => {
      execute(input);
    });

    afterEach(() => {
      console.log = jest.fn();
    });

    it("ファイルの内容を出力する", async () => {
      const readData = await readFileSync("foo.txt", "utf-8");
      expect(console.log).toHaveBeenNthCalledWith(1, "success read file!");
      expect(console.log).toHaveBeenNthCalledWith(2, readData);
      expect(console.log).toHaveBeenNthCalledWith(
        3,
        "closes read line interface."
      );
    });
  });

  describe("存在しないファイルを指定した場合", () => {
    const input = "hoge.txt\n";

    beforeEach(() => {
      execute(input);
    });

    it("ファイル読み取りエラーを出力する", async () => {
      try {
        await readFileSync("hoge.txt", "utf-8");
      } catch (error) {
        expect(console.log).toHaveBeenNthCalledWith(1, "error read file!");
        expect(String(error)).toMatch("ENOENT");
        expect(console.log).toHaveBeenNthCalledWith(
          3,
          "closes read line interface."
        );
      }
    });
  });
});
