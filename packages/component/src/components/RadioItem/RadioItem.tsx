import styles from "./RadioItem.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.2--Token-Test- .RadioItem (node 50943:30855)
// anatomy: root[ radio[ innerDot? ] ]

interface Props {
  /** Whether the radio button is selected */
  selected?: boolean;
  /** Whether the radio button is disabled */
  disabled?: boolean;
  /** Optional label text rendered to the right of the radio */
  label?: string;
  /** Whether to show the label */
  showLabel?: boolean;
  /** Change handler — called when the radio is clicked */
  onChange?: (selected: boolean) => void;
  className?: string;
}

export function RadioItem({
  selected = false,
  disabled = false,
  label = "항목",
  showLabel = false,
  onChange,
  className,
}: Props) {
  function handleClick() {
    if (!disabled && onChange) {
      onChange(!selected);
    }
  }

  const rootClass = [
    styles.root,
    disabled ? styles.rootDisabled : "",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  const radioClass = [
    styles.radio,
    selected ? styles.radioSelected : styles.radioUnselected,
    disabled && selected ? styles.radioSelectedDisabled : "",
    disabled && !selected ? styles.radioUnselectedDisabled : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={rootClass}
      data-cx-component="RadioItem"
      data-selected={selected}
      data-disabled={disabled}
      role="radio"
      aria-checked={selected}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : 0}
      onClick={handleClick}
      onKeyDown={(e) => {
        if (e.key === " " || e.key === "Enter") {
          e.preventDefault();
          handleClick();
        }
      }}
    >
      <span className={radioClass} aria-hidden="true">
        {selected && <span className={styles.innerDot} />}
      </span>
      {showLabel && (
        <span
          className={[styles.label, disabled ? styles.labelDisabled : ""]
            .filter(Boolean)
            .join(" ")}
        >
          {label}
        </span>
      )}
    </div>
  );
}
