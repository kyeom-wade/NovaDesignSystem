import React from "react";
import styles from "./CellTextItem.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.2--Token-Test- .CellTextItem (node 50985:75650)
// anatomy: root[ textGroup[ title ], rightItem?[ icon | textInfo | textButton | textIcon | levelBadge | toggle ] ]

export type CellTextItemRightItem =
  | "None"
  | "Icon"
  | "Toggle"
  | "TextInfo"
  | "TextButton"
  | "LevelBadge"
  | "TextIcon";

export type CellTextItemVariant = "Default" | "Bullet";

interface Props {
  /** Main label text */
  label?: string;
  /** Right-side slot content type */
  rightItem?: CellTextItemRightItem;
  /** Layout variant — Default or Bullet list style */
  variant?: CellTextItemVariant;
  /** Secondary text shown in the right slot (TextInfo / TextButton / TextIcon variants) */
  rightText?: string;
  /** Callback for TextButton right item */
  onRightButton?: () => void;
  /** Callback for Toggle right item — current toggle value */
  toggleChecked?: boolean;
  /** Callback fired when toggle changes */
  onToggleChange?: (checked: boolean) => void;
  className?: string;
}

export function CellTextItem({
  label = "리스트 텍스트",
  rightItem = "None",
  variant = "Default",
  rightText = "텍스트",
  onRightButton,
  toggleChecked = false,
  onToggleChange,
  className,
}: Props) {
  const isBullet = variant === "Bullet";
  const isToggle = rightItem === "Toggle";

  return (
    <div
      className={[
        styles.root,
        isBullet ? styles.bullet : styles.default,
        isToggle ? styles.toggleBg : "",
        className ?? "",
      ]
        .filter(Boolean)
        .join(" ")}
      data-cx-component="CellTextItem"
      data-variant={variant}
      data-right-item={rightItem}
    >
      {/* Left text group */}
      <div className={styles.textGroup}>
        {isBullet && <span className={styles.bulletDot} aria-hidden="true">•</span>}
        <p className={styles.label}>{label}</p>
      </div>

      {/* Right slot */}
      {rightItem === "Icon" && (
        <div className={styles.rightIcon}>
          <svg
            className={styles.iconChevron}
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M6 4L10 8L6 12"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      )}

      {rightItem === "TextInfo" && (
        <div className={styles.rightTextInfo}>
          <span className={styles.rightInfoText}>{rightText}</span>
        </div>
      )}

      {rightItem === "TextButton" && (
        <button
          type="button"
          className={styles.rightTextButton}
          onClick={onRightButton}
        >
          {rightText}
        </button>
      )}

      {rightItem === "TextIcon" && (
        <div className={styles.rightTextIcon}>
          <span className={styles.rightTextIconText}>{rightText}</span>
          <svg
            className={styles.iconChevronSmall}
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M6 4L10 8L6 12"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      )}

      {rightItem === "LevelBadge" && (
        <div className={styles.rightLevelBadge}>
          <span className={styles.levelBadge} data-level="1" />
          <span className={styles.levelBadge} data-level="2" />
          <span className={styles.levelBadge} data-level="3" />
        </div>
      )}

      {rightItem === "Toggle" && (
        <button
          type="button"
          role="switch"
          aria-checked={toggleChecked}
          className={[styles.toggle, toggleChecked ? styles.toggleOn : styles.toggleOff].join(" ")}
          onClick={() => onToggleChange?.(!toggleChecked)}
        >
          <span className={styles.toggleHandle} />
        </button>
      )}
    </div>
  );
}
