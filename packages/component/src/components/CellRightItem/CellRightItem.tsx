import React from "react";
import styles from "./CellRightItem.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.2--Token-Test- .CellRightItem (node 50943:30682)
// anatomy: root[ icon? | textInfo?[text] | textButton?[label] | textIcon?[label, chevron] | buttonSmall?[label] | levelBadge?[badge×3] | buttonIcon?[closeIcon] ]

export type CellRightItemVariant =
  | "Icon"
  | "TextInfo"
  | "TextButton"
  | "TextIcon"
  | "ButtonSmall"
  | "LevelBadge"
  | "ButtonIcon";

interface Props {
  /** Which variant of the right-cell item to render */
  variants?: CellRightItemVariant;
  /** Text shown in TextInfo, TextButton, and TextIcon variants */
  text?: string;
  /** Label for ButtonSmall variant */
  buttonLabel?: string;
  /** Click handler for TextButton variant */
  onTextButtonClick?: () => void;
  /** Click handler for ButtonIcon (close) variant */
  onButtonIconClick?: () => void;
  className?: string;
}

export function CellRightItem({
  variants = "Icon",
  text = "텍스트",
  buttonLabel = "버튼",
  onTextButtonClick,
  onButtonIconClick,
  className,
}: Props) {
  const isIcon = variants === "Icon";
  const isTextInfo = variants === "TextInfo";
  const isTextButton = variants === "TextButton";
  const isTextIcon = variants === "TextIcon";
  const isButtonSmall = variants === "ButtonSmall";
  const isLevelBadge = variants === "LevelBadge";
  const isButtonIcon = variants === "ButtonIcon";

  return (
    <div
      className={[
        styles.root,
        isLevelBadge ? styles.rootLevelBadge : "",
        isButtonSmall ? styles.rootButtonSmall : "",
        isTextButton ? styles.rootTextButton : "",
        className ?? "",
      ]
        .filter(Boolean)
        .join(" ")}
      data-cx-component="CellRightItem"
      data-variants={variants}
    >
      {/* Icon variant — single chevron/dummy icon */}
      {isIcon && (
        <div className={styles.iconWrap} aria-hidden="true">
          <svg
            className={styles.iconSvg}
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M6 4L10 8L6 12"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      )}

      {/* TextInfo variant — secondary right-aligned text */}
      {isTextInfo && (
        <div className={styles.textInfoWrap}>
          <span className={styles.textInfo}>{text}</span>
        </div>
      )}

      {/* TextButton variant — underlined text button (Text medium) */}
      {isTextButton && (
        <button
          type="button"
          className={styles.textButton}
          onClick={onTextButtonClick}
        >
          {text}
        </button>
      )}

      {/* TextIcon variant — text + chevron */}
      {isTextIcon && (
        <div className={styles.textIconWrap}>
          <span className={styles.textIconLabel}>{text}</span>
          <span className={styles.textIconChevron} aria-hidden="true">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className={styles.iconSvg}
            >
              <path
                d="M6 4L10 8L6 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
      )}

      {/* ButtonSmall variant — pill-shaped secondary button */}
      {isButtonSmall && (
        <button
          type="button"
          className={styles.buttonSmall}
          onClick={onTextButtonClick}
        >
          {buttonLabel}
        </button>
      )}

      {/* LevelBadge variant — three badge dots */}
      {isLevelBadge && (
        <>
          <span className={[styles.badge, styles.badgePurple].join(" ")} aria-hidden="true" />
          <span className={[styles.badge, styles.badgeYellow].join(" ")} aria-hidden="true" />
          <span className={[styles.badge, styles.badgeGray].join(" ")} aria-hidden="true" />
        </>
      )}

      {/* ButtonIcon variant — small circular close button */}
      {isButtonIcon && (
        <button
          type="button"
          className={styles.buttonIcon}
          onClick={onButtonIconClick}
          aria-label="닫기"
        >
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M1.5 1.5L8.5 8.5M8.5 1.5L1.5 8.5"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
          </svg>
        </button>
      )}
    </div>
  );
}
