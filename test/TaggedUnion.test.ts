import { getStatus } from "../src/TaggedUnion";
import { Common } from "../src/commonTypes";

describe("getStatus()", () => {
  it("success", () => {
    const success: Common.Success = {
      done: true,
    };

    expect(getStatus(success)).toBe("upload success");
  });

  it("failure", () => {
    const failure: Common.Failure = {
      done: true,
      error: Error("this is error"),
    };

    expect(getStatus(failure)).toBe("upload failed: this is error");
  });

  it("inprogress", () => {
    const inprogress: Common.Inprogress = {
      done: false,
      progress: 55,
    };

    expect(getStatus(inprogress)).toBe("now uploading: 55%");
  });
});
