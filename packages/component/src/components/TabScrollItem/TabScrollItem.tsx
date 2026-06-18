import React from "react";
import styles from "./TabScrollItem.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.3 .TabScrollItem (node 55521:150856)
// anatomy: root[ label, bar ]
// - selection=true : label(SemiBold, neutral-primary) + bottom bar (2px, neutral-strong)
// - selection=false: label(Medium, neutral-secondary) + empty 2px bar

interface Props {
  /** Tab label text */
  label?: string;
  /** Whether this tab is currently selected */
  selection?: boolean;
  /** @deprecated Use selection instead. */
  selected?: boolean;
  className?: string;
  /** Click handler */
  onClick?: () => void;
}

export function TabScrollItem({
  label = "Label",
  selection,
  selected,
  className,
  onClick,
}: Props) {
  const isSelected = selection ?? selected ?? true;
  const rootClass = [
    styles.root,
    isSelected ? styles.selected : styles.unselected,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={rootClass}
      data-cx-component="TabScrollItem"
      data-selection={isSelected}
      role="tab"
      aria-selected={isSelected}
      tabIndex={isSelected ? 0 : -1}
      onClick={onClick}
    >
      <span className={styles.label}>{label}</span>
      <div className={styles.barWrap} aria-hidden="true">
        <div className={styles.bar} />
      </div>
    </div>
  );
}
