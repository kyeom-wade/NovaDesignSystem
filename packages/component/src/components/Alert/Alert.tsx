import styles from "./Alert.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.2--Token-Test- .Alert (node 51243:75943)
// anatomy: wrap[ group[ title?, body ] ]

import React from "react";

type AlertVariant = "neutral" | "danger";

interface Props {
  /** Visual variant — "neutral" (default) or "danger" */
  variant?: AlertVariant;
  /** Optional bold title line; pass undefined or empty string to hide */
  title?: string;
  /** Main body text */
  body?: string;
  /** Show or hide the title row */
  showTitle?: boolean;
}

export function Alert({
  variant = "neutral",
  title = "타이틀",
  body = "본문",
  showTitle = true,
}: Props) {
  return (
    <div
      className={styles.wrap}
      data-cx-component="Alert"
      data-variant={variant}
    >
      <div className={`${styles.group} ${styles[variant]}`}>
        {showTitle && title && (
          <p className={styles.title}>{title}</p>
        )}
        <p className={styles.body}>{body}</p>
      </div>
    </div>
  );
}
