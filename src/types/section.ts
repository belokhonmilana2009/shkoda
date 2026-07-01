import type { WithClassName } from "./common";

export type SectionAnimation = {
  animate?: boolean;
  delay?: number;
  duration?: number;
  once?: boolean;
};

export type SectionBase = WithClassName & {
  id?: string;
  background?: "light" | "dark" | "primary" | "accent" | "gradient";
  animation?: SectionAnimation;
};

export type SectionProps = SectionBase & {
  children?: React.ReactNode;
};
