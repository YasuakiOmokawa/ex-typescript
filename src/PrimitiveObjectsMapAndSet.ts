const map: Map<string, number> = new Map();
map.set("a", 1);
map.set("b", 2);

console.log(map.get("a")); // 1
console.log(map.get("b")); // 2

map.has("a"); // true
map.has("c"); // false

const set: Set<string> = new Set();
set.add("a");
set.add("b");
set.add("a");

set.has("a"); // true
set.has("c"); // false
