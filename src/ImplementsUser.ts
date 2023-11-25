type ThisHasName = { name: string };

class ThisIsUser implements ThisHasName {
  name: string;
  #age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.#age = age;
  }

  public isAdult() {
    return this.#age >= 20;
  }
}

const uhyoSan = new ThisIsUser("uhyo", 30);
const jogn = new ThisIsUser("John", 10);

console.log(uhyoSan.isAdult === jogn.isAdult); // true
