const obj = {
  name: 'John',
  age: 20,
}

console.log(obj.name);
console.log(obj.age);

obj.name = 'Jane';console.log(obj.name);

const name2 = obj.name === 'Jane' ? 'John' : 'Jane';

const obj2 = {
  name2,
  age: 200,
}

console.log(obj2.name2);
