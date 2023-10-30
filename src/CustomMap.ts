function customMap(array: number[], callback: Function): number[] {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i]));
  }
  return result;
}

const datas = [1, 2, 3, 4, 5];
const result = customMap(datas, (data: number) => data * 2);
console.log(result); // [2, 4, 6, 8, 10]
