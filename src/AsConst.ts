const names1 = ["Alice", "Bob", "Eve"];
const names2 = ["Alice", "Bob", "Eve"] as const;

names1.push("hoge"); // OK
// names2.push("hoge"); // NG
