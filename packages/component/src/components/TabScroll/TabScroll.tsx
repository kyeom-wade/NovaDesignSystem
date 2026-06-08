import React from "react";
import styles from "./TabScroll.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.2--Token-Test- .TabScroll (node 50964:27233)
// anatomy: root[ tab[ divider, btnTab[ TabScrollItem×N ] ] ]
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
}

const DEFAULT_LABELS = [
  "탭명",
  "탭명",
  "탭명",
  "탭명",
  "탭명",
  "탭명",
  "탭명",
  "탭명",
  "탭명",
  "탭명",
];

export function TabScroll({
  labels = DEFAULT_LABELS,
  selectedIndex = 0,
  onTabChange,
}: Props) {
  return (
    <div className={styles.root} data-cx-component="TabScroll">
      <div className={styles.tab} role="tablist">
        {/* Full-width bottom divider */}
        <div className={styles.divider} aria-hidden="true" />
        {/* Scrollable row of tab items */}
        <div className={styles.btnTab}>
          {labels.map((label, i) => {
            const selected = i === selectedIndex;
            return (
              <div
                key={i}
                className={`${styles.tabItem} ${selected ? styles.tabItemSelected : styles.tabItemDefault}`}
                role="tab"
                aria-selected={selected}
                tabIndex={selected ? 0 : -1}
                onClick={() => onTabChange?.(i)}
              >
                <span className={selected ? styles.labelSelected : styles.labelDefault}>
                  {label}
                </span>
                {selected && <div className={styles.indicator} />}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
