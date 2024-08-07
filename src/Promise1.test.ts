import { readFileTest } from "./Promise1";
import mockStdin from "mock-stdin";

console.log = jest.fn();
jest.mock("fs/promises", () => ({
  readFile: jest.fn().mockResolvedValue("ok"),
}));

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

    it("ファイルの内容を出力する", () => {
      expect(console.log).toHaveBeenNthCalledWith(1, "success read file!");
      expect(console.log).toHaveBeenNthCalledWith(2, "ok");
      expect(console.log).toHaveBeenNthCalledWith(
        3,
        "closes read line interface."
      );
    });
  });
});
