import React from "react";
import styles from "./CellLeftTable.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.3 .CellLeftTable (node 55320:38718)
// anatomy: root[ title, content ]
// Properties: variants(Small | Medium)

export type CellLeftTableVariant = "Small" | "Medium";

interface Props {
  /** Figma property: text size variant */
  variants?: CellLeftTableVariant;
  /** Optional text override; hidden from primary Storybook controls. */
  title?: string;
  /** Optional content override; hidden from primary Storybook controls. */
  content?: string;
  className?: string;
}

export function CellLeftTable({
  variants = "Small",
  title = "타이틀",
  content = "내용 들어가는 부분",
  className,
}: Props) {
  return (
    <div
      className={[styles.root, styles[`variant${variants}`], className]
        .filter(Boolean)
        .join(" ")}
      data-cx-component="CellLeftTable"
      data-variants={variants}
    >
      <p className={styles.title}>{title}</p>
      <p className={styles.content}>{content}</p>
    </div>
  );
}
