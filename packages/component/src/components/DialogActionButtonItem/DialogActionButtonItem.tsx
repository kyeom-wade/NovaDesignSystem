import React from "react";
import { ButtonItem } from "../ButtonItem/ButtonItem";
import styles from "./DialogActionButtonItem.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.3 .DialogActionButtonItem (node 50943:28567)
// anatomy: root[ ButtonItem(Secondary)?, ButtonItem(Primary) ]
// Variants=Options: 2Button | 1Button

interface Props {
  /** Layout variant: show both secondary + primary buttons, or only the primary */
  options?: "2Button" | "2Buttons" | "1Button";
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
  const is2Buttons = options === "2Button" || options === "2Buttons";
  const normalizedOptions = is2Buttons ? "2Button" : "1Button";

  return (
    <div
      className={`${styles.root} ${is2Buttons ? styles.twoButtons : styles.oneButton}`}
      data-cx-component="DialogActionButtonItem"
      data-options={normalizedOptions}
    >
      {is2Buttons && (
        <ButtonItem
          className={styles.button}
          variant="Secondary"
          size="Large"
          label={secondaryLabel}
          icon={false}
          onClick={onSecondary}
        />
      )}
      <ButtonItem
        className={styles.button}
        variant="Primary"
        size="Large"
        label={primaryLabel}
        icon={false}
        onClick={onPrimary}
      />
    </div>
  );
}
