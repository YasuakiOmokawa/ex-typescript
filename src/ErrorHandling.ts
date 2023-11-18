type HasAgeCustomer = { age: number };

class HandlingUser {
  constructor(public name: string, public age: number) {
    if (name === "") {
      throw new Error("Name is empty");
    }
  }
}

function getPrice(customer: HasAgeCustomer) {
  if (customer instanceof HandlingUser) {
    if (customer.name === "uhyo") {
      return 0;
    }
  }
  return customer.age < 18 ? 1000 : 1800;
}

const customer1: HasAgeCustomer = { age: 15 };
const customer2: HasAgeCustomer = { age: 40 };
const uhyo = new HandlingUser("uhyo", 26);

console.log(getPrice(customer1)); // 1000
console.log(getPrice(customer2)); // 1800
console.log(getPrice(uhyo)); // 0
