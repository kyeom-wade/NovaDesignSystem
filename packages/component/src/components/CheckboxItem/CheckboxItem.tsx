import styles from "./CheckboxItem.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.3 .CheckboxItem (node 50943:30840)
// anatomy: root[ checkbox[ checkIcon? ] ]
// Properties: selection(boolean), state(Default | Disabled), variant(Circle | Line)
// Note: variant=Line + state=Disabled + selection=true is not used.

export type CheckboxItemVariant = "Circle" | "Line";
export type CheckboxItemState = "Default" | "Disabled";

interface Props {
  /** Figma property: selected/on state */
  selection?: boolean;
  /** Figma property: interaction state */
  state?: CheckboxItemState;
  /** Figma property: visual variant */
  variant?: CheckboxItemVariant;
  /** Legacy alias for selection */
  checked?: boolean;
  /** Legacy alias for state=Disabled */
  disabled?: boolean;
  /** Legacy label props retained for compatibility, hidden from primary Storybook controls. */
  label?: string;
  showLabel?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
}

export function CheckboxItem({
  selection,
  state,
  variant = "Circle",
  checked,
  disabled,
  label = "항목",
  showLabel = false,
  onChange,
  className,
}: Props) {
  const resolvedSelection = selection ?? checked ?? false;
  const resolvedState = state ?? (disabled ? "Disabled" : "Default");
  const isDisabled = resolvedState === "Disabled";
  const isLine = variant === "Line";
  const visualSelection = resolvedSelection;

  function handleClick() {
    if (!isDisabled && onChange) {
      onChange(!resolvedSelection);
    }
  }

  return (
    <div
      className={[styles.root, className].filter(Boolean).join(" ")}
      data-cx-component="CheckboxItem"
      data-variant={variant}
      data-selection={visualSelection ? "on" : "off"}
      data-state={resolvedState}
      role="checkbox"
      aria-checked={visualSelection}
      aria-disabled={isDisabled}
      tabIndex={isDisabled ? -1 : 0}
      onClick={handleClick}
      onKeyDown={(e) => {
        if (e.key === " " || e.key === "Enter") {
          e.preventDefault();
          handleClick();
        }
      }}
    >
      <span
        className={[
          styles.checkbox,
          isLine ? styles.line : styles.circle,
          visualSelection ? styles.selected : styles.unselected,
          isDisabled ? styles.disabled : styles.enabled,
        ]
          .filter(Boolean)
          .join(" ")}
        aria-hidden="true"
      >
        {(visualSelection || isLine) && (
          <svg
            className={styles.checkIcon}
            width="12"
            height="9"
            viewBox="0 0 12 9"
            fill="none"
          >
            <path
              d="M1.5 4.5L4.5 7.5L10.5 1.5"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </span>
      {showLabel && <span className={styles.label}>{label}</span>}
    </div>
  );
}
