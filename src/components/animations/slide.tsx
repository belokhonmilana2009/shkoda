"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

type SlideProps = HTMLMotionProps<"div"> & {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right";
};

const slideVariants = {
  up: { hidden: { opacity: 0, y: 60 }, visible: { opacity: 1, y: 0 } },
  down: { hidden: { opacity: 0, y: -60 }, visible: { opacity: 1, y: 0 } },
  left: { hidden: { opacity: 0, x: -60 }, visible: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 60 }, visible: { opacity: 1, x: 0 } },
};

export function Slide({ children, direction = "up", ...props }: SlideProps) {
  return (
    <motion.div
      variants={slideVariants[direction]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
