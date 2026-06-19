import React from "react";
import styles from "./CellLeftTable.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.3 .CellLeftTable (node 55320:38718)
// anatomy: root[ title, description ]
// Properties: description, title, variants(Small | Medium)

export type CellLeftTableVariant = "Small" | "Medium";

interface Props {
  /** Figma property: right description text */
  description?: string;
  /** Figma property: left title text */
  title?: string;
  /** Figma property: text size variant */
  variants?: CellLeftTableVariant;
  /** Legacy alias for description. Prefer description. */
  content?: string;
  className?: string;
}

export function CellLeftTable({
  description,
  variants = "Small",
  title = "타이틀",
  content,
  className,
}: Props) {
  const resolvedDescription = description ?? content ?? "내용 들어가는 부분";

  return (
    <div
      className={[styles.root, styles[`variant${variants}`], className]
        .filter(Boolean)
        .join(" ")}
      data-cx-component="CellLeftTable"
      data-variants={variants}
    >
      <p className={styles.title}>{title}</p>
      <p className={styles.description}>{resolvedDescription}</p>
    </div>
  );
}
