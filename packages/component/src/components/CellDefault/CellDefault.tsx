import React from "react";
import { CellTitleItem } from "../CellTitleItem/CellTitleItem";
import styles from "./CellDefault.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.2--Token-Test- .CellDefault (node 51819:84096)
// anatomy: root[ titleItem?[ cellText[ titleBadge[ title ] ] ], cellItem[ children ] ]

interface Props {
  /** Title text shown above the cell item slot */
  title?: string;
  /** Whether to render the title row */
  showTitle?: boolean;
  /** Slot for the cell item content (100px tall area) */
  children?: React.ReactNode;
  className?: string;
}

export function CellDefault({
  title = "리스트 타이틀",
  showTitle = true,
  children,
  className,
}: Props) {
  return (
    <div
      className={[styles.root, className ?? ""].filter(Boolean).join(" ")}
      data-cx-component="CellDefault"
    >
      {showTitle && (
        <CellTitleItem
          className={styles.titleItem}
          title={title}
          rightItem="None"
        />
      )}
      <div className={styles.cellItem}>{children}</div>
    </div>
  );
}
