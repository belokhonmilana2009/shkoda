import type { AgeStage } from "./AgeGroups.types";

export const SECTION_TITLE = {
  title: "Путь ребёнка от 1 до 15 лет",
  subtitle:
    "Каждый этап — новые задачи. Мы знаем, что предложить в любом возрасте.",
} as const;

export const AGE_STAGES: AgeStage[] = [
  {
    id: 1,
    icon: "👶",
    ageRange: "1–3 года",
    description: "Первые слова, первые открытия: запускаем речь, развиваем сенсорику и доверие к миру",
    color: "mint",
  },
  {
    id: 2,
    icon: "🧒",
    ageRange: "3–5 лет",
    description: "Пик любопытства: учим общаться, дружить, задавать вопросы и находить ответы",
    color: "teal",
  },
  {
    id: 3,
    icon: "🎒",
    ageRange: "5–7 лет",
    description: "Предшкольный рывок: чтение, счёт, письмо. Поступаем в лучшую школу без репетиторов",
    color: "yellow",
  },
  {
    id: 4,
    icon: "📚",
    ageRange: "7–10 лет",
    description: "Школьная опора: учим учиться — системно, без выгорания, с интересом к предметам",
    color: "blush",
  },
  {
    id: 5,
    icon: "🏆",
    ageRange: "10–15 лет",
    description: "Подростковый прорыв: профильные предметы, проекты, профориентация. Готовим к взрослой жизни",
    color: "terracotta",
  },
];

export const STAGE_COLORS = {
  mint: { bg: "#d5f5c2", text: "#1a3300", glow: "rgba(213, 245, 194, 0.6)" },
  teal: { bg: "#a8e5e5", text: "#1a3300", glow: "rgba(168, 229, 229, 0.6)" },
  yellow: { bg: "#ffe95c", text: "#1a3300", glow: "rgba(255, 233, 92, 0.6)" },
  blush: { bg: "#f6d0ff", text: "#1a3300", glow: "rgba(246, 208, 255, 0.6)" },
  terracotta: { bg: "#cb5521", text: "#fcfaf5", glow: "rgba(203, 85, 33, 0.6)" },
} as const;
