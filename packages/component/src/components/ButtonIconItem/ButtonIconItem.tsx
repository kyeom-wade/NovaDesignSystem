import React from "react";
import styles from "./ButtonIconItem.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.2--Token-Test- .ButtonIconItem (node 51081:61398)
// anatomy: root[ iconWrapper[ icon[ shape ] ] ]
// Variants: size x fill x state -> 12 combinations
// size: Small(18px) | Medium(24px) | Large(32px)
// fill: true -> neutral-secondary background; false -> transparent
// state: Default | Disabled (icon color dims, bg uses disabled token)

interface Props {
  /** Button size — controls outer dimensions and icon padding */
  size?: "Small" | "Medium" | "Large";
  /** Whether the button has a filled background */
  fill?: boolean;
  /** Interaction state */
  state?: "Default" | "Disabled";
  /** Accessible label for the button */
  "aria-label"?: string;
  /** Click handler */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

export function ButtonIconItem({
  size = "Large",
  fill = true,
  state = "Default",
  "aria-label": ariaLabel = "닫기",
  onClick,
  className,
}: Props) {
  const isDisabled = state === "Disabled";

  const rootClass = [
    styles.root,
    styles[`size-${size}`],
    fill ? styles.filled : styles.unfilled,
    isDisabled ? styles.disabled : styles.default,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      type="button"
      className={rootClass}
      data-cx-component="ButtonIconItem"
      data-size={size}
      data-fill={fill ? "true" : "false"}
      data-state={state}
      disabled={isDisabled}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      <span className={styles.iconWrapper} aria-hidden="true">
        <svg
          className={styles.icon}
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="2" y1="2" x2="10" y2="10" strokeLinecap="round" strokeWidth="1.5" stroke="currentColor" />
          <line x1="10" y1="2" x2="2" y2="10" strokeLinecap="round" strokeWidth="1.5" stroke="currentColor" />
        </svg>
      </span>
    </button>
  );
}
