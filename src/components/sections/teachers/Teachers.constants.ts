import type { Teacher } from "./Teachers.types";

export const TEACHERS_SECTION = {
  title: "Команда профессионалов",
  subtitle:
    "Каждый педагог — с опытом от 7 лет и искренней любовью к своему делу",
} as const;

export const TEACHERS: readonly Teacher[] = [
  {
    id: "elena",
    name: "Елена Михайловна",
    experience: "12 лет",
    specializations: ["Подготовка к школе", "Каллиграфия"],
    qualities: "Терпение, внимание к деталям, умение найти подход",
    initials: "ЕМ",
    color: "mint",
  },
  {
    id: "anna",
    name: "Анна Сергеевна",
    experience: "8 лет",
    specializations: ["Английский язык", "Скорочтение"],
    qualities: "Энергия, креативность, современные методики",
    initials: "АС",
    color: "teal",
  },
  {
    id: "olga",
    name: "Ольга Петровна",
    experience: "15 лет",
    specializations: ["Логопед", "Раннее развитие"],
    qualities: "Мудрость, забота, многолетний опыт",
    initials: "ОП",
    color: "blush",
  },
  {
    id: "maria",
    name: "Мария Александровна",
    experience: "10 лет",
    specializations: ["Математика", "Ораторское искусство"],
    qualities: "Строгость с любовью, требовательность с улыбкой",
    initials: "МА",
    color: "yellow",
  },
] as const;

export const COLOR_MAP = {
  mint: {
    bg: "bg-sticky-note-mint/40",
    circle: "bg-sticky-note-mint",
    border: "border-sticky-note-mint/30",
    tag: "bg-sticky-note-mint/60",
  },
  teal: {
    bg: "bg-sticky-note-teal/40",
    circle: "bg-sticky-note-teal",
    border: "border-sticky-note-teal/30",
    tag: "bg-sticky-note-teal/60",
  },
  blush: {
    bg: "bg-sticky-note-blush/40",
    circle: "bg-sticky-note-blush",
    border: "border-sticky-note-blush/30",
    tag: "bg-sticky-note-blush/60",
  },
  yellow: {
    bg: "bg-highlighter-yellow/40",
    circle: "bg-highlighter-yellow",
    border: "border-highlighter-yellow/30",
    tag: "bg-highlighter-yellow/60",
  },
} as const;
