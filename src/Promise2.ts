const sleep = (duration: number) => {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, duration);
  });
};

sleep(200).then(() => {
  console.log(`elapsed 0.2 secs.`);
});

const sleepReject = (duration: number) => {
  return new Promise<never>((_resolve, reject) => {
    setTimeout(reject, duration);
  });
};

sleepReject(200).catch(() => {
  console.log("failed!");
});
