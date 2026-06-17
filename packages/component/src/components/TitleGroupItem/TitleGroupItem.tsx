import React from "react";
import styles from "./TitleGroupItem.module.css";
import { IconArrow, type IconArrowVariant } from "../IconArrow/IconArrow";
import { TitleTextRightItem } from "../TitleTextRightItem/TitleTextRightItem";

// Figma SSOT: SKT-Next_UI-Draft_3.3 .TitleGroupItem (node 55177:69321)
// anatomy: root[ TitleText[ TextGroup[ title, ?TitleTextRightItem ], ?subtitle ], ?rightItem ]
// Variants: fontSize("16"|"18") x rightItem(bool) x subtitle(bool) x textRightItem(bool)

export interface TitleGroupItemProps {
  /** Figma property: FontSize. 16 is used for Accordion titles, 18 for Section titles. */
  fontSize?: "16" | "18";
  /** Show the right-side action slot */
  rightItem?: boolean;
  /** Show subtitle below the title row */
  subtitle?: boolean;
  /** Figma property name for subtitle text */
  subtitle2?: string;
  /** Show the inline item beside the title */
  textRightItem?: boolean;
  /** Main title text */
  title?: string;
  /** Badge label beside the 18px title */
  badgeLabel?: string;
  /** Text button label for the 18px right item */
  rightLabel?: string;
  /** Arrow direction for the 16px right item */
  rightArrowVariant?: IconArrowVariant;
  /** Optional custom right item content */
  rightContent?: React.ReactNode;
  /** Click handler for the full title group */
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLDivElement>;
  role?: React.AriaRole;
  tabIndex?: number;
  "aria-expanded"?: boolean;
  className?: string;
}

export function TitleGroupItem({
  fontSize = "16",
  rightItem = true,
  subtitle = true,
  subtitle2 = "Subtitle",
  textRightItem = true,
  title = "Title",
  badgeLabel = "Label",
  rightLabel = "Label",
  rightArrowVariant = "up",
  rightContent,
  onClick,
  onKeyDown,
  role,
  tabIndex,
  className,
  "aria-expanded": ariaExpanded,
}: TitleGroupItemProps) {
  const isFontSize18 = fontSize === "18";
  const rootClass = [
    styles.root,
    isFontSize18 ? styles.fontSize18 : styles.fontSize16,
    onClick ? styles.interactive : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={rootClass}
      data-cx-component="TitleGroupItem"
      data-font-size={fontSize}
      onClick={onClick}
      onKeyDown={onKeyDown}
      role={role}
      tabIndex={tabIndex}
      aria-expanded={ariaExpanded}
    >
      <div className={styles.titleText} data-cx-part="TitleText">
        <div className={styles.textGroup} data-cx-part="TextGroup">
          <p className={styles.title}>{title}</p>
          {textRightItem && (
            <TitleTextRightItem
              className={styles.textRightItem}
              variants={isFontSize18 ? "Badge" : "Icon"}
              badgeLabel={badgeLabel}
            />
          )}
        </div>
        {subtitle && <p className={styles.subtitle}>{subtitle2}</p>}
      </div>

      {rightItem && (
        <div className={styles.rightItem} data-cx-part="RightItem">
          {rightContent ??
            (isFontSize18 ? (
              <button className={styles.textButton} type="button">
                {rightLabel}
              </button>
            ) : (
              <IconArrow
                className={styles.arrowIcon}
                size={16}
                variant={rightArrowVariant}
              />
            ))}
        </div>
      )}
    </div>
  );
}
