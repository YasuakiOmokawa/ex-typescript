import { readFileTest } from "./Promise1";
import mockStdin from "mock-stdin";
import fs from "fs";

jest.mock("fs");
const mockFs = jest.mocked(fs);
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
      mockFs.readFileSync.mockReturnValue("ok data");
      execute(input);
    });

    afterEach(() => {
      mockFs.readFileSync.mockClear();
      console.log = jest.fn();
    });

    it("ファイルの内容を出力する", () => {
      expect(console.log).toHaveBeenNthCalledWith(1, "success read file!");
      expect(console.log).toHaveBeenNthCalledWith(2, "ok data");
      expect(console.log).toHaveBeenNthCalledWith(
        3,
        "closes read line interface."
      );
    });
  });

  describe("存在しないファイルを指定した場合", () => {
    const input = "hoge.txt\n";

    beforeEach(() => {
      mockFs.readFileSync.mockImplementation(() => {
        throw new Error("this is error");
      });
      execute(input);
    });

    afterEach(() => {
      mockFs.readFileSync.mockClear();
      console.log = jest.fn();
    });

    it("ファイル読み取りエラーを出力する", () => {
      expect(console.log).toHaveBeenNthCalledWith(1, "error read file!");
      expect(mockFs.readFileSync).toThrow("this is error");
      expect(console.log).toHaveBeenNthCalledWith(
        3,
        "closes read line interface."
      );
    });
  });
});
