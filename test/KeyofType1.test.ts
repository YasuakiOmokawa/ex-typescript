import { Common } from "../src/commonTypes";
import { setAge } from "../src/KeyofType1";

test("渡した整数の年齢になること", () => {
  const omosan: Common.Human = {
    type: "human",
    name: "omo",
    age: 39,
  };
  expect(setAge(omosan, 40).age).toBe(40);
});

test("ageのないデータに数値が渡せること", () => {
  const omosan: Common.Human = {
    type: "human",
    name: "omo",
  };
  expect(setAge(omosan, 50).age).toBe(50);
});
