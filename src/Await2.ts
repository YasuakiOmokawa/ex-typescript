async function main2() {
  const { readFile, writeFile } = await import("fs/promises");

  const fooContent = await readFile("foo.txt", "utf-8");
  await writeFile("bar.txt", fooContent.repeat(2));
  console.log("end write file");
}

main2().then(() => {
  console.log("end main()");
});
