import React from "react";
import styles from "./IconSearch.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.2--Token-Test- .IconItem/Nomal/Search (node 51578:64591)
// anatomy: root(svg) [ lens-circle + handle-line ] — two fill variants: line (outline stroke) | fill (solid)

interface Props {
  /** Natural icon size from Figma (24px grid) */
  size?: number;
  /** Icon color — defaults to currentColor so it inherits text color */
  color?: string;
  /** Additional class names */
  className?: string;
  /**
   * Glyph style variant.
   * - "line"  → outline stroke magnifying glass (Figma fill=Off, node 51561:33456)
   * - "fill"  → solid filled magnifying glass   (Figma fill=On,  node 51613:20838)
   */
  variant?: "line" | "fill";
}

export function IconSearch({
  size = 24,
  color = "currentColor",
  className,
  variant = "line",
}: Props) {
  const rootClass = [styles.root, className].filter(Boolean).join(" ");

  if (variant === "fill") {
    // Solid / filled magnifying glass — Figma node 51613:20838 (fill=On)
    return (
      <svg
        data-cx-component="IconSearch"
        className={rootClass}
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
      >
        {/* Solid lens disc */}
        <circle cx="10.5" cy="10.5" r="6.5" fill={color} />
        {/* Handle — thick rounded stroke */}
        <line
          x1="15.5"
          y1="15.5"
          x2="20.5"
          y2="20.5"
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  // Outline / line magnifying glass — Figma node 51561:33456 (fill=Off)
  return (
    <svg
      data-cx-component="IconSearch"
      className={rootClass}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      {/* Lens ring */}
      <circle
        cx="10.5"
        cy="10.5"
        r="6"
        stroke={color}
        strokeWidth="1.5"
        fill="none"
      />
      {/* Handle */}
      <line
        x1="15.1"
        y1="15.1"
        x2="20"
        y2="20"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
