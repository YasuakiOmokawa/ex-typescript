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

  const dishes = ["japanese", "french"] as const;
  type SuppoyrtDish = (typeof dishes)[number];
  export type Cutlery = {
    [key in SuppoyrtDish]: string;
  };

  export type KeyValuesAndName = { [K: string]: string } & { name: string };

  export type RestArgs<M> = M extends "string"
    ? [string, string]
    : [number, number, number];

  export type Freeze<T> = Readonly<{
    [P in keyof T]: T[P] extends object ? Freeze<T[P]> : T[P];
  }>;

  export type NestedPerson = {
    type: "nested_person";
    name: string;
    address: {
      country: string;
      city: string;
    };
  };

  export type Some<T> = {
    type: "some";
    value: T;
  };
  export type None = {
    type: "none";
  };
  export type Option<T> = Some<T> | None;
}

export { Common };
