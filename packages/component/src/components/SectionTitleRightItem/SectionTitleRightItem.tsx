import React from "react";
import { ButtonItem } from "../ButtonItem";
import { ButtonTextItem } from "../ButtonTextItem";
import { IconDummy } from "../IconDummy";
import styles from "./SectionTitleRightItem.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.3 .SectionTitleRightItem (node 55521:151214)
// anatomy:
//   Icon       — root[ iconItem(16×16) ]
//   TextButton — root[ ButtonTextItem(Text/XLarge) ]
//   TextIconSecondary — root[ ButtonTextItem(Text+Icon/XLarge) ]
//   Button     — root[ buttonItem(secondary/small, no-icon) ]
//   ButtonIcon — root[ closeButton(24, inline X icon) ]

interface Props {
  /**
   * Which layout / content variant to render.
   * Matches the Figma Variants property exactly.
   */
  variant?:
    | "Icon"
    | "TextButton"
    | "TextIconSecondary"
    | "Button"
    | "ButtonIcon";
  /** Primary text shown in TextButton / TextIconSecondary variants */
  text?: string;
  /** Label for the secondary small button variant */
  buttonLabel?: string;
  /** Click handler passed to the interactive button element */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

export function SectionTitleRightItem({
  variant = "Icon",
  text = "Label",
  buttonLabel = "Label",
  onClick,
  className,
}: Props) {
  const rootClass = [styles.root, styles[`variant-${variant}`], className]
    .filter(Boolean)
    .join(" ");

  if (variant === "Icon") {
    return (
      <div
        className={rootClass}
        data-cx-component="SectionTitleRightItem"
        data-variant="Icon"
      >
        <span className={styles.iconItem}>
          <IconDummy className={styles.iconDummy} size={16} />
        </span>
      </div>
    );
  }

  if (variant === "TextButton") {
    return (
      <div className={rootClass} data-cx-component="SectionTitleRightItem" data-variant="TextButton">
        <ButtonTextItem
          className={styles.textButton}
          variants="Text"
          size="XLarge"
          label={text}
          onClick={onClick}
        />
      </div>
    );
  }

  if (variant === "TextIconSecondary") {
    return (
      <div className={rootClass} data-cx-component="SectionTitleRightItem" data-variant="TextIconSecondary">
        <ButtonTextItem
          className={styles.textIconButton}
          variants="Text+Icon"
          size="XLarge"
          label={text}
          onClick={onClick}
        />
      </div>
    );
  }

  if (variant === "ButtonIcon") {
    return (
      <div className={rootClass} data-cx-component="SectionTitleRightItem" data-variant="ButtonIcon">
        <button
          type="button"
          className={styles.closeButton}
          aria-label="닫기"
          onClick={onClick}
        >
          <svg
            className={styles.closeIcon}
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <line x1="2" y1="2" x2="10" y2="10" strokeLinecap="round" strokeWidth="1.5" stroke="currentColor" />
            <line x1="10" y1="2" x2="2" y2="10" strokeLinecap="round" strokeWidth="1.5" stroke="currentColor" />
          </svg>
        </button>
      </div>
    );
  }

  return (
    <div className={rootClass} data-cx-component="SectionTitleRightItem" data-variant="Button">
      <ButtonItem
        className={styles.button}
        variant="Secondary"
        size="Small"
        label={buttonLabel}
        icon={false}
        onClick={onClick}
      />
    </div>
  );
}
