import React from "react";
import styles from "./CellTableItem.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.2--Token-Test- .CellTableItem (node 50985:75705)
// anatomy: root[ labelCell[ labelText ], valueCell[ valueText ] ]

interface Props {
  /** Column ratio: width of the label column — "20" ≈ 20%, "30" ≈ 90px fixed, "40" ≈ 120px fixed */
  ratio?: "20" | "30" | "40";
  /** Font size of both label and value text */
  textSize?: "13" | "14";
  /** Left-side label (title) text */
  label?: string;
  /** Right-side value (content) text */
  value?: string;
}

export function CellTableItem({
  ratio = "20",
  textSize = "13",
  label = "타이틀",
  value = "내용 들어가는 부분",
}: Props) {
  const labelFixedWidth = ratio === "30" ? 90 : ratio === "40" ? 120 : undefined;

  return (
    <div
      className={[
        styles.root,
        styles[`ratio--${ratio}`],
        styles[`textSize--${textSize}`],
      ].join(" ")}
      data-cx-component="CellTableItem"
      data-ratio={ratio}
      data-text-size={textSize}
    >
      {/* label cell */}
      <div
        className={styles.labelCell}
        style={labelFixedWidth ? { width: labelFixedWidth } : undefined}
        data-name="TextItem"
      >
        <p className={styles.labelText}>{label}</p>
      </div>

      {/* value cell */}
      <div className={styles.valueCell} data-name="TextItem">
        <p className={styles.valueText}>{value}</p>
      </div>
    </div>
  );
}
