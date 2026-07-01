import { cn } from "@/lib/cn";

export const sectionStyles = {
  section: cn(
    "relative w-full py-28 md:py-36 px-4 overflow-hidden",
    "bg-gradient-to-br from-[#1a3300] via-[#1f3d08] to-[#162c00]"
  ),
  container: "mx-auto max-w-[900px] relative z-10",
  content: "flex flex-col items-center text-center gap-8",
  headline: cn(
    "font-[family-name:var(--font-bricolage-grotesque)] font-extrabold",
    "text-3xl sm:text-4xl md:text-5xl lg:text-6xl",
    "text-[#fcfaf5] tracking-tight leading-[1.08]",
    "max-w-[800px]"
  ),
  highlight: "relative inline-block",
  highlightUnderline: cn(
    "absolute -bottom-2 left-0 w-full h-3",
    "bg-[#ffe95c] -z-10 rounded-sm"
  ),
  subtitle: cn(
    "font-[family-name:var(--font-inter)] text-[#fcfaf5]/60",
    "text-lg md:text-xl max-w-2xl leading-relaxed"
  ),
  buttonGroup: "flex flex-col sm:flex-row items-center gap-4 mt-2",
  primaryBtn: cn(
    "inline-flex items-center justify-center gap-2",
    "bg-[#ffe95c] text-[#1a3300]",
    "font-[family-name:var(--font-inter)] font-bold text-base",
    "px-8 py-4 rounded-[6px]",
    "transition-all duration-300",
    "hover:scale-[1.03] hover:shadow-[0_8px_30px_rgba(255,233,92,0.3)]",
    "active:scale-[0.98]"
  ),
  outlineBtn: cn(
    "inline-flex items-center justify-center gap-2",
    "border-2 border-[#fcfaf5]/30 text-[#fcfaf5]",
    "font-[family-name:var(--font-inter)] font-semibold text-base",
    "px-8 py-4 rounded-[6px]",
    "transition-all duration-300",
    "hover:border-[#fcfaf5]/50 hover:bg-[#fcfaf5]/5",
    "active:scale-[0.98]"
  ),
  floating: cn(
    "absolute pointer-events-none select-none",
    "text-[#fcfaf5]"
  ),
  glow: cn(
    "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
    "w-[600px] h-[600px] rounded-full",
    "bg-[#ffe95c]/5 blur-[120px] pointer-events-none"
  ),
  decorativeCircle: cn(
    "absolute rounded-full opacity-10",
    "bg-[#a8e5e5]"
  ),
} as const;
