import React from "react";
import styles from "./ButtonItem.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.2--Token-Test- .ButtonItem (node 50943:30788)
// anatomy: root(button)[ label(span), icon?(span>svg), loader?(span[ dot × 3 ]) ]
// Variants=Primary|Secondary|Outline|Text|Text+Icon × Size=Small|Medium|Large|XLarge × State=Default|Loading|Disabled × Danger=Off|On

interface Props {
  /** Visual style variant of the button */
  variant?: "Primary" | "Secondary" | "Outline" | "Text" | "TextIcon";
  /** Height tier: Small=28px · Medium=36px · Large=48px · XLarge=56px */
  size?: "Small" | "Medium" | "Large" | "XLarge";
  /** Interaction state */
  state?: "Default" | "Loading" | "Disabled";
  /** Danger (destructive) mode — replaces brand color with red */
  danger?: boolean;
  /** Button label text */
  label?: string;
  /** Whether to show the trailing arrow icon (only for non-Text variants) */
  showIcon?: boolean;
  /** Click handler */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

export function ButtonItem({
  variant = "Primary",
  size = "Large",
  state = "Default",
  danger = false,
  label = "버튼",
  showIcon = false,
  onClick,
  className,
}: Props) {
  const isDisabled = state === "Disabled";
  const isLoading = state === "Loading";
  const isText = variant === "Text" || variant === "TextIcon";
  const hasIcon = showIcon && !isText && !isLoading;
  const hasTextIcon = variant === "TextIcon" && !isLoading;

  const rootClass = [
    styles.root,
    styles[`variant-${variant}`],
    styles[`size-${size}`],
    danger && !isText ? styles.danger : null,
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
      data-variant={variant}
      data-size={size}
      data-state={state}
      data-danger={danger ? "on" : "off"}
      disabled={isDisabled}
      onClick={isDisabled || isLoading ? undefined : onClick}
    >
      {isLoading ? (
        <span className={styles.loader} aria-label="로딩 중" role="status">
          <span className={styles.dot} />
          <span className={styles.dot} />
          <span className={styles.dot} />
        </span>
      ) : (
        <>
          <span className={isText ? styles.textLabel : styles.label}>{label}</span>
          {(hasIcon || hasTextIcon) && (
            <span className={styles.iconWrap} aria-hidden="true">
              {/* ArrowRight chevron */}
              <svg
                className={styles.iconSvg}
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          )}
        </>
      )}
    </button>
  );
}
