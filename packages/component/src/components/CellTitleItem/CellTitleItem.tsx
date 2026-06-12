import React from "react";
import { CellRightItem, type CellRightItemVariant } from "../CellRightItem/CellRightItem";
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
  const rightItemVariantMap: Partial<Record<CellTitleItemRightItem, CellRightItemVariant>> = {
    Icon: "Icon",
    ButtonIcon: "ButtonIcon",
    TextButton: "TextButton",
    TextInfo: "TextInfo",
    TextIcon: "TextIcon",
    ButtonSmall: "ButtonSmall",
  };
  const rightItemVariant = rightItemVariantMap[rightItem];

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

      {rightItemVariant && (
        <CellRightItem
          variants={rightItemVariant}
          text={rightText}
          buttonLabel={buttonLabel}
          onTextButtonClick={rightItem === "ButtonSmall" ? onButton : onTextButton}
          onButtonIconClick={onButtonIcon}
        />
      )}
    </div>
  );
}
