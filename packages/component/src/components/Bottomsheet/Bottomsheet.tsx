import React from "react";
import { BottomGroup } from "../BottomGroup/BottomGroup";
import { BottomSheetHandleItem } from "../BottomSheetHandleItem/BottomSheetHandleItem";
import { IconClose } from "../IconClose/IconClose";
import { TabScroll } from "../TabScroll/TabScroll";
import styles from "./Bottomsheet.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.3 .Bottomsheet (node 51333:109243)
// anatomy: root[ handle?(HandleItem) | titleSection?(titleRow[title, subText], closeBtn) , tabScroll?(tabs[TabScrollItem*]), slot[children], actionGroup?(aiArea) ]

interface TabItem {
  label: string;
  selected?: boolean;
}

interface Props {
  /** Header variant: "ButtonClose" shows title + X close button; "Handle" shows the drag handle bar */
  variant?: "ButtonClose" | "Handle";
  /** Figma property alias. false maps to Handle, true maps to ButtonClose. */
  buttonClose?: boolean;
  /** Main section/content title shown in ButtonClose variant */
  title?: string;
  /** Figma heading text alias */
  heading?: string;
  /** Whether to render the heading block */
  showTitle?: boolean;
  /** Sub text shown below the title in ButtonClose variant */
  subText?: string;
  /** Figma description text alias */
  description?: string;
  /** Whether to show the sub text line */
  showSubText?: boolean;
  /** Figma description visibility alias */
  description2?: boolean;
  /** Whether to render the tab strip */
  showTab?: boolean;
  /** Figma tab visibility alias */
  tab?: boolean;
  /** Tab items to render in the strip */
  tabs?: TabItem[];
  /** Currently selected tab index */
  activeTab?: number;
  /** Callback when a tab is clicked */
  onTabChange?: (index: number) => void;
  /** Callback when the close (X) button is clicked */
  onClose?: () => void;
  /** Whether to show the bottom action group (AI area with CTA buttons) */
  showActionGroup?: boolean;
  /** Figma action button visibility alias */
  actionButton?: boolean;
  /** Primary CTA label in the action group */
  primaryLabel?: string;
  /** Secondary CTA label in the action group (shown alongside primary) */
  secondaryLabel?: string;
  /** Click handler for the primary action button */
  onPrimary?: () => void;
  /** Click handler for the secondary action button */
  onSecondary?: () => void;
  /** Upper table left label in the action group */
  upperItemLabel?: string;
  /** Upper table right value in the action group */
  upperItemValue?: string;
  /** Slot content rendered in the main body area */
  children?: React.ReactNode;
  className?: string;
}

const DEFAULT_TABS: TabItem[] = [
  { label: "Label", selected: true },
  { label: "Label" },
  { label: "Label" },
  { label: "Label" },
];

export function Bottomsheet({
  variant = "ButtonClose",
  buttonClose,
  title,
  heading,
  showTitle = true,
  subText,
  description,
  showSubText = true,
  description2,
  showTab = true,
  tab,
  tabs = DEFAULT_TABS,
  activeTab = 0,
  onTabChange,
  onClose,
  showActionGroup = true,
  actionButton,
  primaryLabel = "구독하기",
  onPrimary,
  upperItemLabel = "타이틀",
  upperItemValue = "내용 들어가는 부분",
  children,
  className,
}: Props) {
  const resolvedVariant = buttonClose === undefined ? variant : buttonClose ? "ButtonClose" : "Handle";
  const resolvedShowActionGroup = actionButton ?? showActionGroup;
  const resolvedShowTab = tab ?? showTab;
  const resolvedShowSubText = description2 ?? showSubText;
  const resolvedHeading = heading ?? title ?? "Heading";
  const resolvedDescription = description ?? subText ?? "Description";
  const tabLabels = tabs.map((item) => item.label);

  return (
    <div
      className={[
        styles.root,
        resolvedVariant === "ButtonClose" ? styles.rootButtonClose : styles.rootHandle,
        !resolvedShowActionGroup ? styles.rootWithoutAction : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      data-cx-component="Bottomsheet"
      data-variant={resolvedVariant}
      data-action-button={resolvedShowActionGroup ? "true" : "false"}
      data-title={showTitle ? "true" : "false"}
    >
      {resolvedVariant === "Handle" && <BottomSheetHandleItem className={styles.handleItem} />}

      {resolvedVariant === "ButtonClose" && (
        <div className={[styles.header, showTitle ? "" : styles.headerCloseOnly].filter(Boolean).join(" ")}>
          {showTitle && (
            <div className={styles.titleTextGroup}>
              <p className={styles.heading}>{resolvedHeading}</p>
              {resolvedShowSubText && <p className={styles.description}>{resolvedDescription}</p>}
            </div>
          )}
          <button
            type="button"
            className={styles.closeButton}
            onClick={onClose}
            aria-label="닫기"
          >
            <IconClose size={24} />
          </button>
        </div>
      )}

      {resolvedVariant === "Handle" && showTitle && (
        <div className={styles.header}>
          <div className={styles.titleTextGroup}>
            <p className={styles.heading}>{resolvedHeading}</p>
            {resolvedShowSubText && <p className={styles.description}>{resolvedDescription}</p>}
          </div>
        </div>
      )}

      {resolvedShowTab && (
        <TabScroll
          className={styles.tabScroll}
          labels={tabLabels}
          selectedIndex={activeTab}
          onTabChange={onTabChange}
        />
      )}

      <div className={styles.slot}>{children}</div>

      {resolvedShowActionGroup && (
        <BottomGroup
          className={styles.bottomGroup}
          variants="Normal"
          upperItem
          upperItemVariants="Table"
          upperItemLabel={upperItemLabel}
          upperItemValue={upperItemValue}
          areaItemVariants="1 Botton"
          primaryLabel={primaryLabel}
          onPrimary={onPrimary}
        />
      )}
    </div>
  );
}
