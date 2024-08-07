import { convertUnits } from "./KeyofType2";

test("対象のユニットの割合に変換されること", () => {
  expect(convertUnits(5600, "m")).toMatchObject({
    mm: 5600000,
    cm: 560000,
    m: 5600,
    km: 5.6,
  });
});
