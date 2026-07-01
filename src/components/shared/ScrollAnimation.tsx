"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/cn";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type ScrollAnimationProps = {
  children: React.ReactNode;
  className?: string;
  animation?:
    | "fadeIn"
    | "slideUp"
    | "slideLeft"
    | "slideRight"
    | "scaleIn"
    | "flipIn";
  delay?: number;
  duration?: number;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  markers?: boolean;
  pin?: boolean;
  id?: string;
};

const animationVariants = {
  fadeIn: { opacity: 0 },
  slideUp: { opacity: 0, y: 80 },
  slideLeft: { opacity: 0, x: 80 },
  slideRight: { opacity: 0, x: -80 },
  scaleIn: { opacity: 0, scale: 0.6 },
  flipIn: { opacity: 0, rotationX: -90 },
};

export function ScrollAnimation({
  children,
  className,
  animation = "slideUp",
  delay = 0,
  duration = 0.8,
  start = "top 85%",
  end = "bottom 20%",
  scrub = false,
  markers = false,
  pin = false,
  id,
}: ScrollAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = containerRef.current;
      if (!el) return;

      const fromVars = animationVariants[animation];
      const toVars = {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        rotationX: 0,
        duration,
        delay,
        ease: "power3.out",
      };

      if (scrub !== false) {
        ScrollTrigger.create({
          trigger: el,
          start,
          end,
          scrub: typeof scrub === "number" ? scrub : true,
          markers,
          animation: gsap.fromTo(el, fromVars, toVars),
        });
      } else {
        gsap.fromTo(el, fromVars, { ...toVars, scrollTrigger: { trigger: el, start, markers } });
      }

      if (pin) {
        ScrollTrigger.create({
          trigger: el,
          start: "top top",
          end: "bottom top",
          pin: true,
          markers,
        });
      }
    },
    { scope: containerRef, dependencies: [animation, delay, duration, start, end, scrub, pin] },
  );

  return (
    <div ref={containerRef} className={cn(className)} id={id}>
      {children}
    </div>
  );
}
