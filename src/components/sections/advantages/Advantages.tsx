"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import {
  sectionFadeIn,
  titleSlideUp,
  staggerContainer,
  cardReveal,
} from "./Advantages.animations";
import { sectionStyles, cardColors, cardStyles, decorativeStyles } from "./Advantages.styles";
import { ADVANTAGES_SECTION, ADVANTAGES_CARDS } from "./Advantages.constants";
import type { AdvantagesProps, AdvantageCard } from "./Advantages.types";

function AdvantageCardItem({ card }: { card: AdvantageCard }) {
  return (
    <motion.div
      variants={cardReveal}
      className={cn(cardStyles.card, cardColors[card.color])}
    >
      <div className={cardStyles.iconWrapper}>{card.icon}</div>
      <h3 className={cardStyles.title}>{card.title}</h3>
      <p className={cardStyles.description}>{card.description}</p>
    </motion.div>
  );
}

export function Advantages({ className, ...props }: AdvantagesProps) {
  return (
    <motion.section
      className={cn(sectionStyles.section, className)}
      variants={sectionFadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      {...props}
    >
      {/* Decorative blobs */}
      <div className={decorativeStyles.blob1} />
      <div className={decorativeStyles.blob2} />
      <div className={decorativeStyles.blob3} />

      <div className={sectionStyles.container}>
        <div className={sectionStyles.content}>
          <motion.h2
            className={sectionStyles.title}
            variants={titleSlideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {ADVANTAGES_SECTION.title}
          </motion.h2>

          <motion.p
            className={sectionStyles.subtitle}
            variants={titleSlideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {ADVANTAGES_SECTION.subtitle}
          </motion.p>

          <motion.div
            className={sectionStyles.grid}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {ADVANTAGES_CARDS.map((card) => (
              <AdvantageCardItem key={card.id} card={card} />
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
