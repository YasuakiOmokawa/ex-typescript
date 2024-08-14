export function getRandomData<T>(
  data1: T,
  data2: T,
  seed: number = Math.random()
): T {
  return seed <= 0.5 ? data1 : data2;
}
