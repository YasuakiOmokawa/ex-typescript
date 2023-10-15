const toLowerOrUpper = (str: string, toLower?: boolean): string => {
  // toLowerはオプションパラメーター
  if (toLower) {
    return str.toLowerCase();
  }
  return str.toUpperCase();
};

console.log(toLowerOrUpper("AAA")); // AAA
console.log(toLowerOrUpper("BBB", true)); // bbb

const toLowerOrUpperWithDefault = (
  str: string,
  toLower: boolean = false
): string => {
  // toLowerはデフォルトパラメーター
  if (toLower) {
    return str.toLowerCase();
  }
  return str.toUpperCase();
};

console.log(toLowerOrUpperWithDefault("AAA")); // AAA
console.log(toLowerOrUpperWithDefault("BBB", true)); // bbb
