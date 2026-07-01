"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

type ScaleProps = HTMLMotionProps<"div"> & {
  children: React.ReactNode;
};

const scaleVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

export function Scale({ children, ...props }: ScaleProps) {
  return (
    <motion.div
      variants={scaleVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
