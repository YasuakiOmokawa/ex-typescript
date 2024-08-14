namespace Common {
  export type Human = {
    type: "human";
    name: string;
    age?: number;
  };

  export type Animal = {
    type: "animal";
    species: string;
  };

  export type Robot = {
    type: "robot";
    name: string;
  };

  export type GetTimeFunc = () => Date;

  export type SignType = "plus" | "minus";

  export type User = Human | Animal | Robot;

  type SuppoyrtDish = "japan_dish" | "french";
  export type Cutlery = {
    [key in SuppoyrtDish]: string;
  };

  export type KeyValuesAndName = { [K: string]: string } & { name: string };
}

export { Common };
