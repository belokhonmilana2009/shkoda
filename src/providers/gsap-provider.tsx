"use client";

import { useEffect, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type GsapProviderProps = {
  children: ReactNode;
};

export function GsapProvider({ children }: GsapProviderProps) {
  useEffect(() => {
    gsap.ticker.lagSmoothing(0);
  }, []);

  return <>{children}</>;
}
