import React from "react";
import styles from "./ChipItemAIItem.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.2--Token-Test- .ChipItemAIItem (node 51032:40515)
// anatomy: root[ iconItem[ iconShape[ iconUnion ] ], label ]

interface Props {
  /** Label text shown inside the chip */
  text?: string;
  /** Click handler */
  onClick?: () => void;
  className?: string;
}

export function ChipItemAIItem({
  text = "텍스트",
  onClick,
  className,
}: Props) {
  return (
    <div
      data-cx-component="ChipItemAIItem"
      className={[styles.root, className].filter(Boolean).join(" ")}
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") onClick?.();
      }}
    >
      <span className={styles.iconItem} aria-hidden="true">
        <span className={styles.iconShape}>
          <svg
            className={styles.iconUnion}
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* AI sparkle / star icon placeholder — replaced by real asset at runtime */}
            <path
              d="M8.5 1.5L9.9 6.1L14.5 7.5L9.9 8.9L8.5 13.5L7.1 8.9L2.5 7.5L7.1 6.1L8.5 1.5Z"
              fill="currentColor"
            />
          </svg>
        </span>
      </span>
      <span className={styles.label}>{text}</span>
    </div>
  );
}
