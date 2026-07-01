"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type HTMLMotionProps } from "framer-motion";

type ParallaxProps = HTMLMotionProps<"div"> & {
  children: React.ReactNode;
  offset?: number;
};

export function Parallax({ children, offset = 50, ...props }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);

  return (
    <motion.div ref={ref} style={{ y }} {...props}>
      {children}
    </motion.div>
  );
}
