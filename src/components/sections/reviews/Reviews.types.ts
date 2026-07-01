import type { SectionBase } from "@/types";

export interface Review {
  readonly id: string;
  readonly quote: string;
  readonly author: string;
  readonly stars: number;
}

export type ReviewsProps = SectionBase;
