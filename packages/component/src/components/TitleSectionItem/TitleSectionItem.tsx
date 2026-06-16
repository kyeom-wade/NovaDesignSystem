import React from "react";
import styles from "./TitleSectionItem.module.css";
import { TitleTextItem } from "../TitleTextItem/TitleTextItem";
import { TitleGroupRightItem } from "../TitleGroupRightItem/TitleGroupRightItem";
// Figma SSOT: SKT-Next_UI-Draft_3.3 .TitleSectionItem (node 50985:80329)
// anatomy: root[ TitleTextItem, ?TitleGroupRightItem ]
// Variants: titleOption(bool) × rightItem(bool)

interface Props {
  /** Main title text */
  title?: string;
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

export function TitleSectionItem({
  title = "섹션/콘텐츠 타이틀",
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

  return (
    <div className={rootClass} data-cx-component="TitleSectionItem">
      <TitleTextItem
        className={styles.titleTextItem}
        fluid
        optionText={titleOption}
        optionLabel={optionLabel}
        subText={titleOption}
        subTextContent={subTextContent}
        textLeft={titleOption}
        textLeftValue={leftBadgeValue}
        textRight={titleOption}
        textRightValue={rightBadgeValue}
        title={title}
        titleSize="18Title"
        titleWeight="semibold"
      />

      {rightItem &&
        (rightIcon ? (
          <span
            className={styles.customRightIcon}
            onClick={onRightClick}
            role={onRightClick ? "button" : undefined}
            tabIndex={onRightClick ? 0 : undefined}
          >
            {rightIcon}
          </span>
        ) : (
          <TitleGroupRightItem
            className={styles.rightItem}
            variant="Icon"
            onClick={onRightClick}
          />
        ))}
    </div>
  );
}
