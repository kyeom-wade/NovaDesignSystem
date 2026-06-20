import React from "react";
import { CheckboxRightTextItem } from "../CheckboxRightTextItem";
import { RadioItem } from "../RadioItem";
import styles from "./CellRightSelect.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.3 .CellRightSelect (node 55430:107502)
// anatomy: root[ label, RadioItem|CheckboxItem ]
// Properties: variants(Radio | Circle)

export type CellRightSelectVariant = "Radio" | "Circle";

interface Props {
  /** Figma property: selection control type */
  variants?: CellRightSelectVariant;
  className?: string;
}

export function CellRightSelect({
  variants = "Radio",
  className,
}: Props) {
  const isRadio = variants === "Radio";

  return (
    <div
      className={[styles.root, className].filter(Boolean).join(" ")}
      data-cx-component="CellRightSelect"
      data-variants={variants}
    >
      {isRadio ? (
        <div className={styles.radioTextItem}>
          <p className={styles.label}>Label</p>
          <RadioItem selected={false} disabled={false} />
        </div>
      ) : (
        <CheckboxRightTextItem
          checked={false}
          label="Label"
          size="Medium"
          state
          variants="Circle"
          className={styles.checkboxTextItem}
        />
      )}
    </div>
  );
}
