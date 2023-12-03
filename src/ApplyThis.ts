class NormalUser2 {
  constructor(public name: string, private age: number) {}

  public isAdult() {
    return this.age >= 20;
  }
}

const applyUhyo = new NormalUser2("uhyo", 30);
const applyJohn = new NormalUser2("John", 10);
console.log(applyUhyo.isAdult()); // true

console.log(applyUhyo.isAdult.apply(applyJohn, [])); // false

class Athis {
  foo = 123;
  bar = this.foo + 100;
  getFoo() {
    return this.foo;
  }
}

const aThis = new Athis();
console.log(aThis.bar, aThis.getFoo()); // 223 123
