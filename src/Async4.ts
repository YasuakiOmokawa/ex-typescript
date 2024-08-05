async function failManual() {
  throw new Error("this is error message!");
}

const pFail = failManual();
pFail.catch((error) => {
  console.log(error);
  console.log("end fail process");
});
