"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import {
  sectionFadeIn,
  headlineReveal,
  leftItemReveal,
  rightItemReveal,
  staggerLeft,
  staggerRight,
  floatAnimation,
} from "./Results.animations";
import {
  sectionStyles,
  leftColumnStyles,
  rightColumnStyles,
  decorativeStyles,
} from "./Results.styles";
import {
  RESULTS_SECTION,
  RESULTS_LEFT,
  RESULTS_RIGHT,
} from "./Results.constants";
import type { ResultsProps, ResultItem } from "./Results.types";

function LeftItem({ item }: { item: ResultItem }) {
  return (
    <motion.div
      variants={leftItemReveal}
      className={leftColumnStyles.item}
    >
      <span className={leftColumnStyles.cross}>✕</span>
      <span className={leftColumnStyles.text}>{item.text}</span>
    </motion.div>
  );
}

function RightItem({ item }: { item: ResultItem }) {
  return (
    <motion.div
      variants={rightItemReveal}
      className={rightColumnStyles.item}
    >
      <span className={rightColumnStyles.check}>✓</span>
      <span className={rightColumnStyles.text}>{item.text}</span>
    </motion.div>
  );
}

export function Results({ className, ...props }: ResultsProps) {
  return (
    <motion.section
      className={cn(sectionStyles.section, className)}
      variants={sectionFadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      {...props}
    >
      {/* Decorative elements */}
      <div className={decorativeStyles.blob1} />
      <div className={decorativeStyles.blob2} />
      <div className={decorativeStyles.blob3} />

      {/* Floating shapes */}
      <motion.div
        className={decorativeStyles.floatingShape1}
        animate={floatAnimation}
      />
      <motion.div
        className={decorativeStyles.floatingShape2}
        animate={{
          ...floatAnimation,
          transition: { ...floatAnimation.transition, delay: 1.5 },
        }}
      />
      <motion.div
        className={decorativeStyles.floatingShape3}
        animate={{
          ...floatAnimation,
          transition: { ...floatAnimation.transition, delay: 3 },
        }}
      />

      <div className={sectionStyles.container}>
        <div className={sectionStyles.content}>
          <motion.h2
            className={sectionStyles.headline}
            variants={headlineReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {RESULTS_SECTION.title}
          </motion.h2>

          <div className={sectionStyles.columnsWrapper}>
            {/* Left column — what parents don't want */}
            <motion.div
              className={leftColumnStyles.wrapper}
              variants={staggerLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
            >
              <span className={leftColumnStyles.label}>Чего не хотите вы</span>
              {RESULTS_LEFT.map((item) => (
                <LeftItem key={item.id} item={item} />
              ))}
            </motion.div>

            {/* Right column — what they want */}
            <motion.div
              className={rightColumnStyles.wrapper}
              variants={staggerRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
            >
              <span className={rightColumnStyles.label}>Что получаете у нас</span>
              {RESULTS_RIGHT.map((item) => (
                <RightItem key={item.id} item={item} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
