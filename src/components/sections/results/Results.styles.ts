export const sectionStyles = {
  section:
    "relative py-20 md:py-28 lg:py-32 bg-forest-ink overflow-hidden",
  container: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
  content: "flex flex-col items-center",
  headline:
    "font-[family-name:var(--font-bricolage-grotesque)] text-cream-paper text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-center leading-tight max-w-4xl",
  columnsWrapper:
    "mt-16 w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start",
} as const;

export const leftColumnStyles = {
  wrapper: "flex flex-col gap-4",
  label:
    "font-[family-name:var(--font-inter)] text-cream-paper/40 text-xs uppercase tracking-[0.2em] font-semibold mb-2",
  item:
    "group flex items-center gap-4 rounded-xl px-6 py-5 bg-cream-paper/[0.06] border border-cream-paper/[0.08] backdrop-blur-sm transition-all duration-300",
  cross:
    "flex items-center justify-center w-8 h-8 rounded-full bg-cream-paper/10 text-cream-paper/50 text-sm font-bold shrink-0 transition-colors duration-300 group-hover:bg-terracotta/20 group-hover:text-terracotta",
  text: "font-[family-name:var(--font-inter)] text-cream-paper/50 text-base md:text-lg line-through decoration-cream-paper/20",
};

export const rightColumnStyles = {
  wrapper: "flex flex-col gap-4",
  label:
    "font-[family-name:var(--font-inter)] text-highlighter-yellow text-xs uppercase tracking-[0.2em] font-semibold mb-2",
  item:
    "group flex items-center gap-4 rounded-xl px-6 py-5 bg-highlighter-yellow/[0.08] border border-highlighter-yellow/[0.12] backdrop-blur-sm transition-all duration-300 hover:bg-highlighter-yellow/[0.14]",
  check:
    "flex items-center justify-center w-8 h-8 rounded-full bg-highlighter-yellow/20 text-highlighter-yellow text-sm font-bold shrink-0 transition-colors duration-300 group-hover:bg-highlighter-yellow/30",
  text: "font-[family-name:var(--font-inter)] text-cream-paper text-base md:text-lg font-medium",
};

export const decorativeStyles = {
  blob1:
    "absolute top-10 left-10 w-72 h-72 rounded-full bg-sticky-note-teal/10 blur-[100px] pointer-events-none",
  blob2:
    "absolute bottom-10 right-10 w-64 h-64 rounded-full bg-highlighter-yellow/10 blur-[100px] pointer-events-none",
  blob3:
    "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-sticky-note-blush/5 blur-[120px] pointer-events-none",
  floatingShape1:
    "absolute top-16 right-[15%] w-16 h-16 rounded-2xl bg-sticky-note-teal/15 blur-sm pointer-events-none",
  floatingShape2:
    "absolute bottom-20 left-[12%] w-12 h-12 rounded-full bg-highlighter-yellow/15 blur-sm pointer-events-none",
  floatingShape3:
    "absolute top-1/3 left-[8%] w-10 h-10 rounded-lg bg-sticky-note-mint/15 blur-sm pointer-events-none rotate-45",
};
