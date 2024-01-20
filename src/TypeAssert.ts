function getFirstFiveLetters(strOrNum: string | number) {
  const str = strOrNum as string;
  return str.slice(0, 5);
}

console.log(getFirstFiveLetters("TypeScript")); // TypeS
console.log(getFirstFiveLetters(12345)); // 12345
