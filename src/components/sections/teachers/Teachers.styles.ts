import { cn } from "@/lib/cn";

export const sectionStyles = {
  section: cn(
    "relative w-full py-24 px-4 overflow-hidden",
    "bg-gradient-to-b from-[#fcfaf5] via-[#f5f3ee] to-[#fcfaf5]"
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
    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
    "gap-6"
  ),
  card: cn(
    "relative group rounded-xl p-6 backdrop-blur-sm",
    "border border-white/50 transition-all duration-300",
    "flex flex-col items-center text-center cursor-default"
  ),
  avatarWrap: "relative mb-5",
  avatar: cn(
    "w-24 h-24 rounded-full flex items-center justify-center",
    "text-2xl font-bold text-[#1a3300]/70",
    "border-4 border-white shadow-lg"
  ),
  avatarDot: cn(
    "absolute -bottom-1 -right-1 w-5 h-5 rounded-full",
    "border-2 border-white"
  ),
  name: cn(
    "font-[family-name:var(--font-bricolage-grotesque)] font-bold",
    "text-lg text-[#1a3300] mb-1"
  ),
  experience: cn(
    "font-[family-name:var(--font-inter)] text-sm",
    "text-[#1a3300]/50 font-medium mb-4"
  ),
  tags: "flex flex-wrap justify-center gap-2 mb-4",
  tag: cn(
    "font-[family-name:var(--font-inter)] text-xs font-medium",
    "px-3 py-1 rounded-full",
    "text-[#1a3300]/80"
  ),
  qualities: cn(
    "font-[family-name:var(--font-inter)] text-sm",
    "text-[#1a3300]/60 italic mt-auto pt-2",
    "border-t border-[#1a3300]/10 w-full"
  ),
  decorative: cn(
    "absolute top-4 right-4 w-12 h-12 rounded-full",
    "opacity-20 group-hover:opacity-40 transition-opacity duration-500"
  ),
} as const;
