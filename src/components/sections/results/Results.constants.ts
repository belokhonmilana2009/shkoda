import type { ResultItem } from "./Results.types";

export const RESULTS_SECTION = {
  title: "Родители выбирают не занятия",
  subtitle: "Они выбирают личность, уверенность и будущее своего ребёнка",
} as const;

export const RESULTS_LEFT: ResultItem[] = [
  { id: 1, text: "Присмотр, пока мы на работе" },
  { id: 2, text: "Ещё один кружок в расписании" },
  { id: 3, text: "Чтобы был чем-то занят" },
] as const;

export const RESULTS_RIGHT: ResultItem[] = [
  { id: 1, text: "Ребёнок просыпается и хочет на занятия" },
  { id: 2, text: "В школе — не отстаёт, а лидирует" },
  { id: 3, text: "Говорит уверенно и мыслит критически" },
  { id: 4, text: "Находит друзей по интересам" },
  { id: 5, text: "Раскрывает талант, о котором вы не догадывались" },
  { id: 6, text: "Детство — счастливое, без перегрузок" },
] as const;
