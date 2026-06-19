import React from "react";
import { IconArrow } from "../IconArrow";
import { IconClose } from "../IconClose";
import { SwitchItem } from "../SwitchItem";
import styles from "./CellRightItem.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.3 .CellRightItem (node 50943:30682)
// anatomy: root[ icon | buttonIcon | text | textButton | textIcon | buttonSmall | levelBadge | switch ]
// Properties: variants(Icon | TextButton | TextIcon | ButtonSmall | LevelBadge | ButtonIcon | Switch | Text)

export type CellRightItemVariant =
  | "Icon"
  | "Text"
  /** @deprecated Use Text instead. */
  | "TextInfo"
  | "TextButton"
  | "TextIcon"
  | "ButtonSmall"
  | "LevelBadge"
  | "ButtonIcon"
  | "Switch";

interface Props {
  /** Figma property: which right-cell item variant to render */
  variants?: CellRightItemVariant;
  /** Compatibility content override for text-like variants */
  text?: string;
  /** Compatibility label override for ButtonSmall */
  buttonLabel?: string;
  onTextButtonClick?: () => void;
  onButtonIconClick?: () => void;
  className?: string;
}

export function CellRightItem({
  variants = "Icon",
  text,
  buttonLabel = "Label",
  onTextButtonClick,
  onButtonIconClick,
  className,
}: Props) {
  const resolvedVariant = variants === "TextInfo" ? "Text" : variants;
  const isIcon = resolvedVariant === "Icon";
  const isText = resolvedVariant === "Text";
  const isTextButton = resolvedVariant === "TextButton";
  const isTextIcon = resolvedVariant === "TextIcon";
  const isButtonSmall = resolvedVariant === "ButtonSmall";
  const isLevelBadge = resolvedVariant === "LevelBadge";
  const isButtonIcon = resolvedVariant === "ButtonIcon";
  const isSwitch = resolvedVariant === "Switch";
  const resolvedText = text ?? (isText ? "텍스트" : "Label");

  return (
    <div
      className={[
        styles.root,
        isLevelBadge ? styles.rootLevelBadge : "",
        isButtonSmall ? styles.rootButtonSmall : "",
        isTextButton ? styles.rootTextButton : "",
        isSwitch ? styles.rootSwitch : "",
        className ?? "",
      ]
        .filter(Boolean)
        .join(" ")}
      data-cx-component="CellRightItem"
      data-variants={resolvedVariant}
    >
      {isIcon && (
        <div className={styles.iconWrap} aria-hidden="true">
          <IconArrow size={16} variant="right" color="currentColor" />
        </div>
      )}

      {isButtonIcon && (
        <button
          type="button"
          className={styles.buttonIcon}
          onClick={onButtonIconClick}
          aria-label="닫기"
        >
          <IconClose size={16} color="currentColor" />
        </button>
      )}

      {isText && (
        <div className={styles.textWrap}>
          <span className={styles.text}>{resolvedText}</span>
        </div>
      )}

      {isTextButton && (
        <button
          type="button"
          className={styles.textButton}
          onClick={onTextButtonClick}
        >
          {resolvedText}
        </button>
      )}

      {isTextIcon && (
        <div className={styles.textIconWrap}>
          <span className={styles.textIconLabel}>{resolvedText}</span>
          <span className={styles.textIconChevron} aria-hidden="true">
            <IconArrow size={12} variant="right" color="currentColor" />
          </span>
        </div>
      )}

      {isButtonSmall && (
        <button
          type="button"
          className={styles.buttonSmall}
          onClick={onTextButtonClick}
        >
          {buttonLabel}
        </button>
      )}

      {isLevelBadge && (
        <>
          <span className={[styles.badge, styles.badgePurple].join(" ")} aria-hidden="true">V</span>
          <span className={[styles.badge, styles.badgeGold].join(" ")} aria-hidden="true">G</span>
          <span className={[styles.badge, styles.badgeSilver].join(" ")} aria-hidden="true">S</span>
        </>
      )}

      {isSwitch && <SwitchItem selection state="Default" ariaLabel="선택됨" />}
    </div>
  );
}
