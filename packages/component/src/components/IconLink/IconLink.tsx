import React from "react";
import styles from "./IconLink.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.2--Token-Test- .IconItem/Nomal/Link (node 51578:64876)
// anatomy: root(svg) [ link-glyph(g) [ left-ring-path, right-ring-path ] ] — chain-link / hyperlink symbol

interface Props {
  /** Icon size in px — matches the 24px Figma grid */
  size?: number;
  /** Icon color; defaults to currentColor for theme inheritance */
  color?: string;
  /** Additional class names */
  className?: string;
}

/**
 * Chain-link / hyperlink glyph extracted from Figma (node 51578:64876).
 * Natural SVG size: 19.2 × 10.8 px, placed in a 24×24 frame.
 * Figma insets: left=10%, right=10%, top=27.5%, bottom=27.5%
 *   → translate(2.4, 6.6) positions the 19.2×10.8 glyph inside the 24px canvas.
 */
export function IconLink({ size = 24, color = "currentColor", className }: Props) {
  const rootClass = [styles.root, className].filter(Boolean).join(" ");

  return (
    <svg
      data-cx-component="IconLink"
      className={rootClass}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      {/* Chain-link glyph — two interlinked rings */}
      <g transform="translate(2.4 6.6)">
        <path
          d="M4.85903 0C5.57908 6.7805e-07 6.16233 0.577728 6.16233 1.29096C6.16233 2.00418 5.57908 2.58191 4.85903 2.58191C3.61531 2.58191 2.60661 3.58106 2.60661 4.81299V5.4C2.60661 6.95613 3.88063 8.21809 5.45165 8.21809H7.82214C9.39316 8.21809 10.6672 6.95613 10.6672 5.4C10.6672 4.68677 11.2504 4.10904 11.9705 4.10904C12.6905 4.10904 13.2738 4.68677 13.2738 5.4C13.2738 8.38259 10.8333 10.8 7.82214 10.8H5.45165C2.44053 10.8 4.34079e-07 8.38259 0 5.4V4.81299C6.59319e-07 2.1546 2.17521 1.13877e-07 4.85903 0Z"
          fill={color}
        />
        <path
          d="M13.7483 0C16.7595 0 19.2 2.41741 19.2 5.4V5.98701C19.2 8.6454 17.0248 10.8 14.341 10.8C13.6209 10.8 13.0377 10.2223 13.0377 9.50904C13.0377 8.79582 13.6209 8.21809 14.341 8.21809C15.5847 8.21809 16.5934 7.21895 16.5934 5.98701V5.4C16.5934 3.84387 15.3194 2.58191 13.7483 2.58191H11.3779C9.80685 2.58191 8.53282 3.84387 8.53282 5.4C8.53282 6.11323 7.94957 6.69096 7.22952 6.69096C6.50947 6.69096 5.92621 6.11323 5.92621 5.4C5.92621 2.41741 8.36674 0 11.3779 0H13.7483Z"
          fill={color}
        />
      </g>
    </svg>
  );
}
