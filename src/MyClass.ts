class MyUser {
  static adminName: string = "admin";

  name: string;
  age: number;
  readonly id?: number;

  constructor(name: string, age: number, id?: number) {
    this.name = name;
    this.age = age;
    this.id = id;
  }

  isAdult(): boolean {
    return this.age >= 20;
  }

  setAge(age: number): void {
    this.age = age;
  }
}

const Jack = new MyUser("Jack", 32);
console.log(Jack);
console.log(Jack.name);
console.log(Jack.age);

Jack.setAge(28);
console.log(Jack.isAdult()); // true

const Bob = new MyUser("Bob", 52, 90);
console.log(Bob.id); // 90
Bob.name = "Bob2";
console.log(Bob.name); // Bob2

type HogeUrl = {
  url: URL;
};

const hogeUrl: HogeUrl = {
  url: new URL("detarame://hoge.com/"),
};

const { url } = hogeUrl;
console.log(url.href);
console.log(MyUser.adminName); // admin
