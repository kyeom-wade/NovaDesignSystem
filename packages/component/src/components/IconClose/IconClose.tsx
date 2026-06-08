import React from "react";
import styles from "./IconClose.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.2--Token-Test- .IconItem/Nomal/Close (node 51578:64959)
// anatomy: root(svg) [ close-path ] — single X glyph for dismissal / closing actions

/**
 * Close (X) icon — used to dismiss, close, or remove an element.
 *
 * The glyph is a diagonal × formed by two crossing lines (닫기 / Close).
 * Path extracted from Figma node 51578:74087 (Shape → Union).
 * Natural glyph size is ~16×16 px, inset by 16.66 % on all sides inside a 24×24 frame.
 * Placement: translate(4 4) maps the 16×16 glyph into the 24px canvas.
 */

/** Close × path (viewBox origin 0 0 16 16, extracted from Figma SVG asset). */
const CLOSE_PATH =
  "M14.287 0.292893C14.6776 -0.0976308 15.3106 -0.0976312 15.7011 0.292893C16.0915 0.683423 16.0916 1.31646 15.7011 1.70696L9.40715 8.0009L15.703 14.2968C16.0936 14.6873 16.0936 15.3203 15.703 15.7109C15.3125 16.1014 14.6795 16.1014 14.289 15.7109L7.99309 9.41496L1.70696 15.7011C1.31646 16.0916 0.683423 16.0915 0.292893 15.7011C-0.0976312 15.3106 -0.0976308 14.6776 0.292893 14.287L6.57903 8.0009L0.294846 1.71672C-0.0956781 1.3262 -0.0956781 0.693183 0.294846 0.302659C0.68537 -0.0878654 1.31838 -0.0878656 1.70891 0.302659L7.99309 6.58684L14.287 0.292893Z";

interface Props {
  /** Icon size in px — matches the 24 px Figma grid */
  size?: number;
  /** Icon fill color; defaults to currentColor for theme inheritance */
  color?: string;
  /** Additional class names */
  className?: string;
}

export function IconClose({ size = 24, color = "currentColor", className }: Props) {
  const rootClass = [styles.root, className].filter(Boolean).join(" ");

  return (
    <svg
      data-cx-component="IconClose"
      className={rootClass}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      {/* Close × glyph — placed with 4 px padding to match the Figma 16.66% inset */}
      <path
        d={CLOSE_PATH}
        transform="translate(4 4)"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
}
