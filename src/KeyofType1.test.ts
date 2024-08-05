import { Common } from "./commonTypes";
import { setAge } from "./KeyofType1";

test("渡した整数の年齢になること", () => {
  const omosan: Common.Human = {
    type: "human",
    name: "omo",
    age: 39,
  };
  expect(setAge(omosan, 40).age).toBe(40);
});
