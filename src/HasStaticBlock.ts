class HasStaticBlock {
  #age: number = 0;
  getAtAge(): number {
    return this.#age;
  }
  setAtAge(age: number): void {
    if (age < 0 || age > 150) {
      throw new Error("年齢は0〜150の間で設定してください");
    }
    this.#age = age;
  }
}
