import type { GalleryItem } from "./Gallery.types";

export const GALLERY_SECTION = {
  title: "Загляните внутрь",
  subtitle:
    "Не мы — рассказывать. Лучше один раз увидеть, как у нас тепло, шумно и интересно.",
} as const;

export const GALLERY_ITEMS: readonly GalleryItem[] = [
  {
    id: "lessons",
    title: "Дети на занятиях",
    size: "wide",
    color: "#d5f5c2",
    emoji: "📚",
  },
  {
    id: "creative",
    title: "Творческие мастерские",
    size: "tall",
    color: "#a8e5e5",
    emoji: "🎨",
  },
  {
    id: "holidays",
    title: "Праздники и события",
    size: "square",
    color: "#f6d0ff",
    emoji: "🎉",
  },
  {
    id: "projects",
    title: "Совместные проекты",
    size: "wide",
    color: "#ffe95c",
    emoji: "🤝",
  },
  {
    id: "sports",
    title: "Спортивные занятия",
    size: "tall",
    color: "#d5f5c2",
    emoji: "⚽",
  },
  {
    id: "smiles",
    title: "Улыбки и радость",
    size: "square",
    color: "#a8e5e5",
    emoji: "😊",
  },
] as const;
