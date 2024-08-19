import { getStatus } from "../src/TaggedUnion";
import { Common } from "../src/commonTypes";

describe("getStatus()", () => {
  it("success", () => {
    const success: Common.Success = {
      type: "Success",
    };

    expect(getStatus(success)).toBe("upload success");
  });

  it("failure", () => {
    const failure: Common.Failure = {
      type: "Failure",
      error: Error("this is error"),
    };

    expect(getStatus(failure)).toBe("upload failed: this is error");
  });

  it("inprogress", () => {
    const inprogress: Common.InProgress = {
      type: "InProgress",
      progress: 55,
    };

    expect(getStatus(inprogress)).toBe("now uploading: 55%");
  });
});
