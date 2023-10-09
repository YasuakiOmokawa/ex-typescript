type HumanDescription2 = {
  height: number;
  weight: number;
};

const BMI2 = ({ height, weight }: HumanDescription2): number =>
  weight / (height * height);

console.log(BMI2({ height: 1.78, weight: 8 }));
