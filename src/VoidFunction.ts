function helloWorldTimes(n: number): void {
  for (let i = 0; i < n; i++) {
    console.log("Hello World");
  }
}

helloWorldTimes(5); // Hello World が 5 回表示される

function helloWorldTimesFastReturn(n: number): void {
  if (n <= 0) {
    console.log("n は 0 より大きい数である必要があります");
    return;
  }
  if (n > 10) {
    console.log("n は 10 以下である必要があります");
    return;
  }

  for (let i = 0; i < n; i++) {
    console.log("Hello World2");
  }
}

helloWorldTimesFastReturn(5); // Hello World が 5 回表示される
helloWorldTimesFastReturn(0); // n は 0 より大きい数である必要があります
helloWorldTimesFastReturn(11); // n は 10 以下である必要があります
