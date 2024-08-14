import { getRandomData } from "./Randomly";

test("与えられたデータのうち、ランダムで値を返却する", () => {
  const result = getRandomData(1, 2);
  expect(result).toBeGreaterThanOrEqual(1);
  expect(result).toBeLessThanOrEqual(2);
});

test("与えたseedに対応するデータを返却する", () => {
  const url1: URL = new URL("http://hoge.com");
  const url2: URL = new URL("http://fuga.com");
  expect(getRandomData(url1, url2, 1)).toMatchObject(url2);
});
