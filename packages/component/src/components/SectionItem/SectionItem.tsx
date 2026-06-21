import React from "react";
import styles from "./SectionItem.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.3 .CardItem (node 51291:60676) — 코드에서는 SectionItem 으로 노출
// anatomy: root[ group[ Slot[ children ] ] ]
// Variants: variants("Filled" | "Line")

export interface SectionItemProps {
  /** Slot content */
  children?: React.ReactNode;
  /** Visual variant matching the Figma property name */
  variants?: "Filled" | "Line";
  className?: string;
}

export function SectionItem({
  children,
  variants = "Filled",
  className,
}: SectionItemProps) {
  const isLine = variants === "Line";

  return (
    <div
      className={[
        styles.root,
        isLine ? styles.rootLine : styles.rootFilled,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      data-cx-component="SectionItem"
      data-variant={variants}
    >
      <div className={[styles.group, isLine ? styles.groupLine : styles.groupFilled].join(" ")}>
        <div className={styles.slot}>{children}</div>
      </div>
    </div>
  );
}
