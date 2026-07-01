import type { SectionBase } from "@/types";

export type AdvantageCardColor = "mint" | "teal" | "blush" | "yellow";

export type AdvantageCard = {
  id: number;
  title: string;
  description: string;
  color: AdvantageCardColor;
  icon: string;
};

export type AdvantagesProps = SectionBase & {};
