import React from "react";
import styles from "./TitleSectionItem.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.2--Token-Test- .TitleSectionItem (node 50985:80329)
// anatomy: root[ titleTextArea[ ?optionTextRow[ optionLabel ], textGroup[ ?leftBadge, titleItem[ title ], ?rightBadge ], ?subTextRow[ subText ] ], ?rightItem[ iconItem(16×16) ] ]
// Variants: textSize("16"|"18"|"20") × titleOption(bool) × rightItem(bool) — 6 display variants

interface Props {
  /** Main title text */
  title?: string;
  /** Font size variant matching Figma textSize property */
  textSize?: "16" | "18" | "20";
  /**
   * titleOption=true adds an optionText row above the title
   * and a subText row below, plus left brand badge and right tertiary count.
   */
  titleOption?: boolean;
  /** Content of the option label row (shown when titleOption=true) */
  optionLabel?: string;
  /** Numbered brand badge shown to the left of the title (e.g. "00") */
  leftBadgeValue?: string;
  /** Tertiary count shown to the right of the title (e.g. "2") */
  rightBadgeValue?: string;
  /** Sub-text shown below the title row (shown when titleOption=true) */
  subTextContent?: string;
  /** Show the right-side icon slot */
  rightItem?: boolean;
  /** Optional custom icon to render inside the right item slot */
  rightIcon?: React.ReactNode;
  /** Click handler for the right item */
  onRightClick?: React.MouseEventHandler<HTMLDivElement>;
  className?: string;
}

function IconDummy() {
  return (
    <svg
      className={styles.iconSvg}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="12" height="12" rx="2" fill="currentColor" />
    </svg>
  );
}

export function TitleSectionItem({
  title = "섹션/콘텐츠 타이틀",
  textSize = "16",
  titleOption = false,
  optionLabel = "옵션 텍스트",
  leftBadgeValue = "00",
  rightBadgeValue = "2",
  subTextContent = "서브 텍스트",
  rightItem = true,
  rightIcon,
  onRightClick,
  className,
}: Props) {
  const rootClass = [
    styles.root,
    titleOption ? styles.rootAlignStart : styles.rootAlignCenter,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const titleTextAreaClass = [
    styles.titleTextArea,
    titleOption ? styles.titleTextAreaColumn : "",
  ]
    .filter(Boolean)
    .join(" ");

  const titleClass = [
    styles.title,
    textSize === "16" ? styles.title16 : "",
    textSize === "18" ? styles.title18 : "",
    textSize === "20" ? styles.title20 : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={rootClass} data-cx-component="TitleSectionItem">
      {/* Left: title text area */}
      <div className={titleTextAreaClass}>
        {/* Option text row (only when titleOption=true) */}
        {titleOption && (
          <div className={styles.optionTextRow}>
            <span className={styles.optionLabel}>{optionLabel}</span>
          </div>
        )}

        {/* Title row */}
        {titleOption ? (
          <div className={styles.textGroup}>
            <span className={styles.leftBadge}>{leftBadgeValue}</span>
            <div className={styles.textItem}>
              <span className={titleClass}>{title}</span>
            </div>
            <div className={styles.rightBadge}>
              <span className={styles.rightBadgeValue}>{rightBadgeValue}</span>
            </div>
          </div>
        ) : (
          <div className={styles.textItem}>
            <span className={titleClass}>{title}</span>
          </div>
        )}

        {/* Sub-text row (only when titleOption=true) */}
        {titleOption && (
          <div className={styles.subTextRow}>
            <span className={styles.subText}>{subTextContent}</span>
          </div>
        )}
      </div>

      {/* Right: icon item */}
      {rightItem && (
        <div
          className={styles.rightItemWrap}
          onClick={onRightClick}
          role={onRightClick ? "button" : undefined}
          tabIndex={onRightClick ? 0 : undefined}
        >
          <span className={styles.iconItem}>
            {rightIcon ?? <IconDummy />}
          </span>
        </div>
      )}
    </div>
  );
}
