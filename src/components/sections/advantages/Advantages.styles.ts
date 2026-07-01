export const sectionStyles = {
  section:
    "relative py-20 md:py-28 lg:py-32 bg-cream-paper overflow-hidden",
  container: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
  content: "flex flex-col items-center",
  title:
    "font-[family-name:var(--font-bricolage-grotesque)] text-forest-ink text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-center leading-tight",
  subtitle:
    "mt-4 text-forest-ink/70 font-[family-name:var(--font-inter)] text-lg md:text-xl max-w-2xl text-center",
  grid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14 w-full",
} as const;

export const cardColors = {
  mint: "bg-sticky-note-mint/40",
  teal: "bg-sticky-note-teal/40",
  blush: "bg-sticky-note-blush/40",
  yellow: "bg-highlighter-yellow/40",
} as const;

export const cardStyles = {
  card: `
    group relative flex flex-col items-start p-7 md:p-8
    rounded-xl border border-forest-ink/5
    shadow-[0_2px_16px_rgba(0,0,0,0.04)]
    transition-all duration-300 ease-out
    hover:-translate-y-2
    hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)]
    cursor-default
  `,
  iconWrapper:
    "flex items-center justify-center w-12 h-12 rounded-lg bg-white/60 backdrop-blur-sm mb-5 text-2xl shadow-[0_2px_8px_rgba(0,0,0,0.06)]",
  title:
    "font-[family-name:var(--font-bricolage-grotesque)] text-forest-ink font-bold text-lg md:text-xl leading-snug",
  description:
    "mt-2 font-[family-name:var(--font-inter)] text-forest-ink/65 text-sm md:text-base leading-relaxed",
} as const;

export const decorativeStyles = {
  blob1:
    "absolute -top-20 -right-20 w-64 h-64 rounded-full bg-sticky-note-mint/20 blur-3xl pointer-events-none",
  blob2:
    "absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-sticky-note-teal/20 blur-3xl pointer-events-none",
  blob3:
    "absolute top-1/3 right-0 w-40 h-40 rounded-full bg-highlighter-yellow/15 blur-3xl pointer-events-none",
} as const;
