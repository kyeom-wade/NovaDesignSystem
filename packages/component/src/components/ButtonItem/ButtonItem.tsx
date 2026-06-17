import React from "react";
import { ButtonTextItem } from "../ButtonTextItem/ButtonTextItem";
import { IconArrow } from "../IconArrow/IconArrow";
import { Loader } from "../Loader/Loader";
import styles from "./ButtonItem.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.3 .ButtonItem (node 50943:30788)
// anatomy: root(button)[ label, IconArrow? | Loader ]
// Variants=Primary|Secondary|Ouline × Size=Small|Medium|Large|XLarge × State=Default|Loading|Disabled × Danger=Off|On

type ButtonVariant = "Primary" | "Secondary" | "Ouline" | "Outline" | "Text" | "TextIcon" | "Text+Icon";
type NormalizedButtonVariant = "Primary" | "Secondary" | "Outline" | "Text" | "TextIcon";

interface Props {
  /** Visual style variant of the button */
  variant?: ButtonVariant;
  /** Figma variant prop name */
  variants?: ButtonVariant;
  /** Height tier: Small=28px · Medium=36px · Large=48px · XLarge=56px */
  size?: "Small" | "Medium" | "Large" | "XLarge";
  /** Interaction state */
  state?: "Default" | "Loading" | "Disabled";
  /** Danger (destructive) mode — replaces brand color with red */
  danger?: boolean;
  /** Button label text */
  label?: string;
  /** Whether to show the trailing arrow icon */
  icon?: boolean;
  /** Legacy alias for icon */
  showIcon?: boolean;
  /** Click handler */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

function normalizeVariant(variant: ButtonVariant): NormalizedButtonVariant {
  if (variant === "Ouline") return "Outline";
  if (variant === "Text+Icon") return "TextIcon";
  return variant;
}

function iconSize(size: Props["size"], normalizedVariant: NormalizedButtonVariant): number {
  if (normalizedVariant === "TextIcon") return 12;
  if (size === "XLarge") return 20;
  if (size === "Large") return 16;
  if (size === "Medium") return 16;
  return 12;
}

export function ButtonItem({
  variant,
  variants,
  size = "XLarge",
  state = "Default",
  danger = false,
  label = "Label",
  icon,
  showIcon,
  onClick,
  className,
}: Props) {
  const resolvedVariant = variants ?? variant ?? "Primary";
  const normalizedVariant = normalizeVariant(resolvedVariant);
  if (normalizedVariant === "Text" || normalizedVariant === "TextIcon") {
    return (
      <ButtonTextItem
        className={className}
        variants={normalizedVariant === "TextIcon" ? "Text+Icon" : "Text"}
        size={size}
        state={state === "Disabled" ? "Disabled" : "Default"}
        danger={danger}
        label={label}
        onClick={onClick}
      />
    );
  }

  const figmaVariant = normalizedVariant === "Outline" ? "Ouline" : normalizedVariant;
  const isDisabled = state === "Disabled";
  const isLoading = state === "Loading";
  const shouldShowIcon = icon ?? showIcon ?? true;
  const hasIcon = shouldShowIcon && normalizedVariant !== "Text" && !isLoading;
  const loaderColor = normalizedVariant === "Primary" ? "inverse" : danger ? "brand" : "neutral";

  const rootClass = [
    styles.root,
    styles[`variant-${normalizedVariant}`],
    styles[`size-${size}`],
    danger ? styles.danger : null,
    isDisabled ? styles.disabled : null,
    isLoading ? styles.loading : null,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      type="button"
      className={rootClass}
      data-cx-component="ButtonItem"
      data-variant={figmaVariant}
      data-size={size}
      data-state={state}
      data-danger={danger ? "on" : "off"}
      disabled={isDisabled}
      onClick={isDisabled || isLoading ? undefined : onClick}
    >
      {isLoading ? (
        <Loader className={styles.loader} color={loaderColor} size="small" />
      ) : (
        <>
          <span className={styles.label}>{label}</span>
          {hasIcon && (
            <span className={styles.iconWrap} aria-hidden="true">
              <IconArrow
                className={styles.iconSvg}
                size={iconSize(size, normalizedVariant)}
                variant="right"
              />
            </span>
          )}
        </>
      )}
    </button>
  );
}
