"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

type FloatingProps = HTMLMotionProps<"div"> & {
  children: React.ReactNode;
  amplitude?: number;
  duration?: number;
};

export function Floating({
  children,
  amplitude = 10,
  duration = 3,
  ...props
}: FloatingProps) {
  return (
    <motion.div
      animate={{
        y: [0, -amplitude, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
