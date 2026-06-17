import styles from "./TitleTextItem.module.css";

// Figma SSOT: SKT-Next_UI-Draft_3.3 .TitleTextItem (node 51082:49861)
// anatomy: root[ TextGroup[ title, ?TitleTextRightItem/Text ], ?subtitle ]
// Variants: variants("16" | "18") x textRight(bool) x subText(bool)

export interface TitleTextItemProps {
  /** Figma title size variant */
  variants?: "16" | "18";
  /** Main title text */
  title?: string;
  /** Show sub-text below the title row */
  subText?: boolean;
  /** Figma subtitle text */
  subtitle?: string;
  /** Legacy alias for subtitle */
  subTextContent?: string;
  /** Show the right-side tertiary number after the title */
  textRight?: boolean;
  /** Value shown in the right-side number */
  textRightValue?: string;
  /** Legacy aliases kept for compatibility with older callers */
  optionText?: boolean | "Off";
  optionLabel?: string;
  textLeft?: boolean;
  textLeftValue?: string;
  titleSize?: "16Body" | "18Title";
  titleWeight?: "regular" | "medium" | "semibold";
  fluid?: boolean;
  className?: string;
}

export function TitleTextItem({
  variants,
  title = "섹션/콘텐츠 타이틀",
  subText = false,
  subtitle,
  subTextContent,
  textRight = false,
  textRightValue = "00",
  titleSize,
  fluid = false,
  className,
}: TitleTextItemProps) {
  const resolvedVariant = variants ?? (titleSize === "18Title" ? "18" : "16");
  const resolvedSubtitle = subtitle ?? subTextContent ?? "서브 텍스트";
  const is18 = resolvedVariant === "18";

  return (
    <div
      className={[
        styles.root,
        fluid ? styles.rootFluid : "",
        subText ? styles.rootColumn : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      data-cx-component="TitleTextItem"
      data-variant={resolvedVariant}
      data-sub-text={subText ? "true" : "false"}
      data-text-right={textRight ? "true" : "false"}
    >
      <div className={styles.textGroup}>
        <p className={[styles.title, is18 ? styles.title18 : styles.title16].join(" ")}>
          {title}
        </p>
        {textRight && (
          <span className={styles.rightText} data-cx-component="TitleTextRightItemText">
            {textRightValue}
          </span>
        )}
      </div>

      {subText && <p className={styles.subtitle}>{resolvedSubtitle}</p>}
    </div>
  );
}
