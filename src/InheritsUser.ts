class NormalUser {
  constructor(public name: string, private age: number) {}

  public isAdult() {
    return this.age >= 20;
  }
}

class LuxuriousUser extends NormalUser {
  rank: number = 1;
}

const hoii = new LuxuriousUser("uhyo", 10);
console.log(hoii.rank); // 1
console.log(hoii.name); // uhyo
console.log(hoii.isAdult()); // false

class LuxuriousUser2 extends NormalUser {
  rank: number = 1;

  public override isAdult(): boolean {
    return true;
  }
}

const hoii2 = new LuxuriousUser2("uhyo", 10);
console.log(hoii2.isAdult()); // true
