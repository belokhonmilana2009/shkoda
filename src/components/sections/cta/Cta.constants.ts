import type { CtaContent } from "./Cta.types";

export const CTA_CONTENT: CtaContent = {
  headline: "Помогаем детям раскрывать потенциал",
  highlightWord: "раскрывать",
  subtitle:
    "В атмосфере заботы, уважения и любви. Приходите знакомиться — первое занятие в подарок.",
  primaryCta: "Записаться на пробное →",
  outlineCta: "Позвонить +7 (999) 123-45-67",
} as const;

export const FLOATING_ELEMENTS = [
  { emoji: "✦", className: "top-[15%] left-[8%] text-2xl opacity-30" },
  { emoji: "●", className: "top-[25%] right-[12%] text-lg opacity-20" },
  { emoji: "★", className: "bottom-[20%] left-[15%] text-xl opacity-25" },
  { emoji: "◆", className: "bottom-[30%] right-[8%] text-xl opacity-20" },
  { emoji: "○", className: "top-[45%] left-[5%] text-lg opacity-15" },
  { emoji: "✦", className: "top-[10%] right-[20%] text-sm opacity-25" },
] as const;
