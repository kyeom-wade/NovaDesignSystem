import React from "react";
import { CellRightItem } from "../CellRightItem";
import styles from "./CellSheet.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.3 .CellSheet (node 55391:30030)
// anatomy: root[ leftItem[ thumbnail, text ], cellRightItem? ]
// Properties: caption, cellRightItem, subtitle, title, value01, value02, variants(Price | Notice)

export type CellSheetVariant = "Price" | "Notice";

interface Props {
  /** Figma property: price caption text */
  caption?: string;
  /** Figma property: right CellRightItem visibility */
  cellRightItem?: boolean;
  /** Figma property: price subtitle text */
  subtitle?: string;
  /** Figma property: notice title text */
  title?: string;
  /** Figma property: primary price/value text */
  value01?: string;
  /** Figma property: secondary price/value suffix */
  value02?: string;
  /** Figma property: visual content variant */
  variants?: CellSheetVariant;
  className?: string;
}

export function CellSheet({
  caption = "Caption",
  cellRightItem = true,
  subtitle = "Subtitle",
  title = "Title",
  value01 = "99,999원",
  value02 = "/Period",
  variants = "Price",
  className,
}: Props) {
  const isPrice = variants === "Price";

  return (
    <div
      className={[styles.root, className].filter(Boolean).join(" ")}
      data-cx-component="CellSheet"
      data-cell-right-item={cellRightItem ? "on" : "off"}
      data-variants={variants}
    >
      <div className={styles.leftItem}>
        <div className={styles.thumbnail} aria-hidden="true">
          <span className={styles.thumbnailMark} />
        </div>

        {isPrice ? (
          <div className={styles.priceText}>
            <p className={styles.subtitle}>{subtitle}</p>
            <div className={styles.priceRow}>
              <span className={styles.valueGroup}>
                <span className={styles.value01}>{value01}</span>
                <span className={styles.value02}>{value02}</span>
              </span>
              <span className={styles.caption}>{caption}</span>
            </div>
          </div>
        ) : (
          <p className={styles.title}>{title}</p>
        )}
      </div>

      {cellRightItem && (
        <CellRightItem variants={isPrice ? "Icon" : "ButtonSmall"} />
      )}
    </div>
  );
}
