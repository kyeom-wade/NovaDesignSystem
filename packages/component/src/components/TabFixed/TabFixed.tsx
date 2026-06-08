import React from "react";
import styles from "./TabFixed.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.2--Token-Test- .TabFixed (node 50943:27881)
// anatomy: root[ TabFixedItem×N ] — fixed-width tab bar; 1–4 equal-width tab items; first tab is selected by default

interface Props {
  /** Number of tab slots to render: "1Tab" | "2Tab" | "3Tab" | "4Tab" */
  variants?: "1Tab" | "2Tab" | "3Tab" | "4Tab";
  /** Index (0-based) of the currently selected tab */
  selectedIndex?: number;
  /** Labels for each tab slot (up to 4); uses "탭명" as fallback */
  labels?: string[];
  /** Called with the tab index when a tab is clicked */
  onTabChange?: (index: number) => void;
}

const TAB_COUNTS: Record<NonNullable<Props["variants"]>, number> = {
  "1Tab": 1,
  "2Tab": 2,
  "3Tab": 3,
  "4Tab": 4,
};

export function TabFixed({
  variants = "2Tab",
  selectedIndex = 0,
  labels = [],
  onTabChange,
}: Props) {
  const count = TAB_COUNTS[variants];

  return (
    <div
      className={styles.root}
      data-cx-component="TabFixed"
      data-variants={variants}
      role="tablist"
    >
      {Array.from({ length: count }, (_, i) => {
        const label = labels[i] ?? "탭명";
        const selected = i === selectedIndex;
        return (
          <div
            key={i}
            className={styles.item}
            role="tab"
            aria-selected={selected}
            tabIndex={selected ? 0 : -1}
            data-selected={selected ? "true" : "false"}
            onClick={() => onTabChange?.(i)}
          >
            <div className={styles.inner}>
              <span className={selected ? styles.labelSelected : styles.labelDefault}>
                {label}
              </span>
              <div className={styles.bar}>
                {selected && <div className={styles.indicator} />}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
