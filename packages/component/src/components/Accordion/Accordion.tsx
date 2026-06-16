import React from "react";
import styles from "./Accordion.module.css";
import { BadgeItem } from "../BadgeItem";
import { Divider } from "../Divider";
import { IconArrow } from "../IconArrow";
import { ThumbnailRoundItem } from "../ThumbnailRoundItem";
// Figma SSOT: SKT-Next_UI-Draft_3.3 .Accordion (node 50943:29095)
// anatomy:
//   Info/Price  — root[ TitleGroup[ TitleTextItem, TitleGroupRightItem ], ?slot ]
//   Product     — root[ TitleGroup[ ThumbnailRoundItem, TitleTextItem, Text+TextButton ], ?Divider, ?slot ]
//   Notice      — root[ txt[ heading, ?BadgeItem ], ?txt_sub[ captions ], ?slot ]
// Variants: variants("Info"|"Product"|"Price"|"Notice") × disclosure(bool)

interface Props {
  /** Visual variant of the accordion */
  variants?: "Info" | "Product" | "Price" | "Notice";
  /** Whether the accordion panel is open (disclosed) */
  disclosure?: boolean;
  /** Header title text. Figma property name: heading */
  heading?: string;
  /** Product variant sub-text below heading */
  subText?: string;
  /** Product variant thumbnail image URL */
  thumbnailSrc?: string;
  /** Product variant right-side first text */
  rightText?: string;
  /** Product variant right-side second text */
  rightSubText?: string;
  /** Notice variant badge visibility */
  badge?: boolean;
  /** Notice variant caption row visibility */
  subTextGroup?: boolean;
  /** Notice variant second caption visibility */
  caption?: boolean;
  /** Notice variant first caption */
  caption01?: string;
  /** Notice variant second caption */
  caption02?: string;
  /** Slot content rendered when disclosure=true */
  children?: React.ReactNode;
  /** Click handler for the title row */
  onClick?: () => void;
  className?: string;
}

export function Accordion({
  variants = "Info",
  disclosure = false,
  heading = "섹션/콘텐츠 타이틀",
  subText = "서브 텍스트",
  thumbnailSrc,
  rightText = "Text",
  rightSubText = "Text",
  badge = true,
  subTextGroup = true,
  caption = true,
  caption01 = "Caption",
  caption02 = "Caption",
  children,
  onClick,
  className,
}: Props) {
  const isNotice = variants === "Notice";
  const rootClasses = [
    styles.root,
    styles[`variant${variants}`],
    disclosure ? styles.disclosed : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const handleKeyDown = onClick
    ? (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }
    : undefined;

  return (
    <div className={rootClasses} data-cx-component="Accordion" data-variant={variants}>
      {variants === "Product" ? (
        <div
          className={styles.productTitleGroup}
          onClick={onClick}
          role={onClick ? "button" : undefined}
          tabIndex={onClick ? 0 : undefined}
          onKeyDown={handleKeyDown}
          aria-expanded={disclosure}
        >
          <div className={styles.productContentsGroup}>
            <ThumbnailRoundItem
              className={styles.thumbnail}
              size="40"
              src={thumbnailSrc}
              alt=""
            />
            <div className={styles.productTextGroup}>
              <span className={styles.heading}>{heading}</span>
              <span className={styles.productSubText}>{subText}</span>
            </div>
          </div>
          <div className={styles.productRightGroup}>
            <span className={styles.productRightText}>
              {rightText} {rightSubText}
            </span>
            <IconArrow
              className={styles.arrowIcon}
              size={16}
              variant={disclosure ? "up" : "down"}
            />
          </div>
        </div>
      ) : isNotice ? (
        <div className={styles.noticeContent}>
          <div className={styles.noticeTitleRow}>
            <span className={styles.noticeHeading}>{heading}</span>
            {badge && <BadgeItem color="Brand" size="Small" text="NEW" />}
          </div>
          {subTextGroup && (
            <div className={styles.noticeCaptionRow}>
              <span className={styles.noticeCaption}>{caption01}</span>
              {caption && (
                <>
                  <span className={styles.verticalDivider} aria-hidden="true" />
                  <span className={styles.noticeCaption}>{caption02}</span>
                </>
              )}
            </div>
          )}
        </div>
      ) : (
        <div
          className={styles.titleGroup}
          onClick={onClick}
          role={onClick ? "button" : undefined}
          tabIndex={onClick ? 0 : undefined}
          onKeyDown={handleKeyDown}
          aria-expanded={disclosure}
        >
          <span className={styles.heading}>{heading}</span>
          <IconArrow
            className={styles.arrowIcon}
            size={16}
            variant={disclosure ? "up" : "down"}
          />
        </div>
      )}

      {disclosure && (variants === "Product" || variants === "Price") && (
        <Divider className={styles.divider} variant="contents" />
      )}

      {disclosure && (
        <div className={styles.slot}>
          {children}
        </div>
      )}
    </div>
  );
}
