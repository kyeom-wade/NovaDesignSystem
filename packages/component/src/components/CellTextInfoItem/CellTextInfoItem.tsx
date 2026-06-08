import styles from "./CellTextInfoItem.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.2--Token-Test- .CellTextInfoItem (node 50943:28269)
// anatomy: root[ txtRow[ label, rightBadge?, rightText? ], subRow[ subText, divider, dateText ] ]

interface Props {
  /** Right-side adornment variant */
  rightItem?: "None" | "Badge" | "Text";
  /** Primary label text */
  label?: string;
  /** Badge label (shown when rightItem="Badge") */
  badgeLabel?: string;
  /** Right text value (shown when rightItem="Text") */
  rightText?: string;
  /** Sub-row first text (category / label) */
  subText?: string;
  /** Sub-row second text (date) */
  dateText?: string;
}

export function CellTextInfoItem({
  rightItem = "None",
  label = "일이삼사오육칠팔구십일이삼사오육칠팔구십",
  badgeLabel = "NEW",
  rightText = "+500P",
  subText = "텍스트",
  dateText = "날짜",
}: Props) {
  const isBadge = rightItem === "Badge";
  const isText = rightItem === "Text";

  return (
    <div className={styles.root} data-cx-component="CellTextInfoItem">
      {/* primary text row */}
      <div className={styles.txtRow}>
        <p className={styles.label}>{label}</p>

        {isBadge && (
          <div className={styles.badge}>
            <span className={styles.badgeLabel}>{badgeLabel}</span>
          </div>
        )}

        {isText && (
          <span className={styles.rightText}>{rightText}</span>
        )}
      </div>

      {/* sub-info row */}
      <div className={styles.subRow}>
        <span className={styles.subText}>{subText}</span>
        <span className={styles.divider} aria-hidden="true" />
        <span className={styles.dateText}>{dateText}</span>
      </div>
    </div>
  );
}
