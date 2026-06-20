import React from "react";
import styles from "./CellRightTable.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.3 .CellRightTable (node 55296:30689)
// anatomy: root[ title, description ]
// Properties: description(string), title(string), variants(18Semi | 16Semi | 16reg | 15reg)

export type CellRightTableVariant = "18Semi" | "16Semi" | "16reg" | "15reg";

interface Props {
  /** Figma property: right content text */
  description?: string;
  /** Figma property: left title text */
  title?: string;
  /** Figma property: typography variant */
  variants?: CellRightTableVariant;
  className?: string;
}

export function CellRightTable({
  description = "내용 들어가는 부분",
  title = "타이틀",
  variants = "18Semi",
  className,
}: Props) {
  return (
    <div
      className={[styles.root, styles[`variant${variants}`], className]
        .filter(Boolean)
        .join(" ")}
      data-cx-component="CellRightTable"
      data-variants={variants}
    >
      <p className={styles.title}>{title}</p>
      <p className={styles.description}>{description}</p>
    </div>
  );
}
