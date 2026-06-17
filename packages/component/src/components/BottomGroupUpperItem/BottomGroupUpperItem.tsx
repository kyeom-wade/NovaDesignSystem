import React from "react";
import styles from "./BottomGroupUpperItem.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.3 .BottomGroupUpperItem (node 51363:45164)
// anatomy: root[ listText[ labelCell[ titleBadge[ title ] ] ] | listRightTable[ leftTextItem[ label ], rightTextItem[ value ] ] ]

export type BottomGroupUpperItemVariant = "Default" | "Table";

interface Props {
  /** Layout variant — Default shows a single list text label; Table shows a label+value pair */
  variant?: BottomGroupUpperItemVariant;
  /** Primary label text (shown in both variants) */
  label?: string;
  /** Value text shown on the right side (Table variant only) */
  value?: string;
  className?: string;
}

export function BottomGroupUpperItem({
  variant = "Table",
  label = variant === "Default" ? "텍스트" : "타이틀",
  value = "내용 들어가는 부분",
  className,
}: Props) {
  return (
    <div
      className={[styles.root, className ?? ""].filter(Boolean).join(" ")}
      data-cx-component="BottomGroupUpperItem"
      data-variant={variant}
    >
      {variant === "Default" && (
        <div className={styles.listText}>
          <div className={styles.labelCell}>
            <div className={styles.titleBadge}>
              <div className={styles.titleWrap}>
                <p className={styles.labelText}>{label}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {variant === "Table" && (
        <div className={styles.listRightTable}>
          <div className={styles.leftTextItem}>
            <p className={styles.tableLabel}>{label}</p>
          </div>
          <div className={styles.rightTextItem}>
            <p className={styles.tableValue}>{value}</p>
          </div>
        </div>
      )}
    </div>
  );
}
