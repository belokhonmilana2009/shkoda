"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/cn";
import {
  heroContainerVariants,
  heroItemVariants,
  heroPillVariants,
  floatAnimation,
  floatAnimationReverse,
  floatAnimationSlow,
  decorativeVariants,
  scrollIndicatorVariants,
  imageFloatVariants,
} from "./Hero.animations";
import { heroStyles as s } from "./Hero.styles";
import { HERO_CONTENT } from "./Hero.constants";
import type { HeroProps } from "./Hero.types";

function DotPattern() {
  return (
    <svg className={s.dotPattern} width="100%" height="100%">
      <defs>
        <pattern id="hero-dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.2" fill="#1a3300" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#hero-dots)" />
    </svg>
  );
}

function DecorativeSquiggle({ className }: { className?: string }) {
  return (
    <svg
      className={cn("absolute pointer-events-none", className)}
      width="120"
      height="20"
      viewBox="0 0 120 20"
      fill="none"
    >
      <path
        d="M2 10C10 2 20 18 30 10C40 2 50 18 60 10C70 2 80 18 90 10C100 2 110 18 118 10"
        stroke="#ffe95c"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.35"
      />
    </svg>
  );
}

export default function Hero({ className, animate = true }: HeroProps) {
  return (
    <section className={cn(s.section, className)}>
      <DotPattern />

      {/* Decorative floating elements */}
      <motion.div
        className={s.decorativeTeal}
        animate={floatAnimationSlow}
        variants={decorativeVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      />
      <motion.div
        className={s.decorativeMint}
        animate={floatAnimationReverse}
        variants={decorativeVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      />
      <motion.div
        className={s.decorativeBlush}
        animate={floatAnimation}
        variants={decorativeVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      />
      <motion.div
        className={s.decorativeYellow}
        animate={floatAnimationReverse}
        variants={decorativeVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      />

      {/* Left floating image */}
      <motion.div
        className={s.imageLeft}
        animate={floatAnimation}
        variants={imageFloatVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Image
          src="/images/hero-left.png"
          alt="Дети занимаются в ШКоДа"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 320px, (max-width: 1024px) 380px, 420px"
          priority
        />
      </motion.div>

      {/* Right floating image */}
      <motion.div
        className={s.imageRight}
        animate={floatAnimationReverse}
        variants={imageFloatVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Image
          src="/images/hero-right.png"
          alt="Ребёнок рисует в ШКоДа"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 280px, (max-width: 1024px) 340px, 380px"
          priority
        />
      </motion.div>

      <DecorativeSquiggle className="top-[28%] left-[8%] rotate-[-8deg] opacity-40" />
      <DecorativeSquiggle className="bottom-[30%] right-[6%] rotate-[12deg] opacity-30" />

      {/* Main content */}
      <div className={s.container}>
        <motion.div
          className={s.contentWrapper}
          variants={animate ? heroContainerVariants : undefined}
          initial={animate ? "hidden" : undefined}
          whileInView={animate ? "visible" : undefined}
          viewport={{ once: true }}
        >
          {/* Headline */}
          <motion.h1 className={s.headline} variants={heroItemVariants}>
            Где дети{" "}
            <span className={s.highlight}>
              раскрывают
              <span className={s.highlightUnderline} />
            </span>{" "}
            свой потенциал
          </motion.h1>

          {/* Subtitle */}
          <motion.p className={s.subtitle} variants={heroItemVariants}>
            {HERO_CONTENT.subtitle}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div className={s.ctaGroup} variants={heroItemVariants}>
            <button className={s.primaryCta}>
              {HERO_CONTENT.primaryCta}
            </button>
            <button className={s.outlineCta}>
              {HERO_CONTENT.outlineCta}
            </button>
          </motion.div>

          {/* Advantage Pills */}
          <motion.div className={s.pillsContainer}>
            {HERO_CONTENT.advantages.map((adv, i) => (
              <motion.div
                key={adv.label}
                className={s.pill}
                variants={heroPillVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
              >
                <span className={s.pillIcon}>{adv.icon}</span>
                {adv.label}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className={s.scrollIndicator}
        variants={scrollIndicatorVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <span className={s.scrollText}>Листайте</span>
        <motion.div
          className={s.scrollLine}
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
