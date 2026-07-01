import { cn } from "@/lib/cn";

export const sectionStyles = {
  section: cn(
    "relative w-full py-24 px-4 overflow-hidden",
    "bg-[#1a3300]"
  ),
  container: "mx-auto max-w-[1200px]",
  header: "text-center mb-16",
  title: cn(
    "font-[family-name:var(--font-bricolage-grotesque)] font-extrabold",
    "text-4xl md:text-5xl lg:text-6xl text-[#fcfaf5]",
    "tracking-tight leading-[1.05]"
  ),
  subtitle: cn(
    "font-[family-name:var(--font-inter)] text-[#fcfaf5]/60",
    "text-lg md:text-xl max-w-2xl mx-auto mt-5 leading-relaxed"
  ),
  grid: cn(
    "grid grid-cols-1 md:grid-cols-3",
    "gap-6 md:gap-8"
  ),
  card: cn(
    "relative group rounded-xl p-8",
    "bg-[#fcfaf5] border border-white/40",
    "transition-all duration-300 cursor-default"
  ),
  quoteMark: cn(
    "absolute -top-3 left-6 text-8xl leading-none",
    "font-[family-name:var(--font-bricolage-grotesque)]",
    "text-[#1a3300] select-none pointer-events-none"
  ),
  stars: "flex gap-1 mb-5",
  star: cn(
    "text-lg text-[#ffe95c]"
  ),
  quote: cn(
    "font-[family-name:var(--font-inter)] text-[#1a3300]/80",
    "text-base leading-relaxed mb-6",
    "italic"
  ),
  author: cn(
    "font-[family-name:var(--font-inter)] text-[#1a3300]/60",
    "text-sm font-medium"
  ),
  decorative: cn(
    "absolute top-6 right-6 w-16 h-16 rounded-full",
    "opacity-10 group-hover:opacity-20 transition-opacity duration-500"
  ),
} as const;

export const DECORATIVE_COLORS = [
  "#d5f5c2",
  "#a8e5e5",
  "#f6d0ff",
] as const;
