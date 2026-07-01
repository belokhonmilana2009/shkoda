import { cn } from "@/lib/cn";

export const sectionStyles = {
  section: cn(
    "relative w-full py-24 px-4 overflow-hidden",
    "bg-[#fcfaf5]"
  ),
  container: "mx-auto max-w-[800px]",
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
  list: "flex flex-col gap-3",
  item: cn(
    "group rounded-xl border border-[#1a3300]/10",
    "bg-white/60 backdrop-blur-sm overflow-hidden",
    "transition-all duration-300",
    "hover:border-[#1a3300]/20 hover:shadow-[0_4px_20px_rgba(26,51,0,0.06)]"
  ),
  trigger: cn(
    "w-full flex items-center justify-between gap-4 p-6",
    "text-left cursor-pointer select-none",
    "transition-colors duration-200"
  ),
  question: cn(
    "font-[family-name:var(--font-inter)] text-[#1a3300]",
    "text-base md:text-lg font-semibold leading-snug"
  ),
  icon: cn(
    "shrink-0 w-8 h-8 rounded-full",
    "flex items-center justify-center",
    "bg-[#1a3300]/5 text-[#1a3300]",
    "transition-colors duration-200",
    "group-hover:bg-[#1a3300]/10"
  ),
  content: "overflow-hidden",
  answer: cn(
    "px-6 pb-6 font-[family-name:var(--font-inter)]",
    "text-[#1a3300]/70 text-sm md:text-base leading-relaxed"
  ),
} as const;
