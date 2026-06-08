import React from "react";
import styles from "./IconService.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.2--Token-Test- .IconItem/Nomal/Service (node 51578:64906)
// anatomy: root(svg) [ circle-plus-union ] — filled circle with a plus/add symbol; used for 부가서비스 (additional services)

interface Props {
  /** Natural icon size from Figma (24px grid) */
  size?: number;
  /** Icon color — defaults to currentColor so it inherits text color */
  color?: string;
  /** Additional class names */
  className?: string;
}

export function IconService({
  size = 24,
  color = "currentColor",
  className,
}: Props) {
  const rootClass = [styles.root, className].filter(Boolean).join(" ");

  return (
    <svg
      data-cx-component="IconService"
      className={rootClass}
      width={size}
      height={size}
      viewBox="0 0 16.7998 16.7998"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      {/* Circle with centered plus — 부가서비스(additional service) glyph, Figma node 51578:64906 */}
      <path
        d="M8.40039 0C13.0394 0.000211309 16.7998 3.76133 16.7998 8.40039C16.7996 13.0393 13.0393 16.7996 8.40039 16.7998C3.76133 16.7998 0.000211312 13.0394 0 8.40039C0 3.7612 3.7612 0 8.40039 0ZM8.40137 4.16797C7.98715 4.16797 7.65137 4.50376 7.65137 4.91797V7.65332H4.92383C4.50971 7.65332 4.17398 7.98924 4.17383 8.40332C4.17409 8.81731 4.50978 9.15332 4.92383 9.15332H7.65137V11.8818C7.65197 12.2955 7.98753 12.6318 8.40137 12.6318C8.81485 12.6314 9.15076 12.2953 9.15137 11.8818V9.15332H11.8877C12.3012 9.15272 12.6374 8.81694 12.6377 8.40332C12.6375 7.98961 12.3013 7.65392 11.8877 7.65332H9.15137V4.91797C9.15137 4.50401 8.81522 4.16839 8.40137 4.16797Z"
        fill={color}
        fillRule="nonzero"
      />
    </svg>
  );
}
