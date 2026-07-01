"use client";

import { type ReactNode } from "react";
import { SmoothScrollProvider } from "./smooth-scroll-provider";

type ProvidersProps = {
  children: ReactNode;
};

export function Providers({ children }: ProvidersProps) {
  return <SmoothScrollProvider>{children}</SmoothScrollProvider>;
}
