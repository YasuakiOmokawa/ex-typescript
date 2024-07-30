import { readFile } from "fs/promises";

readFile("fo.txt", "utf8")
  .catch(() => "")
  .then((result) => {
    console.log(result);
  });
