export type Nullable<T> = T | null;

export type Optional<T> = T | undefined;

export type DeepPartial<T> = T extends object
  ? { [P in keyof T]?: DeepPartial<T[P]> }
  : T;

export type WithChildren<T = Record<string, unknown>> = T & {
  children?: React.ReactNode;
};

export type WithClassName<T = Record<string, unknown>> = T & {
  className?: string;
};

export type WithAnimation<T = Record<string, unknown>> = T & {
  animate?: boolean;
  delay?: number;
};

export type ComponentProps<T = Record<string, unknown>> = WithChildren<
  WithClassName<T>
>;
