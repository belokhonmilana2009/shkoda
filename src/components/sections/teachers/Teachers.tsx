"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import {
  sectionVariants,
  titleVariants,
  cardVariants,
  cardHoverVariants,
  avatarPulse,
  avatarVariants,
  tagVariants,
} from "./Teachers.animations";
import { sectionStyles } from "./Teachers.styles";
import { TEACHERS, COLOR_MAP } from "./Teachers.constants";
import type { TeachersProps } from "./Teachers.types";

export function Teachers({ className }: TeachersProps) {
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
            Команда{" "}
            <span className={sectionStyles.highlight}>
              профессионалов
              <span className={sectionStyles.highlightUnderline} />
            </span>
          </h2>
          <p className={sectionStyles.subtitle}>
            Каждый педагог — с опытом от 7 лет и искренней любовью к своему делу
          </p>
        </motion.div>

        <div className={sectionStyles.grid}>
          {TEACHERS.map((teacher, i) => {
            const colors = COLOR_MAP[teacher.color];
            return (
              <motion.div
                key={teacher.id}
                custom={i}
                variants={cardVariants}
                initial="rest"
                whileHover="hover"
                animate="rest"
              >
                <motion.div
                  variants={cardHoverVariants}
                  className={cn(sectionStyles.card, colors.bg, colors.border)}
                >
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at 50% 0%, ${
                        teacher.color === "mint" ? "#d5f5c2" :
                        teacher.color === "teal" ? "#a8e5e5" :
                        teacher.color === "blush" ? "#f6d0ff" : "#ffe95c"
                      }80 0%, transparent 70%)`,
                    }}
                  />

                  <div className={cn(sectionStyles.decorative, colors.circle)} />

                  <motion.div
                    className={sectionStyles.avatarWrap}
                    variants={avatarVariants}
                  >
                    <motion.div
                      className={cn(sectionStyles.avatar, colors.circle)}
                      animate={avatarPulse}
                    >
                      {teacher.initials}
                    </motion.div>
                    <div className={cn(sectionStyles.avatarDot, colors.circle)} />
                  </motion.div>

                  <h3 className={sectionStyles.name}>{teacher.name}</h3>
                  <p className={sectionStyles.experience}>
                    Стаж: {teacher.experience}
                  </p>

                  <div className={sectionStyles.tags}>
                    {teacher.specializations.map((spec, j) => (
                      <motion.span
                        key={spec}
                        custom={j}
                        variants={tagVariants}
                        className={cn(sectionStyles.tag, colors.tag)}
                      >
                        {spec}
                      </motion.span>
                    ))}
                  </div>

                  <p className={sectionStyles.qualities}>{teacher.qualities}</p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
