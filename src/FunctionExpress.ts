type HumanDescription = {
  height: number;
  weight: number;
};

const BMI = (description: HumanDescription): number => {
  const { height, weight } = description;
  return weight / (height * height);
};

console.log(BMI({ height: 1.78, weight: 86 })); // 27.14
