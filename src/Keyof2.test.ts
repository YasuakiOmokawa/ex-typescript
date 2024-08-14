import { genericsTypekeyGet } from "./Keyof2";
import { Common } from "./commonTypes";

test("第一引数の型に存在するkeyに対応する値を取得できること", () => {
  const omokawa: Common.Human = {
    type: "human",
    name: "omosan",
  };

  expect(genericsTypekeyGet(omokawa, "age")).toBe(undefined);
});
