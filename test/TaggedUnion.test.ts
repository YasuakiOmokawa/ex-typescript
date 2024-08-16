import { getStatus } from "../src/TaggedUnion";
import { Common } from "../src/commonTypes";

describe("getStatus()", () => {
  const success: Common.Success = {
    done: true,
  };

  it("success", () => {
    expect(getStatus(success)).toBe("upload success");
  });
});
