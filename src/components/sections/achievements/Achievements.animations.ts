import { Variants } from 'framer-motion'

export const sectionTitleVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
}

export const gridVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
}

export const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export const numberVariants: Variants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 15,
      delay: 0.2,
    },
  },
}

export const cardHoverVariants = {
  rest: {
    y: 0,
    boxShadow: '0 2px 12px rgba(26, 51, 0, 0.06)',
  },
  hover: {
    y: -8,
    boxShadow: '0 24px 48px rgba(26, 51, 0, 0.12)',
    transition: {
      duration: 0.3,
      ease: 'easeOut' as const,
    },
  },
}
