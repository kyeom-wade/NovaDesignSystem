import React from "react";
import styles from "./IconPlus.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.2--Token-Test- .IconItem/Nomal/Plus (node 51578:64866)
// anatomy: root(svg) [ horizontal-bar + vertical-bar ] — single-color plus/add glyph on a 24px grid

interface Props {
  /** Natural icon size from Figma (24px grid) */
  size?: number;
  /** Icon color — defaults to currentColor so it inherits text color */
  color?: string;
  /** Additional class names */
  className?: string;
}

export function IconPlus({ size = 24, color = "currentColor", className }: Props) {
  const rootClass = [styles.root, className].filter(Boolean).join(" ");

  return (
    <svg
      data-cx-component="IconPlus"
      className={rootClass}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      {/* Horizontal bar */}
      <line
        x1="4"
        y1="12"
        x2="20"
        y2="12"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Vertical bar */}
      <line
        x1="12"
        y1="4"
        x2="12"
        y2="20"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
