import React from "react";
import styles from "./FilterBar.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.2--Token-Test- .FilterBar (node 51157:52598)
// anatomy: root[ filter[ con[ countText, rightItems? ] ], divider? ]
//   rightItems variants:
//     None   — count label only
//     1Item  — count label + filter button (text + icon)
//     2Item  — count label + sort button (text + chevron) + divider + filter button (text + icon)

/** SVG icon: filter funnel (matches Figma asset imgShape) */
function IconFilter({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M2 3.5h12M4.5 7.5h7M7 11.5h2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** SVG icon: chevron down (matches Figma asset imgShape1) */
function IconChevronDown({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M4 6l4 4 4-4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

interface Props {
  /** Controls which right-side action buttons are shown */
  rightItem?: "None" | "1Item" | "2Item";
  /** Whether the bottom divider line is visible */
  divider?: boolean;
  /** Total count shown in the left label */
  count?: number;
  /** Unit label appended after the count (e.g. "개") */
  countUnit?: string;
  /** Category/scope label prepended before the count */
  countLabel?: string;
  /** Sort button label — shown only when rightItem="2Item" */
  sortLabel?: string;
  /** Filter button label — shown when rightItem="1Item" or "2Item" */
  filterLabel?: string;
  /** Callback when the sort button is clicked */
  onSort?: () => void;
  /** Callback when the filter button is clicked */
  onFilter?: () => void;
  className?: string;
}

export function FilterBar({
  rightItem = "None",
  divider = true,
  count = 256,
  countUnit = "개",
  countLabel = "전체",
  sortLabel = "인기순",
  filterLabel = "필터",
  onSort,
  onFilter,
  className,
}: Props) {
  return (
    <div
      data-cx-component="FilterBar"
      data-right-item={rightItem}
      className={[styles.root, className].filter(Boolean).join(" ")}
    >
      {divider && <div className={styles.divider} aria-hidden="true" />}
      <div className={styles.filter}>
        <div className={styles.con}>
          {/* Left: count text */}
          <span className={styles.countText}>
            <span>{countLabel}</span>
            <span>{count}</span>
            <span>{countUnit}</span>
          </span>

          {/* Right: action buttons */}
          {rightItem === "1Item" && (
            <button
              type="button"
              className={styles.buttonItem}
              onClick={onFilter}
              aria-label="필터"
            >
              <span className={styles.buttonText}>{filterLabel}</span>
              <IconFilter className={styles.buttonIcon} />
            </button>
          )}

          {rightItem === "2Item" && (
            <div className={styles.btnGroup}>
              <button
                type="button"
                className={styles.buttonItem}
                onClick={onSort}
                aria-label="정렬"
              >
                <span className={styles.buttonText}>{sortLabel}</span>
                <IconChevronDown className={styles.buttonIcon} />
              </button>
              <div className={styles.btnDivider} aria-hidden="true" />
              <button
                type="button"
                className={styles.buttonItem}
                onClick={onFilter}
                aria-label="필터"
              >
                <span className={styles.buttonText}>{filterLabel}</span>
                <IconFilter className={styles.buttonIcon} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
