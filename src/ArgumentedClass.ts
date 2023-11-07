class ArgumentedUser<T> {
  constructor(name: string, private age: number, readonly data: T) {}
}

const me: ArgumentedUser<{ id: number }> = new ArgumentedUser("me", 32, {
  id: 1,
});
console.log(me.data.id); // 1
