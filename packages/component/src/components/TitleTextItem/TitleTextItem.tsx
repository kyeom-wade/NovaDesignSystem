import React from "react";
import styles from "./TitleTextItem.module.css";
import { TextItem } from "../TextItem/TextItem";
import type { TextItemSize, TextItemWeight } from "../TextItem/TextItem";
import { TitleTextLeftItem } from "../TitleTextLeftItem/TitleTextLeftItem";
// Figma SSOT: SKT-Next_UI-Draft_3.3 .TitleTextItem (node 51082:49861)
// anatomy: root[ ?optionText[ TextItem ], textGroup[ ?textLeft, TextItem[ title ], ?TitleTextLeftItem ], ?subText[ TextItem ] ]
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
  /** Typography size for the main title TextItem */
  titleSize?: TextItemSize;
  /** Typography weight for the main title TextItem */
  titleWeight?: TextItemWeight;
  /** Let the component fill its parent instead of using the fixed Figma component width */
  fluid?: boolean;
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
  titleSize = "16Body",
  titleWeight = "semibold",
  fluid = false,
  className,
}: Props) {
  const showTextGroup = textLeft || textRight;

  return (
    <div
      className={[
        styles.root,
        fluid ? styles.rootFluid : "",
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
          <TextItem
            className={styles.optionTextItem}
            text={optionLabel}
            size="13Body"
            weight="medium"
          />
        </div>
      )}

      {/* Title row — with textLeft/textRight badges, or plain */}
      {showTextGroup ? (
        <div className={styles.textGroup}>
          {textLeft && (
            <TextItem
              className={styles.textLeftBadge}
              text={textLeftValue}
              size="16Body"
              weight="semibold"
            />
          )}
          <TextItem
            className={styles.textItem}
            text={title}
            size={titleSize}
            weight={titleWeight}
          />
          {textRight && (
            <TitleTextLeftItem
              className={styles.textRightBadge}
              variant="Text"
              textValue={textRightValue}
            />
          )}
        </div>
      ) : (
        <TextItem
          className={styles.textItem}
          text={title}
          size={titleSize}
          weight={titleWeight}
        />
      )}

      {/* SubText row */}
      {subText && (
        <div className={styles.subTextGroup}>
          <TextItem
            className={styles.subTextItem}
            text={subTextContent}
            size="14Body"
            weight="medium"
          />
        </div>
      )}
    </div>
  );
}
