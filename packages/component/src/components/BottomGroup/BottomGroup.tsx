import React from "react";
import styles from "./BottomGroup.module.css";
import { BottomGroupAreaItem } from "../BottomGroupAreaItem/BottomGroupAreaItem";
import { BottomGroupUpperItem, type BottomGroupUpperItemVariant } from "../BottomGroupUpperItem/BottomGroupUpperItem";
// Figma SSOT: SKT-Next_UI-Draft_3.3 .BottomGroup (node 51228:76344)
// anatomy: root[ upperItem?[ BottomGroupUpperItem ], BottomGroupAreaItem ]

type BottomGroupAreaItemVariant = "1 Botton" | "2 Botton";

interface Props {
  /** Figma variant. BottomGroup is the normal/non-AI bottom CTA group. */
  variants?: "Normal";
  /** @deprecated Use variants instead. */
  variant?: "Normal" | "Default" | "Ai";
  /** Show the upper item above the button area. */
  upperItem?: boolean;
  /** @deprecated Use upperItem instead. */
  showUpperItem?: boolean;
  /** Upper item variant. */
  upperItemVariants?: BottomGroupUpperItemVariant;
  /** @deprecated Use upperItemVariants instead. */
  upperItemVariant?: BottomGroupUpperItemVariant;
  /** Upper item label */
  upperItemLabel?: string;
  /** Upper item value, used by Table variant */
  upperItemValue?: string;
  /** Button area variant */
  areaItemVariants?: BottomGroupAreaItemVariant;
  /** Label for the secondary button, only shown in "2 Botton" */
  secondaryLabel?: string;
  /** Label for the primary CTA. */
  primaryLabel?: string;
  /** @deprecated Use upperItemLabel instead. */
  upperItemText?: string;
  /** Click handler for primary CTA */
  onPrimary?: () => void;
  /** Click handler for secondary CTA */
  onSecondary?: () => void;
  className?: string;
}

export function BottomGroup({
  variants = "Normal",
  variant,
  upperItem,
  showUpperItem,
  upperItemVariants,
  upperItemVariant,
  upperItemLabel,
  upperItemValue,
  areaItemVariants = "1 Botton",
  secondaryLabel = "Label",
  primaryLabel = "Label",
  upperItemText,
  onPrimary,
  onSecondary,
  className,
}: Props) {
  const resolvedVariant = variants ?? (variant === "Default" || variant === "Ai" ? "Normal" : variant ?? "Normal");
  const resolvedUpperItem = upperItem ?? showUpperItem ?? true;
  const resolvedUpperItemVariant = upperItemVariants ?? upperItemVariant ?? "Default";
  const resolvedUpperItemLabel =
    upperItemLabel ?? upperItemText ?? (resolvedUpperItemVariant === "Default" ? "텍스트" : "타이틀");

  return (
    <div
      className={[styles.wrap, className]
        .filter(Boolean)
        .join(" ")}
      data-cx-component="BottomGroup"
      data-variant={resolvedVariant}
      data-upper-item={resolvedUpperItem}
    >
      {resolvedUpperItem && (
        <div className={styles.upperItem}>
          <BottomGroupUpperItem
            variant={resolvedUpperItemVariant}
            label={resolvedUpperItemLabel}
            value={upperItemValue}
          />
        </div>
      )}

      <BottomGroupAreaItem
        className={styles.areaItem}
        variants={areaItemVariants}
        primaryLabel={primaryLabel}
        secondaryLabel={secondaryLabel}
        onPrimary={onPrimary}
        onSecondary={onSecondary}
      />
    </div>
  );
}
