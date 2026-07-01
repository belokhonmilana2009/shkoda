import type { SectionBase } from "@/types";

export interface FaqItem {
  readonly id: string;
  readonly question: string;
  readonly answer: string;
}

export type FaqProps = SectionBase;
