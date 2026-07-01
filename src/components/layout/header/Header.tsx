"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { cn } from "@/lib/cn";
import { siteConfig } from "@/config/site";
import { headerStyles } from "./Header.styles";
import {
  HEADER_NAVIGATION,
  HEADER_CTA_TEXT,
  HEADER_CTA_HREF,
} from "./Header.constants";
import type { HeaderProps } from "./Header.types";

export function Header({ className }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      setMobileOpen(false);
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    },
    []
  );

  return (
    <header className={cn(headerStyles.header, className)}>
      <div className={headerStyles.left}>
        <div className={headerStyles.logo}>
          <Image
            src={siteConfig.logo}
            alt={siteConfig.name}
            width={40}
            height={40}
            className={headerStyles.logoImg}
            priority
          />
        </div>
        <span className={headerStyles.wordmark}>{siteConfig.name}</span>
      </div>

      <nav className={headerStyles.center}>
        {HEADER_NAVIGATION.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={headerStyles.navLink}
            onClick={(e) => handleNavClick(e, link.href)}
          >
            {link.label}
          </a>
        ))}
      </nav>

      <div className={headerStyles.right}>
        <a
          href={HEADER_CTA_HREF}
          className={headerStyles.cta}
          onClick={(e) => handleNavClick(e, HEADER_CTA_HREF)}
        >
          {HEADER_CTA_TEXT}
        </a>

        <button
          className={headerStyles.burger}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Закрыть меню" : "Открыть меню"}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {mobileOpen ? (
              <path
                d="M5 5L15 15M15 5L5 15"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            ) : (
              <>
                <path
                  d="M3 6H17"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M3 10H17"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M3 14H17"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </>
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className={headerStyles.mobileMenu}>
          {HEADER_NAVIGATION.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={headerStyles.mobileNavLink}
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
          <a
            href={HEADER_CTA_HREF}
            className={headerStyles.mobileCta}
            onClick={(e) => handleNavClick(e, HEADER_CTA_HREF)}
          >
            {HEADER_CTA_TEXT}
          </a>
        </div>
      )}
    </header>
  );
}
