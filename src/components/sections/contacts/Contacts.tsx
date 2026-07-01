"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { fadeIn } from "./Contacts.animations";
import { sectionStyles } from "./Contacts.styles";
import type { ContactsProps } from "./Contacts.types";

export function Contacts({ className, ...props }: ContactsProps) {
  return (
    <motion.section
      className={cn(sectionStyles.section, className)}
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      {...props}
    >
      <div className={sectionStyles.container}>
        <div className={sectionStyles.content}>
          {/* Section content will be added in future stages */}
        </div>
      </div>
    </motion.section>
  );
}
