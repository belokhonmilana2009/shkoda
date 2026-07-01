import { cn } from "@/lib/cn";

export const footerStyles = {
  footer: cn(
    "relative w-full overflow-hidden",
    "bg-[#1a3300]"
  ),
  container: "mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8",
  top: cn(
    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
    "gap-10 lg:gap-12 py-16"
  ),
  brand: "flex flex-col gap-4",
  brandRow: "flex items-center gap-3",
  logo: cn(
    "w-12 h-12 rounded-xl overflow-hidden",
    "border border-white/10"
  ),
  logoPlaceholder: cn(
    "w-full h-full flex items-center justify-center",
    "bg-[#ffe95c] text-[#1a3300] font-bold text-lg",
    "font-[family-name:var(--font-bricolage-grotesque)]"
  ),
  wordmark: cn(
    "font-[family-name:var(--font-bricolage-grotesque)] font-extrabold",
    "text-2xl text-[#fcfaf5] tracking-tight"
  ),
  brandDesc: cn(
    "font-[family-name:var(--font-inter)] text-sm",
    "text-[#fcfaf5]/50 leading-relaxed max-w-[280px]"
  ),
  column: "flex flex-col gap-4",
  columnTitle: cn(
    "font-[family-name:var(--font-bricolage-grotesque)] font-bold",
    "text-sm uppercase tracking-wider",
    "text-[#fcfaf5]/40 mb-2"
  ),
  navList: "flex flex-col gap-3",
  navLink: cn(
    "font-[family-name:var(--font-inter)] text-sm",
    "text-[#fcfaf5]/70 transition-colors duration-200",
    "hover:text-[#ffe95c]"
  ),
  contactItem: cn(
    "flex items-start gap-3",
    "font-[family-name:var(--font-inter)] text-sm",
    "text-[#fcfaf5]/70"
  ),
  contactIcon: "text-base mt-0.5 shrink-0",
  contactLink: "hover:text-[#ffe95c] transition-colors duration-200",
  socials: "flex gap-3 mt-2",
  socialBtn: cn(
    "w-10 h-10 rounded-full flex items-center justify-center",
    "border border-white/10 text-[#fcfaf5]/70",
    "text-xs font-bold",
    "transition-all duration-200",
    "hover:border-[#ffe95c]/40 hover:text-[#ffe95c]",
    "hover:bg-[#ffe95c]/5"
  ),
  divider: cn(
    "w-full h-px bg-white/8"
  ),
  bottom: cn(
    "flex flex-col md:flex-row items-center justify-between gap-4",
    "py-6"
  ),
  copyright: cn(
    "font-[family-name:var(--font-inter)] text-xs",
    "text-[#fcfaf5]/40"
  ),
  privacy: cn(
    "font-[family-name:var(--font-inter)] text-xs",
    "text-[#fcfaf5]/40 transition-colors duration-200",
    "hover:text-[#fcfaf5]/70"
  ),
  decorativeTop: cn(
    "absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px]",
    "bg-gradient-to-r from-transparent via-[#ffe95c]/20 to-transparent"
  ),
} as const;
