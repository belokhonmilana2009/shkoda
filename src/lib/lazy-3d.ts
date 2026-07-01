import dynamic from "next/dynamic";

export const DynamicCanvas = dynamic(
  () => import("@react-three/fiber").then((mod) => mod.Canvas),
  { ssr: false },
);

export type { CanvasProps } from "@react-three/fiber";
