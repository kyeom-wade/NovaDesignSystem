import React from "react";
import styles from "./CheckboxTextItem.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.2--Token-Test- .CheckboxTextItem (node 50943:27986)
// anatomy: root[ checkboxWrap[ checkboxIcon(img) ], label(p) ]
// Variants: selection=Off|On × disabled=Off|On → 4 states

interface Props {
  /** Whether the checkbox is checked/selected */
  selection?: boolean;
  /** Whether the item is in a disabled state */
  disabled?: boolean;
  /** Label text displayed beside the checkbox */
  label?: string;
  /** Click/change handler */
  onChange?: (selection: boolean) => void;
  className?: string;
}

// Checkbox icon SVG paths for each state
// unchecked-default: circle outline
// unchecked-disabled: faded circle outline
// checked-default: filled circle with checkmark (brand)
// checked-disabled: faded filled circle with checkmark

function CheckboxIcon({ selection, disabled }: { selection: boolean; disabled: boolean }) {
  if (selection && disabled) {
    // checked + disabled: filled brand circle with check, but faded
    return (
      <svg
        className={styles.checkboxIcon}
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle cx="9" cy="9" r="9" fill="var(--skt-color-fill-brand-primary, #3617ce)" opacity="0.2" />
        <path
          d="M5.5 9l2.5 2.5 4.5-5"
          stroke="var(--skt-color-text-inverse-primary, #ffffff)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.4"
        />
      </svg>
    );
  }

  if (selection && !disabled) {
    // checked + enabled: solid brand circle with white check
    return (
      <svg
        className={styles.checkboxIcon}
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle cx="9" cy="9" r="9" fill="var(--skt-color-fill-brand-primary, #3617ce)" />
        <path
          d="M5.5 9l2.5 2.5 4.5-5"
          stroke="var(--skt-color-text-inverse-primary, #ffffff)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (!selection && disabled) {
    // unchecked + disabled: faded circle outline
    return (
      <svg
        className={styles.checkboxIcon}
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle
          cx="9"
          cy="9"
          r="8"
          stroke="var(--skt-color-text-disabled-default, rgba(6,12,31,0.2))"
          strokeWidth="1.5"
        />
      </svg>
    );
  }

  // unchecked + enabled: circle outline with neutral border
  return (
    <svg
      className={styles.checkboxIcon}
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle
        cx="9"
        cy="9"
        r="8"
        stroke="var(--skt-color-fill-neutral-primary, rgba(6,12,31,0.2))"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export function CheckboxTextItem({
  selection = false,
  disabled = false,
  label = "텍스트",
  onChange,
  className,
}: Props) {
  const rootClass = [
    styles.root,
    disabled ? styles.disabled : null,
    selection ? styles.selected : null,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  function handleClick() {
    if (!disabled && onChange) {
      onChange(!selection);
    }
  }

  return (
    <div
      className={rootClass}
      data-cx-component="CheckboxTextItem"
      data-selection={selection ? "on" : "off"}
      data-disabled={disabled ? "on" : "off"}
      role="checkbox"
      aria-checked={selection}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : 0}
      onClick={handleClick}
      onKeyDown={(e) => {
        if (!disabled && (e.key === " " || e.key === "Enter")) {
          e.preventDefault();
          onChange?.(!selection);
        }
      }}
    >
      <span className={styles.checkboxWrap}>
        <CheckboxIcon selection={selection} disabled={disabled} />
      </span>
      <p className={styles.label}>{label}</p>
    </div>
  );
}
