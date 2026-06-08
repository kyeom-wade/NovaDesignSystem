import styles from "./IndicatorDotItem.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.2--Token-Test- .IndicatorDotItem (node 51715:81772)
// anatomy: root[ dot ]

interface Props {
  /** Whether this dot is the currently selected/active indicator */
  selected?: boolean;
  /** Whether the dot is disabled */
  disabled?: boolean;
  /** Accessible label for the dot (e.g. "페이지 1") */
  label?: string;
  /** Click handler */
  onClick?: () => void;
  className?: string;
}

export function IndicatorDotItem({
  selected = false,
  disabled = false,
  label,
  onClick,
  className,
}: Props) {
  const rootClass = [
    styles.root,
    selected ? styles.selected : styles.unselected,
    disabled ? styles.disabled : "",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <span
      className={rootClass}
      data-cx-component="IndicatorDotItem"
      data-selected={selected}
      data-disabled={disabled}
      role="button"
      aria-label={label}
      aria-pressed={selected}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : 0}
      onClick={!disabled ? onClick : undefined}
      onKeyDown={(e) => {
        if (!disabled && onClick && (e.key === " " || e.key === "Enter")) {
          e.preventDefault();
          onClick();
        }
      }}
    />
  );
}
