import React from "react";
import styles from "./IconArrow.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.2--Token-Test- .IconItem/Nomal/Arrow (node 51578:64737)
// anatomy: root(svg) [ chevron-path ] — four directional chevron variants rendered via transform

/**
 * Arrow direction variants:
 * - "up"    → chevron pointing upward    (Figma node 51561:33421)
 * - "down"  → chevron pointing downward  (Figma node 51561:33450)
 * - "left"  → chevron pointing left      (Figma node 51561:33423)
 * - "right" → chevron pointing right     (Figma node 51561:33425)
 *
 * The glyph is a directional chevron / caret (꺽쇠) used for navigation,
 * accordion toggles, and carousel controls.
 */
export type IconArrowVariant = "up" | "down" | "left" | "right";

interface Props {
  /** Icon size in px — matches the 24px Figma grid */
  size?: number;
  /** Icon color; defaults to currentColor for theme inheritance */
  color?: string;
  /** Additional class names */
  className?: string;
  /**
   * Chevron direction.
   * - "up"    → ^ pointing upward  (default)
   * - "down"  → v pointing downward
   * - "left"  → < pointing left
   * - "right" → > pointing right
   */
  variant?: IconArrowVariant;
}

/**
 * Real path data extracted from Figma (node 51561:33421 / Arrow UP).
 * Natural viewBox is "0 0 16 9" — an upward-pointing chevron.
 * The path is placed inside a 24×24 canvas centred on a ~18×18 content area
 * (3 px padding on each side), matching the Figma frame geometry.
 *
 * Placement math (up variant):
 *   Figma inset top=29.17 % → 7 px, bottom=33.33 % → 8 px  → content height ≈ 9 px
 *   Figma inset left=16.67 % → 4 px, right=16.67 % → 4 px  → content width  ≈ 16 px
 *   translate(4, 7) places the 16×9 path in the correct region.
 *
 * Other variants are the same path rotated around the icon's center (12,12).
 */
const CHEVRON_PATH =
  "M15.707 7.29292C16.0975 7.68345 16.0975 8.31647 15.707 8.70699C15.3164 9.09744 14.6834 9.09749 14.2929 8.70699L7.99991 2.414L1.70692 8.70699C1.31639 9.09744 0.683356 9.09749 0.292857 8.70699C-0.097644 8.31649 -0.0975937 7.68346 0.292857 7.29292L7.29287 0.292894C7.6834 -0.0976315 8.31641 -0.0976315 8.70694 0.292895L15.707 7.29292Z";

/** SVG transform: translate(4,7) places the 16×9 chevron inside the 24px frame (3px top-padding). */
const BASE_TRANSFORM = "translate(4 7)";

/** Rotation map — all rotations are around the icon centre (12,12). */
const ROTATE: Record<IconArrowVariant, string> = {
  up: "",
  down: "rotate(180 12 12)",
  left: "rotate(-90 12 12)",
  right: "rotate(90 12 12)",
};

export function IconArrow({
  size = 24,
  color = "currentColor",
  className,
  variant = "up",
}: Props) {
  const rootClass = [styles.root, className].filter(Boolean).join(" ");
  const rotation = ROTATE[variant];
  const transform = rotation ? `${rotation} ${BASE_TRANSFORM}` : BASE_TRANSFORM;

  return (
    <svg
      data-cx-component="IconArrow"
      className={rootClass}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      {/* Chevron glyph — same path rotated per direction variant */}
      <path
        d={CHEVRON_PATH}
        transform={transform}
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
}
