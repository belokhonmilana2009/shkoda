"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import {
  sectionVariants,
  headlineVariants,
  subtitleVariants,
  buttonVariants,
  floatingVariants,
  floatAnimation1,
  floatAnimation2,
  floatAnimation3,
} from "./Cta.animations";
import { sectionStyles } from "./Cta.styles";
import { CTA_CONTENT, FLOATING_ELEMENTS } from "./Cta.constants";
import type { CtaProps } from "./Cta.types";

const FLOAT_ANIMATIONS = [floatAnimation1, floatAnimation2, floatAnimation3];

export function Cta({ className }: CtaProps) {
  const { headline, highlightWord, subtitle, primaryCta, outlineCta } =
    CTA_CONTENT;

  const parts = headline.split(highlightWord);

  return (
    <motion.section
      className={cn(sectionStyles.section, className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={sectionVariants}
    >
      <div className={sectionStyles.glow} />

      <div
        className={cn(sectionStyles.decorativeCircle, "w-48 h-48 -top-20 -left-20")}
      />
      <div
        className={cn(sectionStyles.decorativeCircle, "w-64 h-64 -bottom-32 -right-32")}
      />

      {FLOATING_ELEMENTS.map((el, i) => (
        <motion.span
          key={i}
          className={cn(sectionStyles.floating, el.className)}
          variants={floatingVariants}
          animate={FLOAT_ANIMATIONS[i % FLOAT_ANIMATIONS.length]}
        >
          {el.emoji}
        </motion.span>
      ))}

      <div className={sectionStyles.container}>
        <div className={sectionStyles.content}>
          <motion.h2
            className={sectionStyles.headline}
            variants={headlineVariants}
          >
            {parts[0]}
            <span className={sectionStyles.highlight}>
              {highlightWord}
              <span className={sectionStyles.highlightUnderline} />
            </span>
            {parts[1]}
          </motion.h2>

          <motion.p className={sectionStyles.subtitle} variants={subtitleVariants}>
            {subtitle}
          </motion.p>

          <div className={sectionStyles.buttonGroup}>
            <motion.a
              href="#contacts"
              className={sectionStyles.primaryBtn}
              custom={0}
              variants={buttonVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              {primaryCta}
            </motion.a>

            <motion.a
              href="tel:+79991234567"
              className={sectionStyles.outlineBtn}
              custom={1}
              variants={buttonVariants}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {outlineCta}
            </motion.a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
