function createUser2(name: string, age: number): (message: string) => string {
  if (name === "") {
    throw new Error("名前は空にできません");
  }
  return (message: string) => `${name} (${age}) 「${message}」`;
}

const getMessage2 = createUser2("omo3", 23);
console.log(getMessage2("こんにちは"));
