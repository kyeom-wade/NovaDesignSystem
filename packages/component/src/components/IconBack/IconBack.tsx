import React from "react";
import styles from "./IconBack.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.2--Token-Test- .IconItem/Nomal/Back (node 51578:64852)
// anatomy: root(svg) [ back-chevron-path ] — single left-pointing chevron glyph for back navigation

interface Props {
  /** Icon size in px — matches the 24px Figma grid */
  size?: number;
  /** Icon color; defaults to currentColor for theme inheritance */
  color?: string;
  /** Additional class names */
  className?: string;
}

/**
 * Left-pointing chevron path extracted from Figma (node 51578:74205 / Shape).
 * Natural content area: x=4, y=3, width=10, height=18 within a 24×24 frame.
 * Insets: top=12.5% (3px), right=41.67% (10px), bottom=12.5% (3px), left=16.67% (4px).
 *
 * The path describes a "<" chevron: two angled strokes meeting at the leftmost point (4, 12),
 * with the open side on the right at x=14 (top-right: 14,3 and bottom-right: 14,21).
 */
const BACK_PATH =
  "M13.2929 3.29289C13.6834 2.90237 14.3166 2.90237 14.7071 3.29289C15.0976 3.68342 15.0976 4.31658 14.7071 4.70711L6.41421 13L14.7071 21.2929C15.0976 21.6834 15.0976 22.3166 14.7071 22.7071C14.3166 23.0976 13.6834 23.0976 13.2929 22.7071L4.29289 13.7071C3.90237 13.3166 3.90237 12.6834 4.29289 12.2929L13.2929 3.29289Z";

export function IconBack({
  size = 24,
  color = "currentColor",
  className,
}: Props) {
  const rootClass = [styles.root, className].filter(Boolean).join(" ");

  return (
    <svg
      data-cx-component="IconBack"
      className={rootClass}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      {/* Back chevron glyph — left-pointing arrow for back/navigate-back actions */}
      <path
        d={BACK_PATH}
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
}
