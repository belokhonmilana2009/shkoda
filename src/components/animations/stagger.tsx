"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

type StaggerProps = HTMLMotionProps<"div"> & {
  children: React.ReactNode;
  staggerDelay?: number;
};

export function Stagger({
  children,
  staggerDelay = 0.1,
  ...props
}: StaggerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: staggerDelay } } }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
