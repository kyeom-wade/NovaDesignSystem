import React from "react";
import styles from "./TextItem.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.3 .TextItem (node 51021:36122)
// anatomy: root[ iconLeft?(12|16|20px), text, iconRight?(12|16|20px) ]
// Icon slots accept any ReactNode; when omitted the icon area is hidden entirely.
// Size drives font-size and icon size; Weight drives font-weight; textLeft/textRight toggle icon slots.

export type TextItemSize = "11Etc" | "13Body" | "14Body" | "16Body" | "18Title" | "20Title";
export type TextItemWeight = "regular" | "medium" | "semibold";

export interface TextItemProps {
  /** Text content */
  text?: string;
  /** Typography size variant */
  size?: TextItemSize;
  /** Typography weight variant */
  weight?: TextItemWeight;
  /** Show left icon slot */
  textLeft?: boolean;
  /** Show right icon slot */
  textRight?: boolean;
  /** Custom left icon node (legacy alias; replaces the size-specific slot) */
  iconLeft?: React.ReactNode;
  /** Custom right icon node (legacy alias; replaces the size-specific slot) */
  iconRight?: React.ReactNode;
  /** 12px left icon slot for 11Etc */
  iconLeft12?: React.ReactNode | null;
  /** 16px left icon slot for 13Body, 14Body, 16Body */
  iconLeft16?: React.ReactNode | null;
  /** 20px left icon slot for 18Title, 20Title */
  iconLeft20?: React.ReactNode | null;
  /** 12px right icon slot for 11Etc */
  iconRight12?: React.ReactNode | null;
  /** 16px right icon slot for 13Body, 14Body, 16Body */
  iconRight16?: React.ReactNode | null;
  /** 20px right icon slot for 18Title, 20Title */
  iconRight20?: React.ReactNode | null;
  /** Additional class name for the root element */
  className?: string;
}

/** Returns the CSS class suffix for a given size, used to pick icon sizing + gap. */
function sizeClass(size: TextItemSize): string {
  switch (size) {
    case "11Etc":
      return styles.size11;
    case "13Body":
      return styles.size13;
    case "14Body":
      return styles.size14;
    case "16Body":
      return styles.size16;
    case "18Title":
      return styles.size18;
    case "20Title":
      return styles.size20;
  }
}

/** Returns the font-weight CSS class. */
function weightClass(weight: TextItemWeight): string {
  switch (weight) {
    case "regular":
      return styles.weightRegular;
    case "medium":
      return styles.weightMedium;
    case "semibold":
      return styles.weightSemibold;
  }
}

/** Dummy icon placeholder matching the Figma dummy icon box. */
function IconPlaceholder({ iconSize }: { iconSize: 12 | 16 | 20 }) {
  return (
    <span
      className={styles.iconPlaceholder}
      style={{ width: iconSize, height: iconSize }}
      aria-hidden="true"
    />
  );
}

/** Resolves which icon pixel size to use for a given size variant. */
function resolveIconSize(size: TextItemSize): 12 | 16 | 20 {
  if (size === "11Etc") return 12;
  if (size === "18Title" || size === "20Title") return 20;
  return 16; // 13Body, 14Body, 16Body
}

function resolveIconSlot({
  icon,
  size,
  icon12,
  icon16,
  icon20,
}: {
  icon?: React.ReactNode;
  size: 12 | 16 | 20;
  icon12?: React.ReactNode | null;
  icon16?: React.ReactNode | null;
  icon20?: React.ReactNode | null;
}) {
  if (icon !== undefined) return icon;
  if (size === 12) return icon12;
  if (size === 16) return icon16;
  return icon20;
}

export function TextItem({
  text = "Text",
  size = "11Etc",
  weight = "regular",
  textLeft = false,
  textRight = false,
  iconLeft,
  iconRight,
  iconLeft12 = null,
  iconLeft16 = null,
  iconLeft20 = null,
  iconRight12 = null,
  iconRight16 = null,
  iconRight20 = null,
  className,
}: TextItemProps) {
  const iconSize = resolveIconSize(size);
  const hasGap = textLeft || textRight;
  const leftSlot = resolveIconSlot({
    icon: iconLeft,
    size: iconSize,
    icon12: iconLeft12,
    icon16: iconLeft16,
    icon20: iconLeft20,
  });
  const rightSlot = resolveIconSlot({
    icon: iconRight,
    size: iconSize,
    icon12: iconRight12,
    icon16: iconRight16,
    icon20: iconRight20,
  });

  const rootClass = [
    styles.root,
    sizeClass(size),
    weightClass(weight),
    hasGap ? styles.withGap : "",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  const renderIcon = (slot: React.ReactNode) =>
    slot != null ? (
      <span className={styles.iconWrap} style={{ width: iconSize, height: iconSize }}>
        {slot}
      </span>
    ) : (
      <IconPlaceholder iconSize={iconSize} />
    );

  return (
    <div className={rootClass} data-cx-component="TextItem">
      {textLeft && renderIcon(leftSlot)}
      <p className={styles.label}>{text}</p>
      {textRight && renderIcon(rightSlot)}
    </div>
  );
}
