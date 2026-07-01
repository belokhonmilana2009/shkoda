import type { HeroContent } from "./Hero.types";

export const HERO_CONTENT: HeroContent = {
  headline: "Растим личность с первого шага",
  highlightWord: "личность",
  subtitle:
    "От 1 до 15 лет: единая среда развития, где ребёнок раскрывает способности, находит друзей и влюбляется в учёбу.",
  primaryCta: "Записаться на пробное →",
  outlineCta: "Смотреть программы",
  advantages: [
    { label: "15 направлений", icon: "✦" },
    { label: "От 1 до 15 лет", icon: "●" },
    { label: "Педагоги-профи", icon: "★" },
    { label: "Реальный результат", icon: "◆" },
  ],
} as const;
