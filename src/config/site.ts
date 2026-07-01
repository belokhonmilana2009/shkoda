export const siteConfig = {
  name: "ШКоДа",
  shortName: "ШКоДа",
  description: "Детский образовательный центр",
  url: "https://shkoda.ru",
  locale: "ru-RU",
  ogImage: "/images/og.jpg",
  logo: "/images/logo.jpg",
  links: {
    vk: "https://vk.com/",
    telegram: "https://t.me/",
    whatsapp: "https://wa.me/",
  },
} as const;

export type SiteConfig = typeof siteConfig;
