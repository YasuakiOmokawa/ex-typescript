function customMap<T, Y>(array: T[], callback: Function): Y[] {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i]));
  }
  return result;
}

const datas: number[] = [1, 2, 3, 4, 5];
const result = customMap(datas, (data: number) => data * 2);
console.log(result); // [2, 4, 6, 8, 10]

const datasChangeToBoolean: number[] = [1, -3, -2, 8, 0, -1];
const resultBoolean: boolean[] = customMap(
  datasChangeToBoolean,
  (element: number) => element >= 0
);
console.log(resultBoolean); // [true, false, false, true, true, false]
