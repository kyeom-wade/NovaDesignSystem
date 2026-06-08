import React from "react";
import styles from "./IconMenu.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.2--Token-Test- .IconItem/Nomal/Menu (node 51578:64957)
// anatomy: root<svg>[ three horizontal bars — hamburger/menu glyph ]

interface Props {
  /** Natural icon size from Figma (24px grid) */
  size?: number;
  /** Icon color — defaults to currentColor so it inherits text color */
  color?: string;
  /** Additional class names */
  className?: string;
}

export function IconMenu({
  size = 24,
  color = "currentColor",
  className,
}: Props) {
  const rootClass = [styles.root, className].filter(Boolean).join(" ");

  return (
    <svg
      data-cx-component="IconMenu"
      className={rootClass}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      {/* Top bar */}
      <rect x="4" y="7" width="16" height="1.5" rx="0.75" fill={color} />
      {/* Middle bar */}
      <rect x="4" y="11.25" width="16" height="1.5" rx="0.75" fill={color} />
      {/* Bottom bar */}
      <rect x="4" y="15.5" width="16" height="1.5" rx="0.75" fill={color} />
    </svg>
  );
}
