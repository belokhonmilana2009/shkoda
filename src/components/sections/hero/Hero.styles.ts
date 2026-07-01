export const heroStyles = {
  section: "relative min-h-screen w-full overflow-hidden bg-cream-paper flex items-center justify-center",

  container: "relative z-10 mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 py-20 md:py-24 lg:py-0",

  contentWrapper: "flex flex-col items-center text-center gap-8 md:gap-10",

  headline:
    "font-[family-name:var(--font-bricolage-grotesque)] font-extrabold text-forest-ink leading-[1.0] tracking-[0.04em] text-[clamp(2.5rem,6vw,5rem)] max-w-[900px]",

  highlight:
    "relative inline-block text-forest-ink",

  highlightUnderline:
    "absolute -bottom-1 left-0 right-0 h-[0.3em] bg-highlighter-yellow/60 rounded-[2px] -z-10",

  subtitle:
    "font-[family-name:var(--font-inter)] text-pencil-gray text-[clamp(1rem,2vw,1.25rem)] leading-relaxed max-w-[600px] font-normal",

  ctaGroup: "flex flex-col sm:flex-row items-center gap-4 mt-2",

  primaryCta:
    "group relative inline-flex items-center justify-center gap-2 bg-forest-ink text-cream-paper font-[family-name:var(--font-inter)] font-semibold text-base px-8 py-4 rounded-[6px] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_8px_30px_rgba(26,51,0,0.25)] active:scale-[0.98]",

  outlineCta:
    "inline-flex items-center justify-center gap-2 border-2 border-forest-ink/20 text-forest-ink font-[family-name:var(--font-inter)] font-semibold text-base px-8 py-4 rounded-[6px] transition-all duration-300 hover:border-forest-ink/40 hover:bg-forest-ink/5 active:scale-[0.98]",

  pillsContainer: "flex flex-wrap justify-center gap-3 mt-4",

  pill:
    "inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm border border-forest-ink/8 text-forest-ink font-[family-name:var(--font-inter)] text-sm font-medium px-5 py-2.5 rounded-[9999px] shadow-[rgba(0,0,0,0.03)_0px_1px_3px] transition-all duration-300 hover:bg-white hover:shadow-[rgba(0,0,0,0.08)_0px_4px_12px] hover:scale-[1.03]",

  pillIcon: "text-highlighter-yellow text-xs",

  imageLeft:
    "absolute left-[-4%] top-[12%] w-[320px] h-[400px] md:w-[380px] md:h-[480px] lg:w-[420px] lg:h-[520px] rounded-[12px] overflow-hidden shadow-[0_20px_60px_rgba(26,51,0,0.12)] z-[1]",

  imageRight:
    "absolute right-[-2%] top-[18%] w-[280px] h-[360px] md:w-[340px] md:h-[440px] lg:w-[380px] lg:h-[480px] rounded-[12px] overflow-hidden shadow-[0_20px_60px_rgba(26,51,0,0.12)] z-[1]",

  decorativeTeal:
    "absolute top-[15%] right-[18%] w-16 h-16 md:w-20 md:h-20 bg-sticky-note-teal/40 rounded-[12px] rotate-12 z-[0]",

  decorativeMint:
    "absolute bottom-[25%] left-[10%] w-14 h-14 md:w-18 md:h-18 bg-sticky-note-mint/40 rounded-full z-[0]",

  decorativeBlush:
    "absolute top-[35%] left-[22%] w-12 h-12 md:w-16 md:h-16 bg-sticky-note-blush/30 rounded-[12px] -rotate-6 z-[0]",

  decorativeYellow:
    "absolute bottom-[20%] right-[12%] w-10 h-10 md:w-14 md:h-14 bg-highlighter-yellow/30 rounded-full z-[0]",

  dotPattern: "absolute inset-0 z-[0] opacity-[0.035] pointer-events-none",

  scrollIndicator:
    "absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20",

  scrollText:
    "font-[family-name:var(--font-roboto-mono)] text-[11px] uppercase tracking-[0.15em] text-pencil-gray/60",

  scrollLine:
    "w-[1px] h-10 bg-gradient-to-b from-pencil-gray/40 to-transparent",
} as const;
