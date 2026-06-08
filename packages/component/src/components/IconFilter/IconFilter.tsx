import React from "react";
import styles from "./IconFilter.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.2--Token-Test- .IconItem/Nomal/Filter (node 51578:64734)
// anatomy: root(svg) [ top-slider-line + top-circle-toggle + bottom-slider-line + bottom-circle-toggle ]

interface Props {
  /** Natural icon size from Figma (24px grid) */
  size?: number;
  /** Icon color — defaults to currentColor so it inherits text color */
  color?: string;
  /** Additional class names */
  className?: string;
  /**
   * Glyph style variant.
   * - "line"  → outline style with ring circles on the slider toggles (Figma fill=Off, node 51573:60582)
   * - "fill"  → solid filled style with disc circles on the slider toggles (Figma fill=On, node 51561:33437)
   */
  variant?: "line" | "fill";
}

export function IconFilter({
  size = 24,
  color = "currentColor",
  className,
  variant = "line",
}: Props) {
  const rootClass = [styles.root, className].filter(Boolean).join(" ");

  if (variant === "fill") {
    // Solid / filled filter sliders — Figma node 51561:33437 (fill=On)
    // viewBox 0 0 18 16.8008 rendered inside a 24x24 frame with 15% top/bottom + 12.5% left/right inset
    return (
      <svg
        data-cx-component="IconFilter"
        className={rootClass}
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
      >
        {/* Inset group: 3px left/right, ~3.6px top/bottom → translate(3, 3.6) scale to fit 18×16.8 → 18×16.8 */}
        <g transform="translate(3, 3.6)">
          <path
            d="M12.4062 8.80566C14.1786 8.89559 15.6466 10.1395 16.0742 11.8008H17C17.5523 11.8008 18 12.2485 18 12.8008C18 13.3531 17.5523 13.8008 17 13.8008H16.0742C16.0578 13.8646 16.0399 13.9277 16.0205 13.9902C15.5336 15.5559 14.1106 16.7094 12.4062 16.7959C12.338 16.7994 12.2693 16.8008 12.2002 16.8008C12.1311 16.8008 12.0624 16.7994 11.9941 16.7959C10.2898 16.7094 8.86681 15.5559 8.37988 13.9902C8.36045 13.9277 8.34259 13.8646 8.32617 13.8008H1C0.447715 13.8008 0 13.3531 0 12.8008C0 12.2485 0.447715 11.8008 1 11.8008H8.32617C8.34259 11.737 8.36045 11.6738 8.37988 11.6113C8.86681 10.0457 10.2898 8.89214 11.9941 8.80566C12.0624 8.8022 12.1311 8.80078 12.2002 8.80078C12.2693 8.80078 12.338 8.8022 12.4062 8.80566ZM5.7998 0C7.66365 0 9.22979 1.27477 9.67383 3H17C17.5523 3 18 3.44772 18 4C18 4.55228 17.5523 5 17 5H9.67383C9.65741 5.06377 9.63955 5.12695 9.62012 5.18945C9.11369 6.81776 7.59475 8 5.7998 8C4.00486 8 2.48592 6.81776 1.97949 5.18945C1.96005 5.12695 1.94219 5.06377 1.92578 5H1C0.447715 5 0 4.55228 0 4C0 3.44772 0.447715 3 1 3H1.92578C1.94219 2.93623 1.96005 2.87305 1.97949 2.81055C2.48592 1.18224 4.00486 0 5.7998 0Z"
            fill={color}
          />
        </g>
      </svg>
    );
  }

  // Outline / line filter sliders — Figma node 51573:60582 (fill=Off)
  return (
    <svg
      data-cx-component="IconFilter"
      className={rootClass}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      {/* Inset group: 3px left/right, ~3.6px top/bottom → translate(3, 3.6) */}
      <g transform="translate(3, 3.6)">
        <path
          d="M12.2002 8.80273C14.064 8.80285 15.6302 10.0775 16.0742 11.8027H17C17.5523 11.8027 18 12.2504 18 12.8027C18 13.355 17.5523 13.8027 17 13.8027H16.0742C15.6302 15.5279 14.064 16.8026 12.2002 16.8027C10.3364 16.8027 8.77023 15.5279 8.32617 13.8027H1C0.447715 13.8027 0 13.355 0 12.8027C0 12.2504 0.447715 11.8027 1 11.8027H8.32617C8.77023 10.0775 10.3364 8.80273 12.2002 8.80273ZM12.2002 10.8027C11.0956 10.8027 10.2002 11.6982 10.2002 12.8027C10.2002 13.9073 11.0956 14.8027 12.2002 14.8027C13.3047 14.8026 14.2002 13.9072 14.2002 12.8027C14.2002 11.6982 13.3047 10.8029 12.2002 10.8027ZM5.7998 0.00195312C7.66363 0.00195312 9.22977 1.27675 9.67383 3.00195H17C17.5523 3.00195 18 3.44967 18 4.00195C18 4.55424 17.5523 5.00195 17 5.00195H9.67383C9.22977 6.72716 7.66363 8.00195 5.7998 8.00195C3.93605 8.00184 2.36978 6.72714 1.92578 5.00195H1C0.447715 5.00195 0 4.55424 0 4.00195C0 3.44967 0.447715 3.00195 1 3.00195H1.92578C2.36978 1.27677 3.93605 0.00206444 5.7998 0.00195312ZM5.7998 2.00195C4.69535 2.00209 3.7998 2.89747 3.7998 4.00195C3.7998 5.10644 4.69535 6.00182 5.7998 6.00195C6.90437 6.00195 7.7998 5.10652 7.7998 4.00195C7.7998 2.89738 6.90437 2.00195 5.7998 2.00195Z"
          fill={color}
        />
      </g>
    </svg>
  );
}
