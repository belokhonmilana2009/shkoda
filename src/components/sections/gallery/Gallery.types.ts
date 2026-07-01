import type { SectionBase } from "@/types";

export interface GalleryItem {
  readonly id: string;
  readonly title: string;
  readonly size: "wide" | "tall" | "square";
  readonly color: string;
  readonly emoji: string;
}

export type GalleryProps = SectionBase;
