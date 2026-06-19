import React from "react";
import { CellRightItem } from "../CellRightItem";
import { CheckboxLeftTextItem } from "../CheckboxLeftTextItem";
import { RadioItem } from "../RadioItem";
import styles from "./CellLeftSelect.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.3 .CellLeftSelect (node 55430:106723)
// anatomy: root[ RadioItem|CheckboxLeftTextItem, CellRightItem? ]
// Properties: cellRightItem(boolean), variants(Radio | Check)

export type CellLeftSelectVariant = "Radio" | "Check";

interface Props {
  /** Figma property: trailing CellRightItem visibility */
  cellRightItem?: boolean;
  /** Figma property: selection control type */
  variants?: CellLeftSelectVariant;
  className?: string;
}

export function CellLeftSelect({
  cellRightItem = true,
  variants = "Radio",
  className,
}: Props) {
  const isRadio = variants === "Radio";

  return (
    <div
      className={[styles.root, className].filter(Boolean).join(" ")}
      data-cx-component="CellLeftSelect"
      data-cell-right-item={cellRightItem ? "on" : "off"}
      data-variants={variants}
    >
      <div className={styles.leftItem}>
        {isRadio ? (
          <div className={styles.radioTextItem}>
            <RadioItem selected={false} disabled={false} />
            <p className={styles.label}>Label</p>
          </div>
        ) : (
          <CheckboxLeftTextItem
            checked={false}
            label="Label"
            size="Medium"
            state
            variants="Circle"
            className={styles.checkboxTextItem}
          />
        )}
      </div>
      {cellRightItem && <CellRightItem variants="Icon" />}
    </div>
  );
}
