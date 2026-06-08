import React from "react";
import styles from "./IconCategory.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.2--Token-Test- .IconItem/Nomal/Category (node 51578:64794)
// anatomy: root(svg) [ four rounded squares arranged in a 2×2 grid ]

interface Props {
  /** Natural icon size from Figma (24px grid) */
  size?: number;
  /** Icon color — defaults to currentColor so it inherits text color */
  color?: string;
  /** Additional class names */
  className?: string;
}

export function IconCategory({
  size = 24,
  color = "currentColor",
  className,
}: Props) {
  const rootClass = [styles.root, className].filter(Boolean).join(" ");

  return (
    <svg
      data-cx-component="IconCategory"
      className={rootClass}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      {/* Four rounded squares (category grid) — glyph is 15×15 centered in 24px frame (4.5px offset each side) */}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.59961 12.9004C10.428 12.9004 11.0996 13.572 11.0996 14.4004V18.0C11.0996 18.8284 10.428 19.5 9.59961 19.5H6.0C5.17157 19.5 4.5 18.8284 4.5 18.0V14.4004C4.5 13.572 5.17157 12.9004 6.0 12.9004H9.59961ZM18.0 12.9004C18.8284 12.9004 19.5 13.572 19.5 14.4004V18.0C19.5 18.8284 18.8284 19.4999 18.0 19.5H14.3994C13.5712 19.4997 12.9004 18.8283 12.9004 18.0V14.4004C12.9004 13.572 13.572 12.9004 14.4004 12.9004H18.0ZM9.59961 4.5C10.428 4.5 11.0996 5.17157 11.0996 6.0V9.59961C11.0996 10.428 10.428 11.0996 9.59961 11.0996H6.0C5.17157 11.0996 4.5 10.428 4.5 9.59961V6.0C4.5 5.17157 5.17157 4.5 6.0 4.5H9.59961ZM18.0 4.5C18.8284 4.5 19.5 5.17161 19.5 6.0V9.59961C19.5 10.428 18.8284 11.0996 18.0 11.0996H14.3994C13.5712 11.0994 12.9004 10.4279 12.9004 9.59961V6.0C12.9004 5.17157 13.572 4.5 14.4004 4.5H18.0Z"
        fill={color}
      />
    </svg>
  );
}
