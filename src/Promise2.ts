const sleep = (duration: number) => {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, duration);
  });
};

sleep(200).then(() => {
  console.log(`elapsed 0.2 secs.`);
});
