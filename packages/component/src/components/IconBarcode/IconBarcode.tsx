import React from "react";
import styles from "./IconBarcode.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.2--Token-Test- .IconItem/Nomal/Barcode (node 51578:64958)
// anatomy: root(svg) [ barcode-path ] — barcode / QR-corner scanner frame glyph

/**
 * Barcode icon extracted from Figma node 51578:64958.
 *
 * The glyph depicts a barcode / scan-frame symbol — four L-shaped corners
 * forming a rectangular scan area with a small inner segment, used to
 * indicate barcode scanning functionality (바코드 표시).
 *
 * Natural Figma shape: viewBox="0 0 18 16" placed inside a 24×24 frame
 * with insets top/bottom ≈ 16.67 % (4 px each) and left/right ≈ 12.5 % (3 px each).
 * Translated by (3, 4) to sit on the 24 px grid.
 */

interface Props {
  /** Icon size in px — matches the 24 px Figma grid */
  size?: number;
  /** Icon color; defaults to currentColor for theme inheritance */
  color?: string;
  /** Additional class names */
  className?: string;
}

/**
 * Path data extracted verbatim from Figma node 51578:74095 (Shape / Union).
 * viewBox of the shape asset: "0 0 18 16".
 * Placed inside a 24×24 canvas via translate(3, 4) — matching the Figma inset
 * (left/right 12.5 % → 3 px, top/bottom 16.67 % → 4 px on a 24 px frame).
 */
const BARCODE_PATH =
  "M1 10C1.55228 10 2 10.4477 2 11V14H5C5.55228 14 6 14.4477 6 15C6 15.5523 5.55228 16 5 16H2C0.895431 16 9.65645e-08 15.1046 0 14V11C-1.03508e-09 10.4477 0.447715 10 1 10ZM17 10C17.5523 10 18 10.4477 18 11V14C18 15.1046 17.1046 16 16 16H13C12.4477 16 12 15.5523 12 15C12 14.4477 12.4477 14 13 14H16V11C16 10.4477 16.4477 10 17 10ZM11 7C11.5523 7 12 7.44772 12 8C12 8.55228 11.5523 9 11 9H7C6.44772 9 6 8.55228 6 8C6 7.44772 6.44772 7 7 7H11ZM5 0C5.55228 0 6 0.447715 6 1C6 1.55228 5.55228 2 5 2H2V5C2 5.55228 1.55228 6 1 6C0.447715 6 0 5.55228 0 5V2C0 0.89543 0.895431 0 2 0H5ZM16 0C17.1046 0 18 0.89543 18 2V5C18 5.55228 17.5523 6 17 6C16.4477 6 16 5.55228 16 5V2H13C12.4477 2 12 1.55228 12 1C12 0.447715 12.4477 0 13 0H16Z";

export function IconBarcode({
  size = 24,
  color = "currentColor",
  className,
}: Props) {
  const rootClass = [styles.root, className].filter(Boolean).join(" ");

  return (
    <svg
      data-cx-component="IconBarcode"
      className={rootClass}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      {/* Barcode scan-frame glyph — four L-shaped corners + centre segment */}
      <path
        d={BARCODE_PATH}
        transform="translate(3 4)"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
}
