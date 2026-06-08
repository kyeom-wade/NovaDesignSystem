import React from "react";
import styles from "./LayoutPagestack.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.2--Token-Test- .LayoutPagestack (node 50943:28865)
// anatomy: root[ titleSection?[ titleTextItem[ text[ title ] ] ], contentsSlot[ children ] ]

interface Props {
  /** Whether the section title row is shown */
  contentsTitle?: boolean;
  /** Section title text */
  title?: string;
  /** Slot: swap the entire title row with a custom node */
  titleSwap?: React.ReactNode;
  /** Slot: page contents rendered inside the contents area */
  children?: React.ReactNode;
}

export function LayoutPagestack({
  contentsTitle = true,
  title = "섹션/콘텐츠 타이틀",
  titleSwap,
  children,
}: Props) {
  return (
    <div className={styles.root} data-cx-component="LayoutPagestack">
      {contentsTitle &&
        (titleSwap ? (
          <div className={styles.titleRow}>{titleSwap}</div>
        ) : (
          <div className={styles.titleRow}>
            <div className={styles.titleTextItem}>
              <div className={styles.textItem}>
                <p className={styles.title}>{title}</p>
              </div>
            </div>
          </div>
        ))}
      <div className={styles.contentsSlot}>{children}</div>
    </div>
  );
}
