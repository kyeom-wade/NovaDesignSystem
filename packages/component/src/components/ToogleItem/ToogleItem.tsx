import styles from "./ToogleItem.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.2--Token-Test- .ToogleItem (node 51486:46290)
// anatomy: root[ iconItem[ heartOff | heartOn ], label? ]

import React from "react";

interface Props {
  /** Display variant: "None" shows icon only; "Text" shows icon + count label */
  variant?: "None" | "Text";
  /** Whether the toggle is in selected (active) state */
  selection?: boolean;
  /** Count label shown when variant="Text" */
  label?: string;
  /** Click handler */
  onClick?: () => void;
  /** Accessible label for the button */
  ariaLabel?: string;
}

export function ToogleItem({
  variant = "Text",
  selection = false,
  label = "9,999",
  onClick,
  ariaLabel = "좋아요",
}: Props) {
  return (
    <button
      type="button"
      className={[
        styles.root,
        variant === "None" ? styles.variantNone : styles.variantText,
        selection ? styles.selected : styles.unselected,
      ]
        .filter(Boolean)
        .join(" ")}
      data-cx-component="ToogleItem"
      data-variant={variant}
      data-selection={selection}
      onClick={onClick}
      aria-pressed={selection}
      aria-label={ariaLabel}
    >
      <span className={styles.iconItem} aria-hidden="true">
        {selection ? (
          /* Heart — Fill On */
          <svg
            className={styles.heartOn}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 21C12 21 3 15.5 3 9.5C3 7.01 5.01 5 7.5 5C9.24 5 10.91 5.97 12 7.5C13.09 5.97 14.76 5 16.5 5C18.99 5 21 7.01 21 9.5C21 15.5 12 21 12 21Z"
              fill="currentColor"
            />
          </svg>
        ) : (
          /* Heart — Fill Off */
          <svg
            className={styles.heartOff}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.5 5C14.76 5 13.09 5.97 12 7.5C10.91 5.97 9.24 5 7.5 5C5.01 5 3 7.01 3 9.5C3 15.5 12 21 12 21C12 21 21 15.5 21 9.5C21 7.01 18.99 5 16.5 5ZM12 18.9C10.21 17.74 4.5 13.96 4.5 9.5C4.5 7.84 5.84 6.5 7.5 6.5C9.04 6.5 10.47 7.47 11.07 8.91L12 11.14L12.93 8.91C13.53 7.47 14.96 6.5 16.5 6.5C18.16 6.5 19.5 7.84 19.5 9.5C19.5 13.96 13.79 17.74 12 18.9Z"
              fill="currentColor"
            />
          </svg>
        )}
      </span>
      {variant === "Text" && (
        <span className={styles.label}>{label}</span>
      )}
    </button>
  );
}
