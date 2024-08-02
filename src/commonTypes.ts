namespace Common {
  export type Human = {
    name: string;
    age?: number;
  };

  export type Animal = {
    species: string;
  };

  export type GetTimeFunc = () => Date;

  export type SignType = "plus" | "minus";
}

export { Common };
