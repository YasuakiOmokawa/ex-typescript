import { ResolveFastifyReplyReturnType } from "fastify/types/type-provider";

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

  export type InProgress = {
    type: "InProgress";
    progress: number;
  };
  export type Success = {
    type: "Success";
  };
  export type Failure = {
    type: "Failure";
    error: Error;
  };
  export type UploadStatus = InProgress | Success | Failure;

  const enableFeature1 = false;
  type OldUser = {
    enableFeature: false;
    oldName: string;
  };
  type NewUser = {
    enableFeature: true;
    newName: string;
  };
  export type FeaturedUser = typeof enableFeature1 extends true
    ? NewUser
    : OldUser;
  export type FeaturedUser2 = OldUser | NewUser;
}

export { Common };
