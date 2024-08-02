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

  export type GetTimeFunc = () => Date;

  export type SignType = "plus" | "minus";

  export type User = Human | Animal;
}

export { Common };
