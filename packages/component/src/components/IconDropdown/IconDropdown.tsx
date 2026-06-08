import React from "react";
import styles from "./IconDropdown.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.2--Token-Test- .IconItem/Nomal/Dropdown (node 51578:64728)
// anatomy: root(svg) [ caret-triangle ] — two directional variants: down (DropdownDown) | up (DropdownUp)

interface Props {
  /** Natural icon size from Figma (24px grid) */
  size?: number;
  /** Icon color — defaults to currentColor so it inherits text color */
  color?: string;
  /** Additional class names */
  className?: string;
  /**
   * Direction variant.
   * - "DropdownDown" → small filled caret pointing downward  (Figma node 51561:33446)
   * - "DropdownUp"   → small filled caret pointing upward    (Figma node 51567:65057)
   */
  variant?: "DropdownDown" | "DropdownUp";
}

export function IconDropdown({
  size = 24,
  color = "currentColor",
  className,
  variant = "DropdownDown",
}: Props) {
  const rootClass = [styles.root, className].filter(Boolean).join(" ");

  if (variant === "DropdownUp") {
    // Caret pointing upward — Figma node 51567:65057
    return (
      <svg
        data-cx-component="IconDropdown"
        className={rootClass}
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
      >
        {/* Small solid upward caret — apex at top-center, base at bottom */}
        <path
          d="M6.42 14.88 L12 9.6 L17.58 14.88 Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  // Caret pointing downward (default) — Figma node 51561:33446
  return (
    <svg
      data-cx-component="IconDropdown"
      className={rootClass}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      {/* Small solid downward caret — apex at bottom-center, base at top */}
      <path
        d="M6.42 9.6 L17.58 9.6 L12 14.88 Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
}
