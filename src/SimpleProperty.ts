class SimpleConstructorClass {
  constructor(public name: string, private age: number) {}

  public thisIsPublicMethod() {
    return this.#isAdult();
  }

  #isAdult() {
    return this.age >= 20;
  }
}

const simpleConstructorClass = new SimpleConstructorClass("Jack", 32);
console.log(simpleConstructorClass.thisIsPublicMethod()); // true
