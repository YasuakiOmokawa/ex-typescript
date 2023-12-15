type ReplaceUser = {
  name: string;
  age: number;
};

function createUser(name: string, age: number): ReplaceUser {
  if (name === "") {
    throw new Error("名前は空にできません");
  }
  return { name, age };
}

function getMessage(user: ReplaceUser, message: string): string {
  return `${user.name} (${user.age}) 「${message}」`;
}

const omo = createUser("omo", 20);
console.log(getMessage(omo, "こんにちは"));
