import type { Variants } from "framer-motion";

export const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

export const headlineVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

export const subtitleVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: 0.2 },
  },
};

export const buttonVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      delay: 0.4 + i * 0.1,
    },
  }),
};

export const floatingVariants: Variants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

export const floatAnimation1 = {
  y: [0, -15, 0],
  transition: { duration: 5, repeat: Infinity, ease: "easeInOut" as const },
};

export const floatAnimation2 = {
  y: [0, 12, 0],
  x: [0, 8, 0],
  transition: { duration: 7, repeat: Infinity, ease: "easeInOut" as const },
};

export const floatAnimation3 = {
  y: [0, -10, 0],
  rotate: [0, 10, -10, 0],
  transition: { duration: 6, repeat: Infinity, ease: "easeInOut" as const },
};
