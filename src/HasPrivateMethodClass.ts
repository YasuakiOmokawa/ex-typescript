class HasPrivateMethodClass {
  name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  public publicMethod() {
    this.privateMethod();
  }

  private privateMethod() {
    console.log(this.age);
  }
}

const hasPrivateMethodClass = new HasPrivateMethodClass("Jack", 32);
console.log(hasPrivateMethodClass.name); // Jack
hasPrivateMethodClass.publicMethod(); // 32
