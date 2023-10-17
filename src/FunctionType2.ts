type Greetable = {
  greet: (message: string) => string;
};
const greetable: Greetable = {
  greet: (message) => `${message}!`,
};
console.log(greetable.greet("Hello")); // 'Hello!'
