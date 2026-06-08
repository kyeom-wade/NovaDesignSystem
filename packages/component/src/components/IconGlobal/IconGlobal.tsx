import React from "react";
import styles from "./IconGlobal.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.2--Token-Test- .IconItem/Nomal/Global (node 51578:64849)
// anatomy: root(svg) [ globe-shape (6 Subtract paths forming a wireframe globe) ]

interface Props {
  /** Natural icon size from Figma (24px grid) */
  size?: number;
  /** Icon color — defaults to currentColor so it inherits text color */
  color?: string;
  /** Additional class names */
  className?: string;
}

export function IconGlobal({
  size = 24,
  color = "currentColor",
  className,
}: Props) {
  const rootClass = [styles.root, className].filter(Boolean).join(" ");

  return (
    <svg
      data-cx-component="IconGlobal"
      className={rootClass}
      width={size}
      height={size}
      viewBox="0 0 15.5508 15.5996"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      {/* Globe glyph — Subtract group (6 paths) */}
      <path d="M10.7627 8.39941C10.6187 11.9184 9.22807 14.3464 8.15527 15.5898C8.02939 15.5959 7.90277 15.5996 7.77539 15.5996C7.64801 15.5996 7.52139 15.5959 7.39551 15.5898C6.32279 14.346 4.93305 11.9173 4.78906 8.39941H10.7627Z" fill={color} />
      <path d="M3.58984 8.39941C3.70403 11.4258 4.67021 13.7543 5.69336 15.3164C2.58217 14.4565 0.252459 11.7195 0 8.39941H3.58984Z" fill={color} />
      <path d="M15.5508 8.39941C15.2984 11.7188 12.9695 14.4549 9.85938 15.3154C10.8824 13.7534 11.8497 11.4256 11.9639 8.39941H15.5508Z" fill={color} />
      <path d="M5.69336 0.282227C4.67004 1.8443 3.70405 4.17332 3.58984 7.2002H0.000976562C0.253471 3.88005 2.58207 1.14202 5.69336 0.282227Z" fill={color} />
      <path d="M8.15625 0.00878906C9.22897 1.2523 10.6187 3.68119 10.7627 7.2002H4.78906C4.93301 3.68226 6.32188 1.25273 7.39453 0.00878906C7.52072 0.00272215 7.6477 3.04372e-09 7.77539 0C7.90308 0 8.03006 0.00272216 8.15625 0.00878906Z" fill={color} />
      <path d="M9.85938 0.283203C12.9696 1.14364 15.2974 3.88078 15.5498 7.2002H11.9639C11.8497 4.17358 10.8826 1.84528 9.85938 0.283203Z" fill={color} />
    </svg>
  );
}
