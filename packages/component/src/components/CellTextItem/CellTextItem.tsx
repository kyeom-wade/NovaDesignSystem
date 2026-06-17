import React from "react";
import { CellRightItem, type CellRightItemVariant } from "../CellRightItem/CellRightItem";
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
  const rightItemVariantMap: Partial<Record<CellTextItemRightItem, CellRightItemVariant>> = {
    Icon: "Icon",
    TextInfo: "TextInfo",
    TextButton: "TextButton",
    LevelBadge: "LevelBadge",
    TextIcon: "TextIcon",
  };
  const rightItemVariant = rightItemVariantMap[rightItem];

  return (
    <div
      className={[
        styles.root,
        isBullet ? styles.bullet : styles.default,
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

      {rightItemVariant && (
        <CellRightItem
          variants={rightItemVariant}
          text={rightText}
          onTextButtonClick={onRightButton}
        />
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
