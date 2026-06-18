import React from "react";
import { TabFixedItem } from "../TabFixedItem";
import styles from "./TabFixed.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.3 .TabFixed (node 50943:27881)
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
  /** Additional class for layout overrides from the consumer */
  className?: string;
}

const TAB_COUNTS: Record<NonNullable<Props["variants"]>, number> = {
  "1Tab": 1,
  "2Tab": 2,
  "3Tab": 3,
  "4Tab": 4,
};

export function TabFixed({
  variants = "1Tab",
  selectedIndex = 0,
  labels = [],
  onTabChange,
  className,
}: Props) {
  const count = TAB_COUNTS[variants];

  return (
    <div
      className={[styles.root, className].filter(Boolean).join(" ")}
      data-cx-component="TabFixed"
      data-variants={variants}
      role="tablist"
    >
      {Array.from({ length: count }, (_, i) => {
        const label = labels[i] ?? "Label";
        const selected = i === selectedIndex;
        return (
          <TabFixedItem
            key={i}
            className={styles.item}
            label={label}
            selection={selected}
            onClick={() => onTabChange?.(i)}
          />
        );
      })}
    </div>
  );
}
