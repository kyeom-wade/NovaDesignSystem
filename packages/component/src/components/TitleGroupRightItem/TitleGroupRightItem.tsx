import React from "react";
import { IconArrow } from "../IconArrow";
import styles from "./TitleGroupRightItem.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.2--Token-Test- .TitleGroupRightItem (node 50943:30580)
// anatomy:
//   Icon       — root[ iconItem(16×16) ]
//   TextButton — root[ buttonItem(secondary/small) ]
//   Text       — root[ textItem(span) ]
//   TextIconSecondary — root[ text(span), iconItem(ArrowRight/16) ]
//   TextIconPrimary   — root[ text(span), iconItem(ArrowDown/16) ]
//   TextItemButton    — root[ label(span), count(span/brand), iconItem(ArrowUp/16) ]
//   Button     — root[ buttonItem(secondary/small, no-icon) ]

interface Props {
  /**
   * Which layout / content variant to render.
   * Matches the Figma Variants property exactly.
   */
  variant?:
    | "Icon"
    | "TextButton"
    | "Text"
    | "TextIconSecondary"
    | "TextIconPrimary"
    | "TextItemButton"
    | "Button";
  /** Primary text shown in Text / TextIcon* / TextItemButton variants */
  text?: string;
  /** Count badge shown only in the TextItemButton variant */
  count?: string;
  /** Label for the inline pill-button (TextButton / Button variants) */
  buttonLabel?: string;
  /** Click handler passed to the interactive button element */
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLDivElement>;
  className?: string;
}

// --- inline SVG icons (no image-URL dependency) ---

function IconDummy() {
  return (
    <svg
      className={styles.iconSvg}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="12" height="12" rx="2" fill="currentColor" />
    </svg>
  );
}

export function TitleGroupRightItem({
  variant = "Icon",
  text = "텍스트",
  count = "3개",
  buttonLabel = "버튼",
  onClick,
  className,
}: Props) {
  const rootClass = [styles.root, styles[`variant-${variant}`], className]
    .filter(Boolean)
    .join(" ");

  // --- Icon ---
  if (variant === "Icon") {
    return (
      <div
        className={rootClass}
        data-cx-component="TitleGroupRightItem"
        data-variant="Icon"
        onClick={onClick}
        role={onClick ? "button" : undefined}
        tabIndex={onClick ? 0 : undefined}
      >
        <span className={`${styles.iconItem} ${styles.iconDisabled}`}>
          <IconDummy />
        </span>
      </div>
    );
  }

  // --- TextButton: text link (underlined) + nothing else (figma shows Text link) ---
  if (variant === "TextButton") {
    return (
      <div className={rootClass} data-cx-component="TitleGroupRightItem" data-variant="TextButton">
        <button type="button" className={styles.textLink} onClick={onClick}>
          {text}
        </button>
      </div>
    );
  }

  // --- Text: secondary text aligned right ---
  if (variant === "Text") {
    return (
      <div className={rootClass} data-cx-component="TitleGroupRightItem" data-variant="Text">
        <span className={styles.textSecondary}>{text}</span>
      </div>
    );
  }

  // --- TextIconSecondary: secondary text + ArrowRight icon ---
  if (variant === "TextIconSecondary") {
    return (
      <div className={rootClass} data-cx-component="TitleGroupRightItem" data-variant="TextIconSecondary">
        <span className={styles.textSecondary}>{text}</span>
        <span className={`${styles.iconItem} ${styles.iconSecondary}`}>
          <IconArrow variant="right" size={16} />
        </span>
      </div>
    );
  }

  // --- TextIconPrimary: primary text + ArrowDown icon ---
  if (variant === "TextIconPrimary") {
    return (
      <div className={rootClass} data-cx-component="TitleGroupRightItem" data-variant="TextIconPrimary">
        <span className={styles.textPrimary}>{text}</span>
        <span className={`${styles.iconItem} ${styles.iconPrimary}`}>
          <IconArrow variant="down" size={16} />
        </span>
      </div>
    );
  }

  // --- TextItemButton: selected-label(primary) + count(brand) + ArrowUp icon ---
  if (variant === "TextItemButton") {
    return (
      <div className={rootClass} data-cx-component="TitleGroupRightItem" data-variant="TextItemButton">
        <span className={styles.textPrimary}>{text}</span>
        <span className={styles.textBrand}>{count}</span>
        <span className={`${styles.iconItem} ${styles.iconPrimary}`}>
          <IconArrow variant="up" size={16} />
        </span>
      </div>
    );
  }

  // --- Button: secondary pill button (no icon) ---
  // variant === "Button"
  return (
    <div className={rootClass} data-cx-component="TitleGroupRightItem" data-variant="Button">
      <button type="button" className={styles.pillButton} onClick={onClick}>
        {buttonLabel}
      </button>
    </div>
  );
}
