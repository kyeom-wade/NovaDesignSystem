import React from "react";
import styles from "./CellRightTableItem.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.2--Token-Test- .CellRightTableItem (node 51098:54763)
// anatomy: root[ labelCell[ labelText ], valueCell[ valueText ] ]

export type CellRightTableItemVariant =
  | "14Title"
  | "14Primary"
  | "14Secondary"
  | "14TitleBlue"
  | "14PrimaryBlue"
  | "14SecondaryBlue"
  | "16Title"
  | "16TitleBlue";

interface Props {
  /** Figma variant key — drives font size, weight, and color of both label and value */
  variant?: CellRightTableItemVariant;
  /** Left-side label text */
  label?: string;
  /** Right-side value text */
  value?: string;
}

export function CellRightTableItem({
  variant = "14Title",
  label = "타이틀",
  value = "내용 들어가는 부분",
}: Props) {
  const is16 = variant === "16Title" || variant === "16TitleBlue";

  return (
    <div
      className={[
        styles.root,
        styles[`variant--${variant}`],
        is16 ? styles["size--16"] : styles["size--14"],
      ].join(" ")}
      data-cx-component="CellRightTableItem"
      data-variant={variant}
    >
      {/* label cell */}
      <div className={styles.labelCell} data-name="TextItem">
        <p className={styles.labelText}>{label}</p>
      </div>

      {/* value cell */}
      <div className={styles.valueCell} data-name="TextItem">
        <p className={styles.valueText}>{value}</p>
      </div>
    </div>
  );
}
