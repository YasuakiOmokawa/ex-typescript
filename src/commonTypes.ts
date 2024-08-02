namespace Common {
  export type Human = {
    tag: "human";
    name: string;
    age?: number;
  };

  export type Animal = {
    tag: "animal";
    species: string;
  };

  export type GetTimeFunc = () => Date;

  export type SignType = "plus" | "minus";

  export type User = Human | Animal;
}

export { Common };
