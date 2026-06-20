import React from "react";
import { IconDummy } from "../IconDummy/IconDummy";
import styles from "./ButtonIconItem.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.3 .ButtonIconItem (node 54449:42899)
// Figma prop typo "varient" is normalized to "variant".

export type ButtonIconItemVariant = "Large" | "Medium" | "Small";

interface Props {
  /** Icon container size: Large=24px, Medium=16px, Small=12px */
  variant?: ButtonIconItemVariant;
  /** Custom icon slot. Takes precedence over children. */
  icon?: React.ReactNode;
  /** Custom icon slot. */
  children?: React.ReactNode;
  className?: string;
}

function iconSize(variant: ButtonIconItemVariant): number {
  if (variant === "Small") return 12;
  if (variant === "Medium") return 16;
  return 24;
}

export function ButtonIconItem({
  variant = "Large",
  icon,
  children,
  className,
}: Props) {
  const rootClass = [styles.root, styles[`variant-${variant}`], className]
    .filter(Boolean)
    .join(" ");
  const slot = icon ?? children ?? <IconDummy size={iconSize(variant)} />;

  return (
    <span
      className={rootClass}
      data-cx-component="ButtonIconItem"
      data-variant={variant}
      aria-hidden="true"
    >
      <span className={styles.iconSlot}>{slot}</span>
    </span>
  );
}
