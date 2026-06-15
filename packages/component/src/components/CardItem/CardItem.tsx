import React from "react";
import styles from "./CardItem.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.3 .CardItem (node 51291:60676)
// anatomy: root[ group[ Slot[ children ] ] ]
// Variants: variants("Filled" | "Line")

export interface CardItemProps {
  /** Slot content */
  children?: React.ReactNode;
  /** Visual variant matching the Figma property name */
  variants?: "Filled" | "Line";
  className?: string;
}

export function CardItem({
  children,
  variants = "Filled",
  className,
}: CardItemProps) {
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
      data-cx-component="CardItem"
      data-variant={variants}
    >
      <div className={[styles.group, isLine ? styles.groupLine : styles.groupFilled].join(" ")}>
        <div className={styles.slot}>{children}</div>
      </div>
    </div>
  );
}
