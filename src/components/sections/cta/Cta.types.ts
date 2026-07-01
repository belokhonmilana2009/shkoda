import type { SectionBase } from "@/types";

export interface CtaContent {
  readonly headline: string;
  readonly highlightWord: string;
  readonly subtitle: string;
  readonly primaryCta: string;
  readonly outlineCta: string;
}

export type CtaProps = SectionBase;
