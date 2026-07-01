import type { HeaderLink } from "./Header.types";

export const HEADER_NAVIGATION: readonly HeaderLink[] = [
  { label: "О нас", href: "#about" },
  { label: "Направления", href: "#programs" },
  { label: "Педагоги", href: "#teachers" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Контакты", href: "#contacts" },
] as const;

export const HEADER_CTA_TEXT = "Записаться";
export const HEADER_CTA_HREF = "#contacts";
