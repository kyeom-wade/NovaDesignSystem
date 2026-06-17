import React from "react";
import { BottomGroupAiAreaItem } from "../BottomGroupAiAreaItem/BottomGroupAiAreaItem";
import styles from "./BottomGroupAi.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.3 .BottomGroupAi (node 55100:66367)
// anatomy: root[ aiUpperItem?[ IconItem(AI), label ], BottomGroupAiAreaItem(2 Botton) ]

interface Props {
  /** Figma variant prop. Currently only Ai is defined. */
  variants?: "Ai";
  /** Whether to show the AI upper label row */
  aiUpperItem?: boolean;
  /** Text in the AI upper label row */
  aiLabelText?: string;
  /** Primary CTA label, shown on the right side of the split pill */
  primaryLabel?: string;
  /** Secondary CTA label, shown on the left side of the split pill */
  secondaryLabel?: string;
  /** Callback for primary CTA */
  onPrimary?: () => void;
  /** Callback for secondary CTA */
  onSecondary?: () => void;
  className?: string;
}

export function BottomGroupAi({
  variants = "Ai",
  aiUpperItem = true,
  aiLabelText = "텍스트",
  primaryLabel = "Label",
  secondaryLabel = "Label",
  onPrimary,
  onSecondary,
  className,
}: Props) {
  return (
    <div
      className={[styles.root, className].filter(Boolean).join(" ")}
      data-cx-component="BottomGroupAi"
      data-variant={variants}
      data-ai-upper-item={aiUpperItem ? "true" : "false"}
    >
      {aiUpperItem && (
        <div className={styles.aiUpperItem}>
          <span className={styles.aiIcon} aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8 1.995L9.201 5.799L13.005 7L9.201 8.201L8 12.005L6.799 8.201L2.995 7L6.799 5.799L8 1.995Z"
                fill="url(#bottomGroupAiGradient)"
              />
              <defs>
                <linearGradient id="bottomGroupAiGradient" x1="2.995" y1="7" x2="13.005" y2="7" gradientUnits="userSpaceOnUse">
                  <stop stopColor="var(--skt-color-palette-blue-800, #3617ce)" />
                  <stop offset="1" stopColor="var(--skt-color-palette-blue-600, #5f6afd)" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span className={styles.aiLabelText}>{aiLabelText}</span>
        </div>
      )}

      <BottomGroupAiAreaItem
        className={styles.areaItem}
        variants="2 Botton"
        primaryLabel={primaryLabel}
        secondaryLabel={secondaryLabel}
        onPrimary={onPrimary}
        onSecondary={onSecondary}
      />
    </div>
  );
}
