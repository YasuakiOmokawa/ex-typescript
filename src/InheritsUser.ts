class NormalUser {
  constructor(public name: string, private age: number) {}

  public isAdult() {
    return this.age >= 20;
  }
}

class LuxuriousUser extends NormalUser {
  rank: number = 1;
}

const hoii = new LuxuriousUser("uhyo", 32);
console.log(hoii.rank); // 1
console.log(hoii.name); // uhyo
console.log(hoii.isAdult()); // true
