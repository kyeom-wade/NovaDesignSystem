import React from "react";
import styles from "./TitleTextItem.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.2--Token-Test- .TitleTextItem (node 51082:49861)
// anatomy: root[ ?optionText[ optionLabel ], textGroup[ ?textLeft, textItem[ title ] ], ?subTextGroup[ subText ] ]
// Variants: textLeft(bool) × textRight(bool) × optionText(bool) × subText(bool) — 16 combinations

interface Props {
  /** Show the small option/label text above the title row */
  optionText?: boolean;
  /** Content of the option label row */
  optionLabel?: string;
  /** Show sub-text below the title row */
  subText?: boolean;
  /** Content of the sub-text */
  subTextContent?: string;
  /** Show a numbered badge to the left of the title (blue accent, e.g. "00") */
  textLeft?: boolean;
  /** Value shown in the left badge */
  textLeftValue?: string;
  /** Show the right-side tertiary number badge after the title */
  textRight?: boolean;
  /** Value shown in the right badge */
  textRightValue?: string;
  /** Main title text */
  title?: string;
  className?: string;
}

export function TitleTextItem({
  optionText = false,
  optionLabel = "옵션 텍스트",
  subText = false,
  subTextContent = "서브 텍스트",
  textLeft = false,
  textLeftValue = "00",
  textRight = false,
  textRightValue = "2",
  title = "섹션/콘텐츠 타이틀",
  className,
}: Props) {
  const showTextGroup = textLeft || textRight;

  return (
    <div
      className={[
        styles.root,
        subText || (optionText && !subText) ? styles.rootColumn : "",
        optionText && !subText && textLeft ? styles.rootGap2 : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      data-cx-component="TitleTextItem"
    >
      {/* OptionText row */}
      {optionText && (
        <div className={styles.optionTextRow}>
          <span className={styles.optionLabel}>{optionLabel}</span>
        </div>
      )}

      {/* Title row — with textLeft/textRight badges, or plain */}
      {showTextGroup ? (
        <div className={styles.textGroup}>
          {textLeft && (
            <span className={styles.textLeftBadge}>{textLeftValue}</span>
          )}
          <div className={styles.textItem}>
            <span className={styles.title}>{title}</span>
          </div>
          {textRight && (
            <div className={styles.textRightBadge}>
              <span className={styles.textRightValue}>{textRightValue}</span>
            </div>
          )}
        </div>
      ) : (
        <div className={styles.textItem}>
          <span className={styles.title}>{title}</span>
        </div>
      )}

      {/* SubText row */}
      {subText && (
        <div className={styles.subTextGroup}>
          <div className={styles.subText}>
            <span className={styles.subTextValue}>{subTextContent}</span>
          </div>
        </div>
      )}
    </div>
  );
}
