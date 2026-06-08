import React from "react";
import styles from "./CellTitleItem.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.2--Token-Test- .CellTitleItem (node 51048:38338)
// anatomy: root[ cellText[ titleBadge[ title ] ], rightSlot?[ icon | buttonIcon | textInfo | textButton | textIcon | buttonSmall ] ]

export type CellTitleItemRightItem =
  | "None"
  | "Icon"
  | "ButtonIcon"
  | "TextButton"
  | "TextInfo"
  | "TextIcon"
  | "ButtonSmall";

interface Props {
  /** Main title text */
  title?: string;
  /** Right-side slot variant */
  rightItem?: CellTitleItemRightItem;
  /** Text shown in TextInfo / TextButton / TextIcon right slots */
  rightText?: string;
  /** Label shown in ButtonSmall right slot */
  buttonLabel?: string;
  /** Callback for ButtonSmall click */
  onButton?: () => void;
  /** Callback for TextButton click */
  onTextButton?: () => void;
  /** Callback for ButtonIcon (close) click */
  onButtonIcon?: () => void;
  className?: string;
}

export function CellTitleItem({
  title = "리스트 타이틀",
  rightItem = "None",
  rightText = "텍스트",
  buttonLabel = "버튼",
  onButton,
  onTextButton,
  onButtonIcon,
  className,
}: Props) {
  const hasRight = rightItem !== "None";

  return (
    <div
      className={[
        styles.root,
        hasRight ? styles.rootSpaceBetween : styles.rootCenter,
        className ?? "",
      ]
        .filter(Boolean)
        .join(" ")}
      data-cx-component="CellTitleItem"
      data-right-item={rightItem}
    >
      {/* Left: title text group */}
      <div className={[styles.cellText, hasRight ? styles.cellTextShrink : styles.cellTextGrow].filter(Boolean).join(" ")}>
        <div className={styles.titleBadge}>
          <div className={[styles.titleWrap, hasRight ? styles.titleWrapShrink : styles.titleWrapGrow].filter(Boolean).join(" ")}>
            <p className={[styles.title, hasRight ? styles.titleNoWrap : styles.titleWrapText].filter(Boolean).join(" ")}>
              {title}
            </p>
          </div>
        </div>
      </div>

      {/* Right: Icon (chevron dummy) */}
      {rightItem === "Icon" && (
        <div className={styles.rightIcon}>
          <svg
            className={styles.iconDummy}
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
          >
            <rect
              x="2"
              y="2"
              width="12"
              height="12"
              rx="2"
              fill="currentColor"
              opacity="0.2"
            />
          </svg>
        </div>
      )}

      {/* Right: ButtonIcon (close pill) */}
      {rightItem === "ButtonIcon" && (
        <button
          type="button"
          className={styles.buttonIcon}
          onClick={onButtonIcon}
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
              d="M2 2L8 8M8 2L2 8"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>
      )}

      {/* Right: TextInfo (read-only text) */}
      {rightItem === "TextInfo" && (
        <div className={styles.rightTextInfo}>
          <span className={styles.rightInfoText}>{rightText}</span>
        </div>
      )}

      {/* Right: TextButton (underlined text action) */}
      {rightItem === "TextButton" && (
        <button
          type="button"
          className={styles.rightTextButton}
          onClick={onTextButton}
        >
          {rightText}
        </button>
      )}

      {/* Right: TextIcon (text + chevron arrow) */}
      {rightItem === "TextIcon" && (
        <div className={styles.rightTextIcon}>
          <span className={styles.rightTextIconLabel}>{rightText}</span>
          <svg
            className={styles.iconChevron}
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
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

      {/* Right: ButtonSmall (pill button) */}
      {rightItem === "ButtonSmall" && (
        <button
          type="button"
          className={styles.buttonSmall}
          onClick={onButton}
        >
          {buttonLabel}
        </button>
      )}
    </div>
  );
}
