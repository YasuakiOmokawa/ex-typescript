type ReadOnlyT = Readonly<{
  x: number;
  y: number;
}>;
type PartialT = Partial<{
  x: number;
  y: number;
}>;
type RequiredT = Required<{
  x: number;
  y: number;
}>;
type PickT = Pick<
  {
    x: number;
    y: number;
    z: number;
  },
  "x" | "y"
>;
type OmitT = Omit<
  {
    x: number;
    y: number;
    z: number;
  },
  "z"
>;
type Union = "a" | "b" | "c";
type ExtractT = Extract<Union, "a" | "b">;
type ExcludeT = Exclude<Union, "a" | "b">;
type NullableT = {
  x: number;
  y: number | null;
  z: number | undefined;
};

type RequireNotNull<T> = {
  [P in keyof T]: NonNullable<T[P]>;
};
type EnsureT<T, K extends keyof T> = T & RequireNotNull<Pick<T, K>>;

type NonNullableYofT = EnsureT<NullableT, "y">;

const nonNullableYofT: NonNullableYofT = {
  x: 1,
  y: 2,
  z: undefined,
};

type NonNullableAllofT = EnsureT<NullableT, "y" | "z">;

const nonNullableAllofT: NonNullableAllofT = {
  x: 1,
  y: 2,
  z: 3,
};
