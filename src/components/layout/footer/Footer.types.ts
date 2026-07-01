import type { WithClassName } from "@/types/common";

export interface FooterLink {
  readonly label: string;
  readonly href: string;
}

export interface FooterContact {
  readonly label: string;
  readonly value: string;
  readonly href?: string;
  readonly icon: string;
}

export interface FooterSocial {
  readonly label: string;
  readonly href: string;
  readonly icon: string;
}

export type FooterProps = WithClassName;
