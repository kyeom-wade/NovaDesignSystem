import React from "react";
import styles from "./IconDummy.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.2--Token-Test- .IconItem/Nomal/Dummy (node 51578:64791)
// anatomy: root(svg) [ corner-bracket-path ] — four rounded corner brackets forming a frame/focus indicator

/**
 * IconDummy — placeholder / dummy icon used as a default non-functional marker.
 * The glyph is four rounded corner brackets that form a rectangular frame outline
 * (커서 또는 선택 영역 표시용 더미 아이콘). Per Figma annotation: "기본 표시를 위한 아이콘으로, 쓰지 않습니다."
 *
 * Figma asset: node 51578:64791 / 51578:65086 (Union vector)
 * Natural size: 20×20 — rendered inside a 24×24 frame with 3 px inset (8.33 % → 2 px each side).
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
 * Path data extracted from Figma node 51578:65086 (Union).
 * Original viewBox "0 0 20 20".
 * The path draws four L-shaped corner brackets (rounded, radius ~1 px via arc) that together
 * create a dashed-corner-bracket frame — the standard "dummy / placeholder" icon in this system.
 */
const DUMMY_PATH =
  "M1 14C1.55228 14 2 14.4477 2 15V18H5C5.55228 18 6 18.4477 6 19C6 19.5523 5.55228 20 5 20H2C0.895431 20 9.65645e-08 19.1046 0 18V15C-1.03508e-09 14.4477 0.447715 14 1 14ZM19 14C19.5523 14 20 14.4477 20 15V18C20 19.1046 19.1046 20 18 20H15C14.4477 20 14 19.5523 14 19C14 18.4477 14.4477 18 15 18H18V15C18 14.4477 18.4477 14 19 14ZM5 0C5.55228 0 6 0.447715 6 1C6 1.55228 5.55228 2 5 2H2V5C2 5.55228 1.55228 6 1 6C0.447715 6 0 5.55228 0 5V2C0 0.89543 0.895431 0 2 0H5ZM18 0C19.1046 0 20 0.89543 20 2V5C20 5.55228 19.5523 6 19 6C18.4477 6 18 5.55228 18 5V2H15C14.4477 2 14 1.55228 14 1C14 0.447715 14.4477 0 15 0H18Z";

export function IconDummy({ size = 24, color = "currentColor", className }: Props) {
  const rootClass = [styles.root, className].filter(Boolean).join(" ");

  return (
    <svg
      data-cx-component="IconDummy"
      className={rootClass}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      {/* Corner bracket glyph — 20×20 path translated by 2px to center in 24px frame */}
      <path
        d={DUMMY_PATH}
        transform="translate(2 2)"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
}
