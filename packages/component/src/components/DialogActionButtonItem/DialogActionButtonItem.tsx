import React from "react";
import styles from "./DialogActionButtonItem.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.2--Token-Test- .DialogActionButtonItem (node 50943:28567)
// anatomy: root[ secondaryBtn?(button), primaryBtn(button) ]
// Variants=options: 2Buttons | 1Button

interface Props {
  /** Layout variant: show both secondary + primary buttons, or only the primary */
  options?: "2Buttons" | "1Button";
  /** Label for the primary (brand-fill) button */
  primaryLabel?: string;
  /** Label for the secondary (neutral-fill) button — only shown when options="2Buttons" */
  secondaryLabel?: string;
  /** Click handler for the primary button */
  onPrimary?: () => void;
  /** Click handler for the secondary button */
  onSecondary?: () => void;
}

export function DialogActionButtonItem({
  options = "2Buttons",
  primaryLabel = "버튼",
  secondaryLabel = "버튼",
  onPrimary,
  onSecondary,
}: Props) {
  const is2Buttons = options === "2Buttons";

  return (
    <div
      className={`${styles.root} ${is2Buttons ? styles.twoButtons : styles.oneButton}`}
      data-cx-component="DialogActionButtonItem"
      data-options={options}
    >
      {is2Buttons && (
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
