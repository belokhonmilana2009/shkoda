import { cn } from "@/lib/cn";

export const sectionStyles = {
  section: cn(
    "relative w-full py-24 px-4 overflow-hidden",
    "bg-[#fcfaf5]"
  ),
  container: "mx-auto max-w-[1200px]",
  header: "text-center mb-16",
  title: cn(
    "font-[family-name:var(--font-bricolage-grotesque)] font-extrabold",
    "text-4xl md:text-5xl lg:text-6xl text-[#1a3300]",
    "tracking-tight leading-[1.05]"
  ),
  highlight: "relative inline-block",
  highlightUnderline: cn(
    "absolute -bottom-2 left-0 w-full h-3",
    "bg-[#ffe95c] -z-10 rounded-sm"
  ),
  subtitle: cn(
    "font-[family-name:var(--font-inter)] text-[#1a3300]/70",
    "text-lg md:text-xl max-w-2xl mx-auto mt-5 leading-relaxed"
  ),
  grid: cn(
    "grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
  ),
  item: cn(
    "relative group rounded-xl overflow-hidden cursor-pointer",
    "border border-white/60 transition-all duration-300"
  ),
  itemWide: "col-span-2 aspect-[2/1]",
  itemTall: "row-span-2 aspect-[1/2]",
  itemSquare: "aspect-square",
  itemInner: cn(
    "w-full h-full flex flex-col items-center justify-center",
    "text-[#1a3300]/60 gap-3"
  ),
  emoji: cn(
    "text-5xl md:text-6xl transition-transform duration-300",
    "group-hover:scale-110"
  ),
  label: cn(
    "font-[family-name:var(--font-inter)] text-sm font-medium",
    "text-[#1a3300]/70 text-center px-2"
  ),
} as const;
