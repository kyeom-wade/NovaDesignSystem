import React from "react";
import styles from "./Dropdown.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.2--Token-Test- .Dropdown (node 51504:27857)
// anatomy: wrap[ titleRow[ textItem[ label ], iconItem[ chevronIcon ] ], divider?, slot[ children ] ]

interface Props {
  /** Trigger label text shown in the header row */
  label?: string;
  /** Whether the dropdown is open (chevron points up, slot rendered) */
  open?: boolean;
  /** Whether a value has been selected (label shown in primary vs. tertiary color) */
  selected?: boolean;
  /** Slot content shown when open */
  children?: React.ReactNode;
  /** Click handler for the trigger row */
  onToggle?: () => void;
}

export function Dropdown({
  label = "텍스트",
  open = false,
  selected = false,
  children,
  onToggle,
}: Props) {
  return (
    <div
      className={`${styles.wrap} ${open ? styles.wrapOpen : ""}`}
      data-cx-component="Dropdown"
      data-open={open}
    >
      {/* Trigger row */}
      <button
        type="button"
        className={styles.titleRow}
        onClick={onToggle}
        aria-expanded={open}
      >
        <span className={`${styles.label} ${selected ? styles.labelSelected : styles.labelPlaceholder}`}>
          {label}
        </span>
        <span className={`${styles.iconWrap} ${open ? styles.iconUp : styles.iconDown}`} aria-hidden="true">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.chevron}
          >
            <path
              d="M4 6L8 10L12 6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>

      {/* Expanded content */}
      {open && (
        <>
          <div className={styles.divider} aria-hidden="true" />
          <div className={styles.slot}>{children}</div>
        </>
      )}
    </div>
  );
}
