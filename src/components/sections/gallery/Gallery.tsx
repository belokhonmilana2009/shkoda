"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import {
  sectionVariants,
  titleVariants,
  gridVariants,
  itemVariants,
  itemHoverVariants,
} from "./Gallery.animations";
import { sectionStyles } from "./Gallery.styles";
import { GALLERY_ITEMS } from "./Gallery.constants";
import type { GalleryProps } from "./Gallery.types";

export function Gallery({ className }: GalleryProps) {
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
            Загляните{" "}
            <span className={sectionStyles.highlight}>
              внутрь
              <span className={sectionStyles.highlightUnderline} />
            </span>
          </h2>
          <p className={sectionStyles.subtitle}>
            Каждый день — новые открытия, улыбки и творческие победы
          </p>
        </motion.div>

        <motion.div
          className={sectionStyles.grid}
          variants={gridVariants}
        >
          {GALLERY_ITEMS.map((item, i) => {
            const sizeClass =
              item.size === "wide"
                ? sectionStyles.itemWide
                : item.size === "tall"
                ? sectionStyles.itemTall
                : sectionStyles.itemSquare;

            return (
              <motion.div
                key={item.id}
                custom={i}
                variants={itemVariants}
                initial="rest"
                whileHover="hover"
                animate="rest"
              >
                <motion.div
                  variants={itemHoverVariants}
                  className={cn(sectionStyles.item, sizeClass)}
                  style={{ backgroundColor: item.color }}
                >
                  <div className={sectionStyles.itemInner}>
                    <span className={sectionStyles.emoji}>{item.emoji}</span>
                    <span className={sectionStyles.label}>{item.title}</span>
                  </div>

                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at 50% 50%, ${item.color}90 0%, transparent 70%)`,
                    }}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
}
