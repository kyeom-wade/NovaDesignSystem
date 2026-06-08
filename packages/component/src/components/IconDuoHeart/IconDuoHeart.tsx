import styles from "./IconDuoHeart.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.2--Token-Test- .IconItem/Nomal/DuoHeart (node 51625:63423)
// anatomy: root<svg>[ g.back(heart-path, tertiary opacity) | g.front(heart-path, primary) ] — two overlapping hearts; back heart uses icon/neutral/tertiary fill, front uses color prop

/**
 * Standard heart path on a 24×24 viewBox.
 * Matches the path used in IconHeart (Figma node 51578:64730) —
 * both icons share the same glyph geometry.
 */
const HEART_PATH =
  "M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z";

/**
 * Offset applied to the back (secondary) heart so it peeks
 * out from behind the front heart — matching the Figma duo composition.
 * The two Shape layers share the same inset bounding box (18.03% / 12.5%)
 * on the 24 px canvas; the back heart is rendered at ~40% opacity
 * (icon/neutral/tertiary token: rgba(6,12,31,0.4)) to create depth.
 */
const BACK_HEART_OPACITY = 0.4;

export type DuoHeartVariant = "line" | "fill";

interface Props {
  /** Natural icon size from Figma (24 px grid) */
  size?: number;
  /**
   * Foreground heart color — defaults to currentColor so the icon
   * inherits the surrounding text color.
   */
  color?: string;
  /** Additional class names */
  className?: string;
  /**
   * Glyph style variant.
   * - "line" → two outline-stroke hearts (Figma fill=Off, node 51625:63426)
   * - "fill" → two solid-filled hearts   (Figma fill=On,  node 51625:63431)
   */
  variant?: DuoHeartVariant;
}

export function IconDuoHeart({
  size = 24,
  color = "currentColor",
  className,
  variant = "line",
}: Props) {
  const rootClass = [styles.root, className].filter(Boolean).join(" ");

  if (variant === "fill") {
    // Solid / filled duo-heart — Figma node 51625:63431 (fill=On)
    // Two filled hearts: back at 40% opacity, front at full color
    return (
      <svg
        data-cx-component="IconDuoHeart"
        className={rootClass}
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
      >
        {/* Back heart — icon/neutral/tertiary (rgba(6,12,31,0.4)) */}
        <path
          d={HEART_PATH}
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
          opacity={BACK_HEART_OPACITY}
          transform="translate(-1.5, 1)"
        />
        {/* Front heart — icon/neutral/primary, full opacity */}
        <path
          d={HEART_PATH}
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  // Outline / line duo-heart — Figma node 51625:63426 (fill=Off)
  // Two outlined hearts: back at 40% opacity, front at full color
  return (
    <svg
      data-cx-component="IconDuoHeart"
      className={rootClass}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      {/* Back heart — icon/neutral/tertiary (rgba(6,12,31,0.4)) */}
      <path
        d={HEART_PATH}
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity={BACK_HEART_OPACITY}
        transform="translate(-1.5, 1)"
      />
      {/* Front heart — icon/neutral/primary, full opacity */}
      <path
        d={HEART_PATH}
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
