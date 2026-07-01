"use client";

import { Suspense, type ReactNode } from "react";

type ThreeProviderProps = {
  children: ReactNode;
  fallback?: ReactNode;
};

export function ThreeProvider({
  children,
  fallback = null,
}: ThreeProviderProps) {
  return <Suspense fallback={fallback}>{children}</Suspense>;
}
