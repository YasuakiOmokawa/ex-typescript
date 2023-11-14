class NewSignatureUser {
  name: string = "";
  age: number = 0;
}

type MyUserConstructor = new () => NewSignatureUser;

const NewUser: MyUserConstructor = NewSignatureUser;
const newUser = new NewUser();
console.log(newUser.name, newUser.age);
console.log(newUser); // NewSignatureUser {name: "", age: 0}
