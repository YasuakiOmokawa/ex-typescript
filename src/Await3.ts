import("fs/promises")
  .then(({ readFile }) => readFile("uhyo.txt", "utf8"))
  .then((data) => {
    let count = 0;
    let currentIndex = 0;
    while (true) {
      const nextIndex = data.indexOf("uhyo", currentIndex);
      if (nextIndex >= 0) {
        count++;
        currentIndex = nextIndex + 1;
      } else {
        break;
      }
    }
    console.log(count);
  });
