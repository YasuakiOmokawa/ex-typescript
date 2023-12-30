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

function makeLiteralKey<T extends string>(userName: T) {
  return `user:${userName}` as const;
}

const omokawaLiteralKey: "user:omokawa" = makeLiteralKey("omokawa");
console.log(omokawaLiteralKey);

function fromKey<T extends string>(key: `user:${T}`): T {
  return key.slice(5) as T;
}

const userKeyLiteral = fromKey("user:omokawa");
console.log(userKeyLiteral);
