class ReplaceUser2 {
  readonly name: string;
  readonly age: number;

  constructor(name: string, age: number) {
    if (name === "") {
      throw new Error("名前は空にできません");
    }
    this.name = name;
    this.age = age;
  }

  public getMessage(message: string): string {
    return `${this.name} (${this.age}) 「${message}」`;
  }
}

const omo2 = new ReplaceUser2("omo", 20);
console.log(omo2.getMessage("こんにちは"));
