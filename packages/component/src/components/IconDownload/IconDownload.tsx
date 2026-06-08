import React from "react";
import styles from "./IconDownload.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.2--Token-Test- .IconItem/Nomal/Download (node 51578:64951)
// anatomy: root(svg) [ arrow-shaft + arrow-head + tray-line ] — downward arrow with a horizontal bar at the bottom

interface Props {
  /** Icon size in px — matches the 24px Figma grid */
  size?: number;
  /** Icon color; defaults to currentColor for theme inheritance */
  color?: string;
  /** Additional class names */
  className?: string;
}

/**
 * Download icon — a downward-pointing arrow with a horizontal tray/bar at the bottom.
 * Used to indicate file download actions (애셋을 다운로드할 때 사용).
 *
 * Path data is derived from the 24px Figma frame (node 51578:64951) with a
 * ~16.67% inset (4px each side), yielding a 16×16 content area centred at (12, 12).
 *
 * Glyph anatomy (all coordinates in 24×24 viewBox):
 *   - Vertical shaft: a 2px-wide line from y=4 down to y=14, centred at x=12
 *   - Arrowhead: a downward chevron/triangle at the shaft bottom
 *   - Tray bar: a horizontal line spanning x=4–20 at y=18 (2px tall)
 */
export function IconDownload({
  size = 24,
  color = "currentColor",
  className,
}: Props) {
  const rootClass = [styles.root, className].filter(Boolean).join(" ");

  return (
    <svg
      data-cx-component="IconDownload"
      className={rootClass}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      {/*
        Combined download glyph path:
          1. Vertical shaft: rect-like path from (11,4) to (13,14)
          2. Downward arrowhead: chevron pointing down, apex at (12,17)
          3. Horizontal tray bar: rect at y=19, x=4–20, height=2

        Single compound path using fillRule=evenodd so everything fills correctly.
      */}
      <path
        d="M13 4C13 3.44772 12.5523 3 12 3C11.4477 3 11 3.44772 11 4V13.5858L8.70711 11.2929C8.31658 10.9024 7.68342 10.9024 7.29289 11.2929C6.90237 11.6834 6.90237 12.3166 7.29289 12.7071L11.2929 16.7071C11.6834 17.0976 12.3166 17.0976 12.7071 16.7071L16.7071 12.7071C17.0976 12.3166 17.0976 11.6834 16.7071 11.2929C16.3166 10.9024 15.6834 10.9024 15.2929 11.2929L13 13.5858V4ZM4 19C4 18.4477 4.44772 18 5 18H19C19.5523 18 20 18.4477 20 19C20 19.5523 19.5523 20 19 20H5C4.44772 20 4 19.5523 4 19Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
}
