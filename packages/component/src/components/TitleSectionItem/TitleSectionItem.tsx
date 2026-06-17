import React from "react";
import {
  TitleGroupItem,
  type TitleGroupItemProps,
} from "../TitleGroupItem/TitleGroupItem";

// Deprecated compatibility alias.
// Figma SSOT has renamed TitleSectionItem to TitleGroupItem (node 55177:69321).

export interface TitleSectionItemProps
  extends Omit<
    TitleGroupItemProps,
    "fontSize" | "subtitle" | "subtitle2" | "textRightItem" | "badgeLabel"
  > {
  /** Legacy alias. Maps to subtitle + textRightItem visibility. */
  titleOption?: boolean;
  /** Legacy alias for subtitle2. */
  subTextContent?: string;
  /** Legacy alias for the inline badge label. */
  rightBadgeValue?: string;
  /** Legacy aliases retained for old callers. */
  optionLabel?: string;
  leftBadgeValue?: string;
  /** Optional custom icon from the previous implementation. */
  rightIcon?: React.ReactNode;
  /** Legacy right item click handler. */
  onRightClick?: React.MouseEventHandler<HTMLDivElement>;
}

export function TitleSectionItem({
  titleOption = false,
  subTextContent = "서브 텍스트",
  rightBadgeValue = "Label",
  optionLabel: _optionLabel,
  leftBadgeValue: _leftBadgeValue,
  rightIcon,
  onRightClick,
  rightContent,
  ...props
}: TitleSectionItemProps) {
  return (
    <TitleGroupItem
      {...props}
      badgeLabel={rightBadgeValue}
      fontSize="18"
      rightContent={rightIcon ?? rightContent}
      subtitle={titleOption}
      subtitle2={subTextContent}
      textRightItem={titleOption}
      onClick={props.onClick ?? onRightClick}
    />
  );
}
