"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import {
  sectionVariants,
  titleVariants,
  cardVariants,
  cardHoverVariants,
  quoteMarkVariants,
  starVariants,
} from "./Reviews.animations";
import { sectionStyles, DECORATIVE_COLORS } from "./Reviews.styles";
import { REVIEWS } from "./Reviews.constants";
import type { ReviewsProps } from "./Reviews.types";

export function Reviews({ className }: ReviewsProps) {
  return (
    <motion.section
      className={cn(sectionStyles.section, className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={sectionVariants}
    >
      <div className={sectionStyles.container}>
        <motion.div className={sectionStyles.header} variants={titleVariants}>
          <h2 className={sectionStyles.title}>
            Родители{" "}
            <span className="relative inline-block">
              говорят
              <span className="absolute -bottom-2 left-0 w-full h-3 bg-[#ffe95c]/40 -z-10 rounded-sm" />
            </span>
          </h2>
          <p className={sectionStyles.subtitle}>
            Что говорят о нас семьи, которые уже выбрали «ШКоДу»
          </p>
        </motion.div>

        <div className={sectionStyles.grid}>
          {REVIEWS.map((review, i) => (
            <motion.div
              key={review.id}
              custom={i}
              variants={cardVariants}
              initial="rest"
              whileHover="hover"
              animate="rest"
            >
              <motion.div
                variants={cardHoverVariants}
                className={sectionStyles.card}
              >
                <motion.div
                  variants={quoteMarkVariants}
                  className={sectionStyles.quoteMark}
                >
                  &ldquo;
                </motion.div>

                <div className={sectionStyles.stars}>
                  {Array.from({ length: review.stars }).map((_, j) => (
                    <motion.span
                      key={j}
                      custom={j}
                      variants={starVariants}
                      className={sectionStyles.star}
                    >
                      ★
                    </motion.span>
                  ))}
                </div>

                <p className={sectionStyles.quote}>{review.quote}</p>
                <p className={sectionStyles.author}>{review.author}</p>

                <div
                  className={cn(sectionStyles.decorative)}
                  style={{ backgroundColor: DECORATIVE_COLORS[i] }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
