class HogeInstanceof {
  constructor() {
    console.log("HogeInstanceof");
  }
}

const hogeInstanceof = new HogeInstanceof();
console.log(hogeInstanceof instanceof HogeInstanceof); // true
console.log({} instanceof HogeInstanceof); // false

const hugaInstanceof: HogeInstanceof = {
  name: "huga",
};
console.log(hugaInstanceof instanceof HogeInstanceof); // false
