import React from "react";
import { ThumbnailRoundItem } from "../ThumbnailRoundItem";
import styles from "./CellPointInfo.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.3 .CellPointInfo (node 54063:24037)
// anatomy: root[ ThumbnailRoundItem, textInfo[ txt[ title, value ], txtSub[ caption01, caption02 ] ] ]
// Properties: caption01, caption02, title, value, variants(Add | Discount)

export type CellPointInfoVariant = "Add" | "Discount";

interface Props {
  /** Figma property: left sub-caption */
  caption01?: string;
  /** Figma property: right sub-caption */
  caption02?: string;
  /** Figma property: title text */
  title?: string;
  /** Figma property: point/value text */
  value?: string;
  /** Figma property: point display variant */
  variants?: CellPointInfoVariant;
  className?: string;
}

export function CellPointInfo({
  caption01 = "2026.01.01",
  caption02 = "Caption",
  title = "Title",
  value = "99,999원",
  variants = "Add",
  className,
}: Props) {
  const isDiscount = variants === "Discount";

  return (
    <div
      className={[styles.root, className].filter(Boolean).join(" ")}
      data-cx-component="CellPointInfo"
      data-variants={variants}
    >
      <ThumbnailRoundItem size="48" dimMultiply />
      <div className={styles.textInfo}>
        <div className={styles.mainRow}>
          <p className={styles.title}>{title}</p>
          <p className={[styles.value, isDiscount ? styles.valueDiscount : ""].filter(Boolean).join(" ")}>
            {value}
          </p>
        </div>
        <div className={styles.subRow}>
          <p className={styles.caption}>{caption01}</p>
          <p className={styles.caption}>{caption02}</p>
        </div>
      </div>
    </div>
  );
}
