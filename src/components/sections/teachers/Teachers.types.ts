import type { SectionBase } from "@/types";

export interface Teacher {
  readonly id: string;
  readonly name: string;
  readonly experience: string;
  readonly specializations: readonly string[];
  readonly qualities: string;
  readonly initials: string;
  readonly color: "mint" | "teal" | "blush" | "yellow";
}

export type TeachersProps = SectionBase;
