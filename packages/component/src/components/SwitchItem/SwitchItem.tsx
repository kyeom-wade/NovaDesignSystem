import React from "react";
import styles from "./SwitchItem.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.3 .SwitchItem (node 53886:56816)
// anatomy: root[ track[ thumb ] ]

interface Props {
  /** Whether the switch is currently selected/on */
  selection?: boolean;
  /** Legacy alias for selection */
  selected?: boolean;
  /** Interaction state */
  state?: "Default" | "Disabled";
  /** Click handler */
  onClick?: () => void;
  /** Additional class for layout overrides from the consumer */
  className?: string;
  /** Accessible label */
  ariaLabel?: string;
}

export function SwitchItem({
  selection,
  selected,
  state = "Default",
  onClick,
  className,
  ariaLabel = "Switch",
}: Props) {
  const isSelected = selection ?? selected ?? false;
  const isDisabled = state === "Disabled";

  return (
    <button
      type="button"
      className={[
        styles.root,
        isSelected ? styles.selected : styles.unselected,
        isDisabled ? styles.disabled : null,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      data-cx-component="SwitchItem"
      data-selection={isSelected ? "on" : "off"}
      data-state={state}
      role="switch"
      aria-checked={isSelected}
      aria-label={ariaLabel}
      disabled={isDisabled}
      onClick={isDisabled ? undefined : onClick}
    >
      <span className={styles.thumb} aria-hidden="true" />
    </button>
  );
}
