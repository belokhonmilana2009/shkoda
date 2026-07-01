import type {
  FooterLink,
  FooterContact,
  FooterSocial,
} from "./Footer.types";

export const FOOTER_BRAND = {
  name: "ШКоДа",
  tagline: "Детский образовательный центр",
  description:
    "Сопровождаем ребёнка от 1 года до 15 лет. Развитие, обучение, забота — в одном месте.",
} as const;

export const FOOTER_NAVIGATION: readonly FooterLink[] = [
  { label: "О нас", href: "#about" },
  { label: "Направления", href: "#programs" },
  { label: "Педагоги", href: "#teachers" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Контакты", href: "#contacts" },
] as const;

export const FOOTER_CONTACTS: readonly FooterContact[] = [
  {
    label: "Адрес",
    value: "ул. Примерная, 123, Москва",
    icon: "📍",
  },
  {
    label: "Телефон",
    value: "+7 (999) 123-45-67",
    href: "tel:+79991234567",
    icon: "📞",
  },
  {
    label: "Email",
    value: "info@shkoda.ru",
    href: "mailto:info@shkoda.ru",
    icon: "✉️",
  },
  {
    label: "Часы работы",
    value: "Пн–Пт: 9:00–20:00, Сб: 10:00–18:00",
    icon: "🕐",
  },
] as const;

export const FOOTER_SOCIAL: readonly FooterSocial[] = [
  { label: "VK", href: "https://vk.com/shkoda", icon: "VK" },
  { label: "Telegram", href: "https://t.me/shkoda", icon: "TG" },
  { label: "WhatsApp", href: "https://wa.me/79991234567", icon: "WA" },
] as const;

export const FOOTER_BOTTOM = {
  copyright: "© 2025 ШКоДа. Все права защищены.",
  privacy: "Политика конфиденциальности",
  privacyHref: "#",
} as const;
