import React from "react";
import styles from "./ChipItem.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.2--Token-Test- .ChipItem (node 50943:28335)
// anatomy: root[ label ]  — selected=true uses strong fill + inverse text; selected=false uses neutral-primary fill + secondary text

interface Props {
  /** Visual size variant */
  size?: "large" | "small";
  /** Whether this chip is currently selected/active */
  selected?: boolean;
  /** Label text shown inside the chip */
  text?: string;
  /** Click handler */
  onClick?: () => void;
  className?: string;
}

export function ChipItem({
  size = "large",
  selected = true,
  text = "텍스트",
  onClick,
  className,
}: Props) {
  return (
    <div
      data-cx-component="ChipItem"
      data-size={size}
      data-selected={selected}
      className={[
        styles.chip,
        styles[size],
        selected ? styles.selected : styles.unselected,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") onClick?.();
      }}
    >
      <span className={styles.label}>{text}</span>
    </div>
  );
}
