class NormalizeUser {
  constructor(public name: string, protected age: number) {}

  public isAdult() {
    return this.age >= 20;
  }
}

class LuxuriouslyUser extends NormalizeUser {
  public override isAdult(): boolean {
    return this.age >= 0;
  }
}
