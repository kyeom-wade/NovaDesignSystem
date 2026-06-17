import styles from "./Alert.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.3 .Alert (node 54127:95029)
// anatomy: wrap[ group[ title?, body ] ]

import React from "react";

type AlertVariant = "neutral" | "danger";

interface Props {
  /** Figma prop: danger=true renders danger colors */
  danger?: boolean;
  /** Figma prop: body text */
  description?: string;
  /** Figma prop: optional bold title line */
  title?: string;
  /** Figma prop: title row visibility */
  titleText?: boolean;
  /** Legacy alias — "neutral" maps to danger=false, "danger" maps to danger=true */
  variant?: AlertVariant;
  /** Legacy alias for description */
  body?: string;
  /** Legacy alias for titleText */
  showTitle?: boolean;
  className?: string;
}

export function Alert({
  danger,
  description,
  title = "Title",
  titleText,
  variant,
  body,
  showTitle,
  className,
}: Props) {
  const isDanger = danger ?? variant === "danger";
  const shouldShowTitle = titleText ?? showTitle ?? true;
  const descriptionText = description ?? body ?? "Description";
  const wrapClass = [
    styles.wrap,
    isDanger ? styles.wrapDanger : styles.wrapNeutral,
    className,
  ]
    .filter(Boolean)
    .join(" ");
  const groupClass = [
    styles.group,
    isDanger ? styles.danger : styles.neutral,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={wrapClass}
      data-cx-component="Alert"
      data-danger={isDanger ? "true" : "false"}
    >
      <div className={groupClass}>
        {shouldShowTitle && title && (
          <p className={styles.title}>{title}</p>
        )}
        <p className={styles.description}>{descriptionText}</p>
      </div>
    </div>
  );
}
