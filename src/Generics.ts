type UserGenerics<N> = {
  name: N;
};

function repeatName<T>(element: T, length: number): T[] {
  return Array(length).fill(element);
}

const names = repeatName<UserGenerics<string>>({ name: "Jack" }, 10);
console.log(names);
