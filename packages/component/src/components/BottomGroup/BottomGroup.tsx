import React from "react";
import styles from "./BottomGroup.module.css";
import { BottomGroupAiAreaItem } from "../BottomGroupAiAreaItem/BottomGroupAiAreaItem";
import { BottomGroupAreaItem } from "../BottomGroupAreaItem/BottomGroupAreaItem";
import { BottomGroupUpperItem, type BottomGroupUpperItemVariant } from "../BottomGroupUpperItem/BottomGroupUpperItem";
// Figma SSOT: SKT-Next_UI-Draft_3.2--Token-Test- .BottomGroup (node 51228:76344)
// anatomy: wrap[
//   aiLabel?[ aiIcon, aiText ] (Ai variant only),
//   aiAreaItem?[ iconMask, buttonRow[ secondaryBtn?, divider?, primaryBtn ] ] (Ai variant only),
//   upperItem?[ listText[ labelCell ] ] (Default variant only),
//   areaItem[ primaryBtn ] (Default variant only)
// ]

interface Props {
  /** Figma variant: "Ai" shows frosted AI bar; "Default" shows plain bottom sheet */
  variant?: "Default" | "Ai";
  /** (Ai) Show the AI label row above the buttons */
  showAiLabel?: boolean;
  /** (Ai) Text shown in the AI label strip */
  aiLabelText?: string;
  /** (Ai) Show the left (secondary) CTA in the split pill — renders "2 Botton" style */
  showSecondaryButton?: boolean;
  /** (Ai) Label for the secondary (left) CTA */
  secondaryLabel?: string;
  /** Label for the primary CTA. Defaults: "구독하기" in Ai variant, "버튼" in Default variant */
  primaryLabel?: string;
  /** (Default) Show the upper list-text row above the primary button */
  showUpperItem?: boolean;
  /** (Default) Upper item variant */
  upperItemVariant?: BottomGroupUpperItemVariant;
  /** (Default) Upper item label */
  upperItemLabel?: string;
  /** (Default) Upper item value, used by Table variant */
  upperItemValue?: string;
  /** @deprecated Use upperItemLabel instead. */
  upperItemText?: string;
  /** Click handler for primary CTA */
  onPrimary?: () => void;
  /** Click handler for secondary CTA (Ai variant only) */
  onSecondary?: () => void;
  className?: string;
}

export function BottomGroup({
  variant = "Ai",
  showAiLabel = true,
  aiLabelText = "텍스트",
  showSecondaryButton = true,
  secondaryLabel = "선물하기",
  primaryLabel,
  showUpperItem = true,
  upperItemVariant = "Default",
  upperItemLabel,
  upperItemValue,
  upperItemText = "리스트 텍스트",
  onPrimary,
  onSecondary,
  className,
}: Props) {
  const isAi = variant === "Ai";
  const isDefault = variant === "Default";
  const resolvedPrimaryLabel = primaryLabel ?? (isAi ? "구독하기" : "버튼");
  const resolvedUpperItemLabel = upperItemLabel ?? upperItemText;

  return (
    <div
      className={[
        styles.wrap,
        isAi ? styles.wrapAi : styles.wrapDefault,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      data-cx-component="BottomGroup"
      data-variant={variant}
    >
      {/* ── Ai variant ── */}
      {isAi && showAiLabel && (
        <div className={styles.aiLabel}>
          {/* AI sparkle icon */}
          <span className={styles.aiIcon} aria-hidden="true">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 1L9.545 5.455L14 7L9.545 8.545L8 13L6.455 8.545L2 7L6.455 5.455L8 1Z"
                fill="url(#aiGrad)"
              />
              <defs>
                <linearGradient
                  id="aiGrad"
                  x1="2"
                  y1="7"
                  x2="14"
                  y2="7"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="var(--skt-color-palette-blue-800, #3617ce)" />
                  <stop offset="1" stopColor="var(--skt-color-palette-blue-600, #5f6afd)" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span className={styles.aiLabelText}>{aiLabelText}</span>
        </div>
      )}

      {isAi && (
        <BottomGroupAiAreaItem
          variant={showSecondaryButton ? "2 Botton" : "1 Botton"}
          primaryLabel={resolvedPrimaryLabel}
          secondaryLabel={secondaryLabel}
          onPrimary={onPrimary}
          onSecondary={onSecondary}
        />
      )}

      {/* ── Default variant ── */}
      {isDefault && showUpperItem && (
        <div className={styles.upperItem}>
          <BottomGroupUpperItem
            variant={upperItemVariant}
            label={resolvedUpperItemLabel}
            value={upperItemValue}
          />
        </div>
      )}

      {isDefault && (
        <BottomGroupAreaItem
          variants="1 Botton"
          primaryLabel={resolvedPrimaryLabel}
          onPrimary={onPrimary}
        />
      )}
    </div>
  );
}
