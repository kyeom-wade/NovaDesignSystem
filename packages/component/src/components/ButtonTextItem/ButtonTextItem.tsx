import React from "react";
import { IconArrow } from "../IconArrow/IconArrow";
import styles from "./ButtonTextItem.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.3 .ButtonTextItem (node 55298:57668)
// Variants=Text|Text+Icon × Size=Small|Medium|Large|XLarge × State=Default|Disabled × Danger=Off|On

export type ButtonTextItemVariant = "Text" | "Text+Icon" | "TextIcon";
export type ButtonTextItemSize = "Small" | "Medium" | "Large" | "XLarge";
export type ButtonTextItemState = "Default" | "Disabled";

interface Props {
  /** Figma variant prop name */
  variants?: ButtonTextItemVariant;
  /** @deprecated Use variants="Text+Icon" instead. */
  variant?: ButtonTextItemVariant;
  size?: ButtonTextItemSize;
  state?: ButtonTextItemState;
  danger?: boolean;
  label?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

function normalizeVariant(variant: ButtonTextItemVariant): "Text" | "Text+Icon" {
  return variant === "TextIcon" ? "Text+Icon" : variant;
}

function iconSize(size: ButtonTextItemSize): number {
  return size === "XLarge" ? 16 : 12;
}

export function ButtonTextItem({
  variants,
  variant,
  size = "XLarge",
  state = "Default",
  danger = false,
  label = "Label",
  onClick,
  className,
}: Props) {
  const resolvedVariant = normalizeVariant(variants ?? variant ?? "Text");
  const isDisabled = state === "Disabled";
  const rootClass = [
    styles.root,
    styles[`variant-${resolvedVariant === "Text+Icon" ? "TextIcon" : "Text"}`],
    styles[`size-${size}`],
    danger ? styles.danger : null,
    isDisabled ? styles.disabled : null,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      type="button"
      className={rootClass}
      data-cx-component="ButtonTextItem"
      data-variant={resolvedVariant}
      data-size={size}
      data-state={state}
      data-danger={danger ? "on" : "off"}
      disabled={isDisabled}
      onClick={isDisabled ? undefined : onClick}
    >
      <span className={styles.label}>{label}</span>
      {resolvedVariant === "Text+Icon" && (
        <span className={styles.iconWrap} aria-hidden="true">
          <IconArrow
            className={styles.icon}
            size={iconSize(size)}
            variant="right"
          />
        </span>
      )}
    </button>
  );
}
