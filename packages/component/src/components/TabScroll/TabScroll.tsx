import React from "react";
import { Divider } from "../Divider";
import { TabScrollItem } from "../TabScrollItem";
import styles from "./TabScroll.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.3 .TabScroll (node 50964:27233)
// anatomy: root[ tab[ btnTab[ TabScrollItem×N ], Divider ] ]
// - Horizontally scrollable tab bar (393×47 canvas)
// - First tab is selected by default; bottom divider line spans full width
// - Tab items: gap 28px, left padding 20px, top padding 12px

interface Props {
  /** Labels for each scrollable tab; any number supported */
  labels?: string[];
  /** Zero-based index of the currently selected tab */
  selectedIndex?: number;
  /** Called with the new tab index when a tab is clicked */
  onTabChange?: (index: number) => void;
  /** Additional class for layout overrides from the consumer */
  className?: string;
}

const DEFAULT_LABELS = [
  "Label",
  "Label",
  "Label",
  "Label",
  "Label",
  "Label",
  "Label",
  "Label",
  "Label",
  "Label",
];

export function TabScroll({
  labels = DEFAULT_LABELS,
  selectedIndex = 0,
  onTabChange,
  className,
}: Props) {
  return (
    <div
      className={[styles.root, className].filter(Boolean).join(" ")}
      data-cx-component="TabScroll"
    >
      <div className={styles.tab} role="tablist">
        <div className={styles.btnTab}>
          {labels.map((label, i) => (
            <TabScrollItem
              key={`${label}-${i}`}
              label={label}
              selection={i === selectedIndex}
              onClick={() => onTabChange?.(i)}
            />
          ))}
        </div>
        <Divider className={styles.divider} variant="contents" />
      </div>
    </div>
  );
}
