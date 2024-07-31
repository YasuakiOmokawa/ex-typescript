async function fail() {
  throw new Error("this is error message!");
}

const pFail = fail();
pFail.catch((error) => {
  console.log(error);
  console.log("end fail process");
});
