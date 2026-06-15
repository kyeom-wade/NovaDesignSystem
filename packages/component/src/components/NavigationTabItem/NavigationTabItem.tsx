import React from "react";
import styles from "./NavigationTabItem.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.2--Token-Test- .NavigationTabItem (node 51087:45622)
// anatomy: root[ iconWrapper[ iconShape ], label? ]
// variants: Benefit | Shopping | My  ×  Selected | Unselected | Indeterminate

/** Icon SVG paths — inlined so the component has no runtime asset dependency. */
const ICONS = {
  Benefit: {
    selected: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="12" cy="12" r="9" fill="var(--skt-color-icon-brand-primary, #3617ce)" />
        <path d="M8 12l2.5 2.5L16 9" stroke="var(--skt-color-icon-inverse-primary, #ffffff)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    unselected: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="12" cy="12" r="9" fill="var(--skt-color-icon-neutral-tertiary, rgba(6,12,31,0.4))" />
        <path d="M8 12l2.5 2.5L16 9" stroke="var(--skt-color-icon-inverse-primary, #ffffff)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  Shopping: {
    selected: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M6 7h12l-1.5 8H7.5L6 7Z" fill="var(--skt-color-icon-brand-primary, #3617ce)" />
        <path d="M9 7V6a3 3 0 1 1 6 0v1" stroke="var(--skt-color-icon-brand-primary, #3617ce)" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="9.5" cy="17.5" r="1" fill="var(--skt-color-icon-brand-primary, #3617ce)" />
        <circle cx="15.5" cy="17.5" r="1" fill="var(--skt-color-icon-brand-primary, #3617ce)" />
      </svg>
    ),
    unselected: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M6 7h12l-1.5 8H7.5L6 7Z" fill="var(--skt-color-icon-neutral-tertiary, rgba(6,12,31,0.4))" />
        <path d="M9 7V6a3 3 0 1 1 6 0v1" stroke="var(--skt-color-icon-neutral-tertiary, rgba(6,12,31,0.4))" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="9.5" cy="17.5" r="1" fill="var(--skt-color-icon-neutral-tertiary, rgba(6,12,31,0.4))" />
        <circle cx="15.5" cy="17.5" r="1" fill="var(--skt-color-icon-neutral-tertiary, rgba(6,12,31,0.4))" />
      </svg>
    ),
  },
  My: {
    selected: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="12" cy="8" r="3.5" fill="var(--skt-color-icon-brand-primary, #3617ce)" />
        <path d="M5 19c0-3.866 3.134-7 7-7s7 3.134 7 7" stroke="var(--skt-color-icon-brand-primary, #3617ce)" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    unselected: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="12" cy="8" r="3.5" fill="var(--skt-color-icon-neutral-tertiary, rgba(6,12,31,0.4))" />
        <path d="M5 19c0-3.866 3.134-7 7-7s7 3.134 7 7" stroke="var(--skt-color-icon-neutral-tertiary, rgba(6,12,31,0.4))" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
} as const;

const LABELS: Record<Variant, string> = {
  Benefit: "혜택",
  Shopping: "쇼핑",
  My: "마이",
};

type Variant = "Benefit" | "Shopping" | "My";
type Selection = "Selected" | "Unselected" | "Indeterminate";

export interface NavigationTabItemProps {
  /** Which navigation tab this item represents */
  variant?: Variant;
  /** Visual selection state of the tab */
  selection?: Selection;
  /** Override the label text; defaults to the Korean product label for each variant */
  label?: string;
  /** Click handler */
  onClick?: () => void;
  className?: string;
}

export function NavigationTabItem({
  variant = "Benefit",
  selection = "Selected",
  label,
  onClick,
  className,
}: NavigationTabItemProps) {
  const isSelected = selection === "Selected";
  const isUnselected = selection === "Unselected";
  const isIndeterminate = selection === "Indeterminate";
  const showLabel = !isIndeterminate;
  const iconSet = ICONS[variant];
  const icon = isUnselected ? iconSet.unselected : iconSet.selected;
  const displayLabel = label ?? LABELS[variant];

  return (
    <div
      className={[
        styles.root,
        isSelected ? styles.selected : "",
        isUnselected ? styles.unselected : "",
        isIndeterminate ? styles.indeterminate : "",
        className ?? "",
      ]
        .filter(Boolean)
        .join(" ")}
      data-cx-component="NavigationTabItem"
      data-selection={selection}
      data-variant={variant}
      role="tab"
      aria-selected={isSelected}
      tabIndex={0}
      onClick={onClick}
    >
      <span className={styles.iconWrapper} aria-hidden="true">
        {icon}
      </span>
      {showLabel && (
        <span
          className={[styles.label, isSelected ? styles.labelSelected : styles.labelUnselected]
            .join(" ")}
        >
          {displayLabel}
        </span>
      )}
    </div>
  );
}
