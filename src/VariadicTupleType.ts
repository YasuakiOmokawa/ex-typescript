type NumberAndStrings = [number, ...string[]];

const arr1: NumberAndStrings = [1, "hello", "world"];
const arr2: NumberAndStrings = [2];

type NumberStringNumber = [number, ...string[], number];
const arr3: NumberStringNumber = [1, "hello", "world", 2];
const arr4: NumberStringNumber = [2, 3];

type AddMax<T extends unknown[]> = [max: number, ...rest: T];
//          ^ ジェネリクスでTをタプルに制限しています
//                                                ^ ... でどこにマージするかを示しています

// これは次のように型を合成することができます:
type MaxMin = AddMax<[min: number]>;
type MaxMinDiameter = AddMax<[min: number, diameter: number]>;
