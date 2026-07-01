import { Variants } from 'framer-motion'

export const sectionTitleVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
}

export const cardGridVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.3,
    },
  },
}

export const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95,
    rotate: -1,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export const cardHoverVariants = {
  rest: {
    y: 0,
    scale: 1,
    boxShadow: '0 1px 3px rgba(26, 51, 0, 0.06)',
  },
  hover: {
    y: -6,
    scale: 1.02,
    boxShadow: '0 20px 40px rgba(26, 51, 0, 0.12)',
    transition: {
      duration: 0.3,
      ease: 'easeOut' as const,
    },
  },
}
