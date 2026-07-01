import type { WithClassName, WithAnimation } from "@/types/common";

export interface HeroProps extends WithClassName, WithAnimation {}

export interface AdvantagePill {
  readonly label: string;
  readonly icon: string;
}

export interface HeroContent {
  readonly headline: string;
  readonly highlightWord: string;
  readonly subtitle: string;
  readonly primaryCta: string;
  readonly outlineCta: string;
  readonly advantages: readonly AdvantagePill[];
}
