import React from "react";
import styles from "./TabScrollItem.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.2--Token-Test- .TabScrollItem (node 50943:28304)
// anatomy: root[ label, indicator? ]
// - selected=true : label(SemiBold, neutral-primary) + bottom indicator bar (2px, neutral-strong)
// - selected=false: label(Medium, neutral-secondary) only

interface Props {
  /** Tab label text */
  label?: string;
  /** Whether this tab is currently selected */
  selected?: boolean;
  /** Click handler */
  onClick?: () => void;
}

export function TabScrollItem({
  label = "탭명",
  selected = false,
  onClick,
}: Props) {
  return (
    <div
      className={`${styles.root} ${selected ? styles.selected : styles.unselected}`}
      data-cx-component="TabScrollItem"
      data-selected={selected}
      role="tab"
      aria-selected={selected}
      tabIndex={selected ? 0 : -1}
      onClick={onClick}
    >
      <span className={styles.label}>{label}</span>
      {selected && <div className={styles.indicator} />}
    </div>
  );
}
