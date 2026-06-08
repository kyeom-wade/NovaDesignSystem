import React from "react";
import styles from "./IconFamily.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.2--Token-Test- .IconItem/Nomal/Family (node 51578:64877)
// anatomy: root(svg) [ two person silhouettes side-by-side representing a family / group ]

interface Props {
  /** Natural icon size from Figma (24px grid) */
  size?: number;
  /** Icon color — defaults to currentColor so it inherits text color */
  color?: string;
  /** Additional class names */
  className?: string;
}

export function IconFamily({
  size = 24,
  color = "currentColor",
  className,
}: Props) {
  const rootClass = [styles.root, className].filter(Boolean).join(" ");

  return (
    <svg
      data-cx-component="IconFamily"
      className={rootClass}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      {/* Family / group glyph — front person (center-right) and back person (center-left) */}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.5 5.5C8.11929 5.5 7 6.61929 7 8C7 9.38071 8.11929 10.5 9.5 10.5C10.8807 10.5 12 9.38071 12 8C12 6.61929 10.8807 5.5 9.5 5.5ZM5.5 8C5.5 5.79086 7.29086 4 9.5 4C11.7091 4 13.5 5.79086 13.5 8C13.5 10.2091 11.7091 12 9.5 12C7.29086 12 5.5 10.2091 5.5 8Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 7C14.0335 7 13.25 7.7835 13.25 8.75C13.25 9.7165 14.0335 10.5 15 10.5C15.9665 10.5 16.75 9.7165 16.75 8.75C16.75 7.7835 15.9665 7 15 7ZM11.75 8.75C11.75 6.95507 13.2051 5.5 15 5.5C16.7949 5.5 18.25 6.95507 18.25 8.75C18.25 10.5449 16.7949 12 15 12C13.2051 12 11.75 10.5449 11.75 8.75Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.5 13.5C7.29086 13.5 5.5 15.2909 5.5 17.5V19C5.5 19.4142 5.16421 19.75 4.75 19.75C4.33579 19.75 4 19.4142 4 19V17.5C4 14.4624 6.46243 12 9.5 12C12.5376 12 15 14.4624 15 17.5V19C15 19.4142 14.6642 19.75 14.25 19.75C13.8358 19.75 13.5 19.4142 13.5 19V17.5C13.5 15.2909 11.7091 13.5 9.5 13.5Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.75 13.25C14.6454 13.25 13.75 14.1454 13.75 15.25V19C13.75 19.4142 13.4142 19.75 13 19.75C12.5858 19.75 12.25 19.4142 12.25 19V15.25C12.25 13.3169 13.8169 11.75 15.75 11.75C17.6831 11.75 19.25 13.3169 19.25 15.25V19C19.25 19.4142 18.9142 19.75 18.5 19.75C18.0858 19.75 17.75 19.4142 17.75 19V15.25C17.75 14.1454 16.8546 13.25 15.75 13.25Z"
        fill={color}
      />
    </svg>
  );
}
