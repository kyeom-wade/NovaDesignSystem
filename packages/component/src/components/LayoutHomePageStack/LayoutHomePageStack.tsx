import React from "react";
import styles from "./LayoutHomePageStack.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.2--Token-Test- .LayoutHomePageStack (node 50965:20813)
// anatomy: root[ Task: card[ gradient, imageArea, textArea[ title, ctaButton ] ] | My: card[ listRow[ leftArea[ titleRow[ title, badge ], subtitle ], iconItem ] ] | Contents: card[ titleSection[ text[ title, subText+arrow ], listSlot, carouselSlot ] ] | ContentWithBanner: card[ banner[img], body[ titleSection[ text[ title, subText+arrow ] ], listSlot, carouselSlot ] ] ]

export type LayoutHomePageStackVariant = "Task" | "My" | "Contents" | "ContentWithBanner";

interface Props {
  /** Layout variant — controls which card structure is rendered */
  variants?: LayoutHomePageStackVariant;
  /** (Task) Card title text */
  taskTitle?: string;
  /** (Task) CTA button label */
  ctaLabel?: string;
  /** (My) List item primary title */
  myTitle?: string;
  /** (My) Show badge next to the title */
  showBadge?: boolean;
  /** (My) Badge text */
  badgeText?: string;
  /** (My) List item subtitle */
  mySubtitle?: string;
  /** (Contents / ContentWithBanner) Section title */
  contentTitle?: string;
  /** (Contents / ContentWithBanner) Navigation link label */
  contentSubText?: string;
  /** (Contents / ContentWithBanner) Slot for a list component */
  listSlot?: React.ReactNode;
  /** (Contents / ContentWithBanner) Slot for a carousel component */
  carouselSlot?: React.ReactNode;
  /** (Task) Click handler for the CTA button */
  onCta?: () => void;
}

export function LayoutHomePageStack({
  variants = "Task",
  taskTitle = "타이틀 최대 2줄 노출됩니다. 타이틀 최대 2줄 노출됩니다.",
  ctaLabel = "1분 셀프 개통하기",
  myTitle = "타이틀",
  showBadge = true,
  badgeText = "Badge",
  mySubtitle = "서브타이틀",
  contentTitle = "타이틀 최대 2줄 노출됩니다. 타이틀 최대 2줄 노출됩니다.",
  contentSubText = "바로가기 메뉴명",
  listSlot,
  carouselSlot,
  onCta,
}: Props) {
  const isTask = variants === "Task";
  const isMy = variants === "My";
  const isContents = variants === "Contents";
  const isContentWithBanner = variants === "ContentWithBanner";

  return (
    <div
      className={styles.root}
      data-cx-component="LayoutHomePageStack"
      data-variant={variants}
    >
      {/* ── Task variant ── */}
      {isTask && (
        <div className={styles.taskCard}>
          <div className={styles.taskGradient} aria-hidden="true" />
          <div className={styles.taskTextArea}>
            <p className={styles.taskTitle}>{taskTitle}</p>
            <button type="button" className={styles.ctaButton} onClick={onCta}>
              {ctaLabel}
            </button>
          </div>
        </div>
      )}

      {/* ── My variant ── */}
      {isMy && (
        <div className={styles.myCard}>
          <div className={styles.myRow}>
            <div className={styles.myLeftArea}>
              <div className={styles.myTitleRow}>
                <span className={styles.myTitle}>{myTitle}</span>
                {showBadge && (
                  <span className={styles.badge}>{badgeText}</span>
                )}
              </div>
              <span className={styles.mySubtitle}>{mySubtitle}</span>
            </div>
            {/* icon placeholder — consumers can swap in an IconItem */}
            <div className={styles.myIconSlot} aria-hidden="true" />
          </div>
        </div>
      )}

      {/* ── Contents variant ── */}
      {isContents && (
        <div className={styles.contentsCard}>
          <div className={styles.contentsTitleSection}>
            <div className={styles.contentsTitleText}>
              <p className={styles.contentTitle}>{contentTitle}</p>
              <div className={styles.contentsSubTextRow}>
                <span className={styles.contentsSubText}>{contentSubText}</span>
                <span className={styles.arrowIcon} aria-hidden="true">›</span>
              </div>
            </div>
          </div>
          {listSlot && (
            <div className={styles.listSlot}>{listSlot}</div>
          )}
          {carouselSlot && (
            <div className={styles.carouselSlot}>{carouselSlot}</div>
          )}
        </div>
      )}

      {/* ── ContentWithBanner variant ── */}
      {isContentWithBanner && (
        <div className={styles.contentWithBannerCard}>
          <div className={styles.banner} />
          <div className={styles.contentWithBannerBody}>
            <div className={styles.contentsTitleSection}>
              <div className={styles.contentsTitleText}>
                <p className={styles.contentTitle}>{contentTitle}</p>
                <div className={styles.contentsSubTextRow}>
                  <span className={styles.contentsSubText}>{contentSubText}</span>
                  <span className={styles.arrowIcon} aria-hidden="true">›</span>
                </div>
              </div>
            </div>
            {listSlot && (
              <div className={styles.listSlotBanner}>{listSlot}</div>
            )}
            {carouselSlot && (
              <div className={styles.carouselSlot}>{carouselSlot}</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
