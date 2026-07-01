import { cn } from "@/lib/cn";

export const headerStyles = {
  header: cn(
    "fixed top-4 left-1/2 -translate-x-1/2 z-30",
    "w-[calc(100%-32px)] max-w-[1200px]",
    "bg-[#fcfaf5] border border-[#b6b6b6]",
    "rounded-[16px] shadow-[0_4px_24px_rgba(255,233,92,0.12),0_2px_8px_rgba(0,0,0,0.06)]",
    "flex items-center justify-between",
    "py-2.5 px-4 sm:px-6"
  ),
  left: "flex items-center gap-2.5 shrink-0",
  logo: "w-10 h-10 rounded-xl overflow-hidden border border-[#b6b6b6]/30",
  logoImg: "w-full h-full object-cover",
  logoPlaceholder: cn(
    "w-full h-full flex items-center justify-center",
    "bg-[#ffe95c] text-[#1a3300] font-extrabold text-lg",
    "font-[family-name:var(--font-bricolage-grotesque)]"
  ),
  wordmark: cn(
    "font-[family-name:var(--font-inter)] font-bold",
    "text-base text-[#1a3300] tracking-tight hidden sm:block"
  ),
  center: cn(
    "hidden lg:flex items-center gap-1",
    "absolute left-1/2 -translate-x-1/2"
  ),
  navLink: cn(
    "font-[family-name:var(--font-inter)] text-sm font-medium",
    "text-[#1a3300]/70 px-3 py-1.5 rounded-lg",
    "transition-all duration-200",
    "hover:text-[#1a3300] hover:bg-[#1a3300]/5"
  ),
  right: "flex items-center gap-2 shrink-0",
  cta: cn(
    "font-[family-name:var(--font-inter)] text-sm font-semibold",
    "bg-[#1a3300] text-[#fcfaf5]",
    "px-4 py-2 rounded-md",
    "transition-all duration-200",
    "hover:bg-[#1a3300]/85"
  ),
  burger: cn(
    "lg:hidden flex items-center justify-center",
    "w-9 h-9 rounded-lg",
    "text-[#1a3300] transition-colors duration-200",
    "hover:bg-[#1a3300]/5"
  ),
  mobileMenu: cn(
    "lg:hidden absolute top-full left-0 right-0 mt-2",
    "bg-[#fcfaf5] border border-[#b6b6b6]",
    "rounded-2xl shadow-lg",
    "p-4 flex flex-col gap-1",
    "animate-in fade-in slide-in-from-top-2 duration-200"
  ),
  mobileNavLink: cn(
    "font-[family-name:var(--font-inter)] text-sm font-medium",
    "text-[#1a3300]/70 px-4 py-2.5 rounded-lg",
    "transition-all duration-200",
    "hover:text-[#1a3300] hover:bg-[#1a3300]/5"
  ),
  mobileCta: cn(
    "font-[family-name:var(--font-inter)] text-sm font-semibold",
    "bg-[#1a3300] text-[#fcfaf5]",
    "px-4 py-2.5 rounded-md text-center",
    "transition-all duration-200",
    "hover:bg-[#1a3300]/85 mt-2"
  ),
} as const;
