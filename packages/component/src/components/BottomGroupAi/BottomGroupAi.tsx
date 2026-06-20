import React from "react";
import { BottomGroupAiUpperItem } from "../BottomGroupAiUpperItem/BottomGroupAiUpperItem";
import { BottomGroupAiAreaItem } from "../BottomGroupAiAreaItem/BottomGroupAiAreaItem";
import styles from "./BottomGroupAi.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.3 .BottomGroupAi (node 50990:53844)
// anatomy: root[ BottomGroupAiUpperItem?, BottomGroupAiAreaItem("2 Botton") ]
// 인스턴스 합성: 상단 안내 행과 버튼 영역을 각각 BottomGroupAiUpperItem / BottomGroupAiAreaItem 컴포넌트로 조립.

interface Props {
  /** Figma variant prop. Currently only Ai is defined. */
  variants?: "Ai";
  /** Whether to show the AI upper label row */
  aiUpperItem?: boolean;
  /** Text in the AI upper label row (BottomGroupAiUpperItem caption) */
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
        <BottomGroupAiUpperItem className={styles.upperItem} caption={aiLabelText} />
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
