import React from "react";
import styles from "./AppBarItem.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.2--Token-Test- .AppBarItem (node 51300:90701)
// anatomy: root[ btn[ IconItem[ shape ] ], btn?[ IconItem[ shape ] ], btn?[ IconItem[ shape ] ] ]
// Variants: count(1|2|3) — number of icon buttons shown in the App Bar right area
// Each btn is 28×28 (24px icon + 2px padding all around); gap between buttons is 12px
// Icon placeholder is a dummy shape; replace children or iconSlots with real icon components

interface IconButtonProps {
  /** Accessible label for this icon button */
  "aria-label"?: string;
  /** Click handler */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  /** Icon content; defaults to a placeholder SVG shape */
  children?: React.ReactNode;
}

interface Props {
  /** Number of icon buttons to show in the App Bar item group */
  count?: 1 | 2 | 3;
  /** Per-button configs — index 0 = leftmost icon */
  buttons?: IconButtonProps[];
  className?: string;
}

/** Fallback icon rendered when no child is provided */
function PlaceholderIcon() {
  return (
    <span className={styles.iconShape} aria-hidden="true" />
  );
}

function IconBtn({ "aria-label": ariaLabel = "메뉴", onClick, children }: IconButtonProps) {
  return (
    <button
      type="button"
      className={styles.btn}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      <span className={styles.iconItem}>
        {children ?? <PlaceholderIcon />}
      </span>
    </button>
  );
}

export function AppBarItem({
  count = 1,
  buttons = [],
  className,
}: Props) {
  const slots = Array.from({ length: count }, (_, i) => buttons[i] ?? {});

  return (
    <div
      className={[styles.root, className].filter(Boolean).join(" ")}
      data-cx-component="AppBarItem"
      data-count={count}
    >
      {slots.map((btnProps, i) => (
        <IconBtn key={i} {...btnProps} />
      ))}
    </div>
  );
}
