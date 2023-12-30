function getHelloTemplateString(): `Hello, ${string}!` {
  const rand = Math.random();
  if (rand < 0.3) {
    return "Hello, world!";
  } else if (rand < 0.6) {
    return "Hello, my darlin!";
  } else {
    return "Hello, again!";
  }
}

console.log(getHelloTemplateString());
