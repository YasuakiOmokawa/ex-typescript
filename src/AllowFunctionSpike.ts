class AllowFunctionSpikeUser {
  name: string;
  #age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.#age = age;
  }

  public isAdult() {
    return this.#age >= 20;
  }

  public filterOrder(
    users: readonly AllowFunctionSpikeUser[]
  ): AllowFunctionSpikeUser[] {
    return users.filter((user) => user.#age > this.#age);
  }
}

const uhyoSan2 = new AllowFunctionSpikeUser("uhyo", 25);
const john2 = new AllowFunctionSpikeUser("John", 15);
const bob2 = new AllowFunctionSpikeUser("Bob", 40);

const older = uhyoSan2.filterOrder([john2, bob2]);
console.log(older); // [AllowFunctionSpikeUser { name: 'Bob', #age: 40 }]
