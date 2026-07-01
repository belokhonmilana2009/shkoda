import type { Achievement } from "./Achievements.types";

export const SECTION_TITLE = {
  title: "Чего достигают наши дети",
  subtitle: "Цифры, которые говорят громче слов",
} as const;

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 1,
    value: 98,
    suffix: "%",
    icon: "📖",
    description: "Детей читают уверенно и с интересом уже через 3 месяца занятий",
    color: "mint",
  },
  {
    id: 2,
    value: 100,
    suffix: "%",
    icon: "🗣️",
    description: "Родителей отмечают улучшение речи и дикции ребёнка",
    color: "teal",
  },
  {
    id: 3,
    value: 95,
    suffix: "%",
    icon: "💪",
    description: "Детей перестают стесняться и свободно выступают перед аудиторией",
    color: "blush",
  },
  {
    id: 4,
    value: 97,
    suffix: "%",
    icon: "🎒",
    description: "Выпускников поступают в школы и гимназии без вступительных стрессов",
    color: "yellow",
  },
  {
    id: 5,
    value: 93,
    suffix: "%",
    icon: "📈",
    description: "Учеников улучшают текущую успеваемость в школе",
    color: "mint",
  },
  {
    id: 6,
    value: 100,
    suffix: "%",
    icon: "⭐",
    description: "Детей находят и развивают талант, о котором раньше не догадывались",
    color: "teal",
  },
];

export const ACHIEVEMENT_COLORS = {
  mint: { bg: "#d5f5c2", text: "#1a3300", glow: "rgba(213, 245, 194, 0.5)" },
  teal: { bg: "#a8e5e5", text: "#1a3300", glow: "rgba(168, 229, 229, 0.5)" },
  blush: { bg: "#f6d0ff", text: "#1a3300", glow: "rgba(246, 208, 255, 0.5)" },
  yellow: { bg: "#ffe95c", text: "#1a3300", glow: "rgba(255, 233, 92, 0.5)" },
} as const;
