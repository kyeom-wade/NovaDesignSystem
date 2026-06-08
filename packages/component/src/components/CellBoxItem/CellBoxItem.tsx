import React from "react";
import styles from "./CellBoxItem.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.2--Token-Test- .CellBoxItem (node 51273:84394)
// anatomy: wrap[ slot[ children ] ]

interface Props {
  /** Slot content rendered inside the box */
  children?: React.ReactNode;
  /** Additional CSS class name */
  className?: string;
}

export function CellBoxItem({ children, className }: Props) {
  return (
    <div
      className={[styles.wrap, className].filter(Boolean).join(" ")}
      data-cx-component="CellBoxItem"
    >
      <div className={styles.slot}>{children}</div>
    </div>
  );
}
