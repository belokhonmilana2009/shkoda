export const ANIMATION = {
  duration: {
    fast: 0.2,
    normal: 0.4,
    medium: 0.6,
    slow: 0.8,
    slower: 1.2,
  },
  delay: {
    fast: 0.1,
    normal: 0.2,
    medium: 0.4,
    slow: 0.6,
  },
  ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
  spring: {
    default: { type: "spring" as const, stiffness: 100, damping: 20 },
    gentle: { type: "spring" as const, stiffness: 60, damping: 25 },
    snappy: { type: "spring" as const, stiffness: 200, damping: 15 },
  },
} as const;

export const STAGGER = {
  fast: {
    staggerChildren: 0.05,
    delayChildren: 0.1,
  },
  normal: {
    staggerChildren: 0.1,
    delayChildren: 0.2,
  },
  slow: {
    staggerChildren: 0.15,
    delayChildren: 0.3,
  },
} as const;
