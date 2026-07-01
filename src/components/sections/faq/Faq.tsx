"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/cn";
import {
  sectionVariants,
  titleVariants,
  itemVariants,
  iconVariants,
  contentVariants,
} from "./Faq.animations";
import { sectionStyles } from "./Faq.styles";
import { FAQ_ITEMS } from "./Faq.constants";
import type { FaqProps } from "./Faq.types";

function FaqItem({
  item,
  index,
}: {
  item: (typeof FAQ_ITEMS)[number];
  index: number;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      custom={index}
      variants={itemVariants}
      className={sectionStyles.item}
    >
      <button
        className={sectionStyles.trigger}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className={sectionStyles.question}>{item.question}</span>
        <motion.span
          className={sectionStyles.icon}
          variants={iconVariants}
          animate={isOpen ? "open" : "closed"}
        >
          +
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="expanded"
            exit="collapsed"
            variants={contentVariants}
            className={sectionStyles.content}
          >
            <p className={sectionStyles.answer}>{item.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function Faq({ className }: FaqProps) {
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
            Ответы на{" "}
            <span className={sectionStyles.highlight}>
              частые вопросы
              <span className={sectionStyles.highlightUnderline} />
            </span>
          </h2>
          <p className={sectionStyles.subtitle}>
            Ответы на популярные вопросы родителей
          </p>
        </motion.div>

        <div className={sectionStyles.list}>
          {FAQ_ITEMS.map((item, i) => (
            <FaqItem key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
