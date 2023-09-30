let tuple: [string, number] = ["a", 1];
tuple = ["b", 2];
console.log(tuple);
console.log(tuple[0]); // 'b'
console.log(tuple[1]); // 2

type LabeledTuple = [label: string, value: number];
const labeledTuple: LabeledTuple = ["a", 1];

console.log(labeledTuple[0]); // 'a'
