"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

type FadeProps = HTMLMotionProps<"div"> & {
  children: React.ReactNode;
};

const fadeVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export function Fade({ children, ...props }: FadeProps) {
  return (
    <motion.div
      variants={fadeVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
