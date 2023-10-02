const WholeObject = {
  city: "New York",
  country: "USA",
  continent: "North America",
};

const { city, ...forStepTwo } = WholeObject;
console.log(city); // 'New York'
console.log(forStepTwo); // { country: 'USA', continent: 'North America' }
