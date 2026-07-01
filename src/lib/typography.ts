import { cn } from "./cn";

export const heading = {
  h1: "text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight",
  h2: "text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight",
  h3: "text-2xl md:text-3xl lg:text-4xl font-semibold",
  h4: "text-xl md:text-2xl font-semibold",
  h5: "text-lg md:text-xl font-medium",
  h6: "text-base md:text-lg font-medium",
} as const;

export const body = {
  lead: "text-lg md:text-xl leading-relaxed",
  base: "text-base leading-relaxed",
  small: "text-sm leading-relaxed",
  xs: "text-xs leading-relaxed",
} as const;

export type HeadingVariant = keyof typeof heading;
export type BodyVariant = keyof typeof body;

export function getHeadingClasses(variant: HeadingVariant, className?: string) {
  return cn(heading[variant], className);
}

export function getBodyClasses(variant: BodyVariant, className?: string) {
  return cn(body[variant], className);
}
