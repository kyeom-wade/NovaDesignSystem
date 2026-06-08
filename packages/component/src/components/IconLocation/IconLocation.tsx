import React from "react";
import styles from "./IconLocation.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.2--Token-Test- .IconItem/Nomal/Location (node 51578:64788)
// anatomy: root(svg) [ pin-body(teardrop path) + center-dot(circle) ] — single-color location pin glyph

interface Props {
  /** Natural icon size from Figma (24px grid) */
  size?: number;
  /** Icon color — defaults to currentColor so it inherits text color */
  color?: string;
  /** Additional class names */
  className?: string;
}

export function IconLocation({ size = 24, color = "currentColor", className }: Props) {
  const rootClass = [styles.root, className].filter(Boolean).join(" ");

  return (
    <svg
      data-cx-component="IconLocation"
      className={rootClass}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      {/* Pin body — teardrop shape: circular head tapering to a bottom point */}
      <path
        d="M12 2C8.686 2 6 4.686 6 8c0 5.25 6 12 6 12s6-6.75 6-12c0-3.314-2.686-6-6-6z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
      {/* Center dot — inner cutout to indicate the pin focus point */}
      <circle cx="12" cy="8" r="2" fill="white" />
    </svg>
  );
}
