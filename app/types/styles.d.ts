import { CSSProperties } from "react";
import { BREAKPOINTS } from "../theme/breakpoint";

export type ResponsiveValue = {
  base: string;
} & Partial<Record<keyof typeof BREAKPOINTS, string>>;

export type Responsive = string | ResponsiveValue;
export type ResponsiveStyleType = {
  [K in keyof CSSProperties]?: CSSProperties[K] | Responsive;
};
