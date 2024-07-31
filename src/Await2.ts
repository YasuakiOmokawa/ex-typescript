async function main2() {
  const { readFile, writeFile } = await import("fs/promises");

  try {
    const fooContent = await readFile("foao.txt", "utf-8");
    await writeFile("bar.txt", fooContent.repeat(2));
    console.log("end write file");
  } catch {
    console.error("this is fail");
  }
}

main2().then(() => {
  console.log("end main()");
});
