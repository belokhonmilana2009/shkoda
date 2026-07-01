"use client";

import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/cn";
import { footerStyles } from "./Footer.styles";
import {
  FOOTER_BRAND,
  FOOTER_NAVIGATION,
  FOOTER_CONTACTS,
  FOOTER_SOCIAL,
  FOOTER_BOTTOM,
} from "./Footer.constants";
import type { FooterProps } from "./Footer.types";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      delay: i * 0.08,
    },
  }),
};

export function Footer({ className }: FooterProps) {
  return (
    <motion.footer
      className={cn(footerStyles.footer, className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      <div className={footerStyles.decorativeTop} />

      <div className={footerStyles.container}>
        <div className={footerStyles.top}>
          <motion.div
            className={footerStyles.brand}
            custom={0}
            variants={fadeInUp}
          >
            <div className={footerStyles.brandRow}>
              <div className={footerStyles.logo}>
                <div className={footerStyles.logoPlaceholder}>Ш</div>
              </div>
              <span className={footerStyles.wordmark}>ШКоДа</span>
            </div>
            <p className={footerStyles.brandDesc}>
              {FOOTER_BRAND.description}
            </p>
            <div className={footerStyles.socials}>
              {FOOTER_SOCIAL.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className={footerStyles.socialBtn}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            className={footerStyles.column}
            custom={1}
            variants={fadeInUp}
          >
            <h3 className={footerStyles.columnTitle}>Навигация</h3>
            <nav className={footerStyles.navList}>
              {FOOTER_NAVIGATION.map((link) => (
                <a key={link.href} href={link.href} className={footerStyles.navLink}>
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>

          <motion.div
            className={footerStyles.column}
            custom={2}
            variants={fadeInUp}
          >
            <h3 className={footerStyles.columnTitle}>Контакты</h3>
            <div className="flex flex-col gap-4">
              {FOOTER_CONTACTS.map((contact) => (
                <div key={contact.label} className={footerStyles.contactItem}>
                  <span className={footerStyles.contactIcon}>{contact.icon}</span>
                  {contact.href ? (
                    <a href={contact.href} className={footerStyles.contactLink}>
                      {contact.value}
                    </a>
                  ) : (
                    <span>{contact.value}</span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className={footerStyles.column}
            custom={3}
            variants={fadeInUp}
          >
            <h3 className={footerStyles.columnTitle}>Мы в соцсетях</h3>
            <p className={cn(
              "font-[family-name:var(--font-inter)] text-sm",
              "text-[#fcfaf5]/50 leading-relaxed"
            )}>
              Подписывайтесь на нас, чтобы быть в курсе новостей, мероприятий и
              полезных материалов для родителей.
            </p>
            <div className={footerStyles.socials}>
              {FOOTER_SOCIAL.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className={footerStyles.socialBtn}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <div className={footerStyles.divider} />

        <div className={footerStyles.bottom}>
          <p className={footerStyles.copyright}>{FOOTER_BOTTOM.copyright}</p>
          <a href="/privacy" className={footerStyles.privacy}>
            {FOOTER_BOTTOM.privacy}
          </a>
        </div>
      </div>
    </motion.footer>
  );
}
