import type { Program } from "./Programs.types";

export const SECTION_TITLE = {
  title: "12 направлений — один центр",
  subtitle:
    "Выбирайте то, что нужно вашему ребёнку сейчас. А когда интерес переключится — переключимся вместе.",
} as const;

export const PROGRAMS: Program[] = [
  {
    id: 1,
    icon: "🎒",
    title: "Подготовка к школе",
    description: "Комплексная программа: чтение, письмо, счёт, логика. Ребёнок идёт в первый класс без стресса",
    color: "mint",
  },
  {
    id: 2,
    icon: "🇬🇧",
    title: "Английский язык",
    description: "Живой язык через игры, песни и проекты. К 4-му классу — уверенный разговорный уровень",
    color: "teal",
  },
  {
    id: 3,
    icon: "🏫",
    title: "Продлённый день",
    description: "После школы: домашние задания, горячий обед, прогулки, творчество. Без гаджетов и без скуки",
    color: "blush",
  },
  {
    id: 4,
    icon: "👶",
    title: "Раннее развитие",
    description: "Сенсорика, моторика, речь, музыка. Первый год — самый важный, мы знаем, чем его наполнить",
    color: "yellow",
  },
  {
    id: 5,
    icon: "🗣️",
    title: "Логопед",
    description: "Постановка звуков, работа с заиканием, развитие речевого аппарата. Дети говорят чисто и без стеснения",
    color: "mint",
  },
  {
    id: 6,
    icon: "📚",
    title: "Репетиторство",
    description: "Индивидуально или в микро-группе. По всем школьным предметам. Нагоняем, закрепляем, обгоняем",
    color: "teal",
  },
  {
    id: 7,
    icon: "🔢",
    title: "Математика",
    description: "Не скучная зубрёжка, а решение задач, логика, олимпиадные примеры. Математика становится любимым уроком",
    color: "blush",
  },
  {
    id: 8,
    icon: "✏️",
    title: "Русский язык",
    description: "Грамотное письмо, богатая речь, любовь к чтению. Диктанты перестают быть проблемой",
    color: "yellow",
  },
  {
    id: 9,
    icon: "🖋️",
    title: "Каллиграфия",
    description: "Красивый почерк — не эстетика, а инструмент. Пишем аккуратно, думаем структурированно",
    color: "mint",
  },
  {
    id: 10,
    icon: "⚡",
    title: "Скорочтение",
    description: "Читаем в 3 раза быстрее, понимаем глубже. Техники запоминания работают и на уроках, и в жизни",
    color: "teal",
  },
  {
    id: 11,
    icon: "🎤",
    title: "Ораторское искусство",
    description: "Голос, уверенность, аргументация. Ребёнок выступает перед классом без страха и запинок",
    color: "blush",
  },
  {
    id: 12,
    icon: "🎨",
    title: "Творческая мастерская",
    description: "ИЗО, лепка, кулинария, дизайн. Пространство, где идеи становятся проектами, а проекты — шедеврами",
    color: "yellow",
  },
];

export const COLOR_MAP = {
  mint: {
    bg: "bg-[#d5f5c2]",
    hover: "hover:bg-[#c4eead]",
    shadow: "shadow-[#d5f5c2]/40",
    border: "border-[#d5f5c2]/50",
    text: "text-[#1a3300]",
  },
  teal: {
    bg: "bg-[#a8e5e5]",
    hover: "hover:bg-[#93dede]",
    shadow: "shadow-[#a8e5e5]/40",
    border: "border-[#a8e5e5]/50",
    text: "text-[#1a3300]",
  },
  blush: {
    bg: "bg-[#f6d0ff]",
    hover: "hover:bg-[#f0bdfb]",
    shadow: "shadow-[#f6d0ff]/40",
    border: "border-[#f6d0ff]/50",
    text: "text-[#1a3300]",
  },
  yellow: {
    bg: "bg-[#ffe95c]",
    hover: "hover:bg-[#ffe23a]",
    shadow: "shadow-[#ffe95c]/40",
    border: "border-[#ffe95c]/50",
    text: "text-[#1a3300]",
  },
} as const;
