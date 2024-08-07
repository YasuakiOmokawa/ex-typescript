import { readFileTest } from "./Promise1";
import mockStdin from "mock-stdin";

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
    // const expectedResult = "hoge";

    beforeEach(() => {
      execute(input);
    });

    it("ファイルの内容を出力する", () => {
      expect(console.log).toHaveBeenCalledWith("closes read line interface.");
    });
  });
});
