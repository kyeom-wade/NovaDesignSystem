import React from "react";
import styles from "./RadioTextItem.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.2--Token-Test- .RadioTextItem (node 50943:27973)
// anatomy: root[ radioWrap[ radioBubble[ innerDot? ] ], label(p) ]
// Variants: selection=Off|On × disabled=Off|On → 4 states

interface Props {
  /** Whether the radio is selected/checked */
  selection?: boolean;
  /** Whether the item is in a disabled state */
  disabled?: boolean;
  /** Label text displayed beside the radio button */
  label?: string;
  /** Click/change handler */
  onChange?: (selection: boolean) => void;
  className?: string;
}

export function RadioTextItem({
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

  const radioClass = [
    styles.radio,
    selection && !disabled ? styles.radioSelected : null,
    selection && disabled ? styles.radioSelectedDisabled : null,
    !selection && disabled ? styles.radioUnselectedDisabled : null,
    !selection && !disabled ? styles.radioUnselected : null,
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
      data-cx-component="RadioTextItem"
      data-selection={selection ? "on" : "off"}
      data-disabled={disabled ? "on" : "off"}
      role="radio"
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
      <span className={styles.radioWrap} aria-hidden="true">
        <span className={radioClass}>
          {selection && <span className={styles.innerDot} />}
        </span>
      </span>
      <p className={styles.label}>{label}</p>
    </div>
  );
}
