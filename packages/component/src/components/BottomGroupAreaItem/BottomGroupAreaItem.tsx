import React from "react";
import styles from "./BottomGroupAreaItem.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.2--Token-Test- .BottomGroupAreaItem (node 50990:41804)
// anatomy: wrap[ primaryBtn ] | wrap[ secondaryBtn, primaryBtn ]

interface Props {
  /** Layout variant: one full-width button or two equal buttons side-by-side */
  variants?: "1 Botton" | "2 Botton";
  /** Label for the primary (brand-filled) button */
  primaryLabel?: string;
  /** Label for the secondary (neutral-filled) button — only shown in "2 Botton" */
  secondaryLabel?: string;
  /** Click handler for primary button */
  onPrimary?: () => void;
  /** Click handler for secondary button */
  onSecondary?: () => void;
}

export function BottomGroupAreaItem({
  variants = "1 Botton",
  primaryLabel = "버튼",
  secondaryLabel = "버튼",
  onPrimary,
  onSecondary,
}: Props) {
  const is2Button = variants === "2 Botton";

  return (
    <div
      className={`${styles.wrap} ${is2Button ? styles.wrapDual : ""}`}
      data-cx-component="BottomGroupAreaItem"
    >
      {is2Button && (
        <button
          type="button"
          className={`${styles.btn} ${styles.btnSecondary}`}
          onClick={onSecondary}
        >
          {secondaryLabel}
        </button>
      )}
      <button
        type="button"
        className={`${styles.btn} ${styles.btnPrimary}`}
        onClick={onPrimary}
      >
        {primaryLabel}
      </button>
    </div>
  );
}
