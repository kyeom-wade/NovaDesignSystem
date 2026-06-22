import React from "react";
import { CellRightItem } from "../CellRightItem";
import styles from "./CellText.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.3 .CellText (node 55181:49770)
// anatomy: root[ title|description, rightItem?[ CellRightItem(Icon) ] ]
// Properties: description(string), rightItem(boolean), size(15 | 16), title(string), variants(Text | Title)

export type CellTextSize = "15" | "16";
export type CellTextVariant = "Text" | "Title";
export type CellTextItemSize = CellTextSize;
export type CellTextItemVariant = CellTextVariant;

type LegacyRightItem =
  | "None"
  | "Icon"
  | "Toggle"
  | "TextInfo"
  | "TextButton"
  | "LevelBadge"
  | "TextIcon";

interface Props {
  /** Figma property: show trailing arrow item */
  rightItem?: boolean | LegacyRightItem;
  /** Figma property: text size */
  size?: CellTextSize;
  /** Figma property: text style variant */
  variants?: CellTextVariant;
  /** Figma property: text shown for Text variant */
  description?: string;
  /** Figma property: text shown for Title variant */
  title?: string;
  /** Legacy alias retained for existing callers. */
  variant?: "Default" | "Bullet" | CellTextItemVariant;
  /** Optional content override; hidden from primary Storybook controls. */
  label?: string;
  /** Legacy props retained for existing callers. */
  rightText?: string;
  onRightButton?: () => void;
  toggleChecked?: boolean;
  onToggleChange?: (checked: boolean) => void;
  className?: string;
}

function resolveVariant(variants?: CellTextVariant, variant?: Props["variant"]) {
  if (variants) return variants;
  if (variant === "Text" || variant === "Title") return variant;
  return "Title";
}

function resolveRightItem(rightItem?: Props["rightItem"]) {
  if (typeof rightItem === "boolean") return rightItem;
  if (rightItem === "None") return false;
  if (typeof rightItem === "string") return true;
  return true;
}

export function CellText({
  rightItem = true,
  size = "16",
  variants,
  description = "내용 들어가는 부분",
  title = "타이틀",
  variant,
  label,
  className,
}: Props) {
  const resolvedVariant = resolveVariant(variants, variant);
  const resolvedRightItem = resolveRightItem(rightItem);
  const text = label ?? (resolvedVariant === "Text" ? description : title);

  return (
    <div
      className={[
        styles.root,
        styles[`size${size}`],
        resolvedVariant === "Text" ? styles.text : styles.title,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      data-cx-component="CellText"
      data-variants={resolvedVariant}
      data-size={size}
      data-right-item={resolvedRightItem}
    >
      <p className={styles.label}>{text}</p>
      {resolvedRightItem && <CellRightItem variants="Icon" className={styles.rightItem} />}
    </div>
  );
}

export const CellTextItem = CellText;
