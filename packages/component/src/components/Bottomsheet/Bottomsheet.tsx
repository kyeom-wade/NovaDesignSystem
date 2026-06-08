import React from "react";
import styles from "./Bottomsheet.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.2--Token-Test- .Bottomsheet (node 51333:109243)
// anatomy: root[ handle?(HandleItem) | titleSection?(titleRow[title, subText], closeBtn) , tabScroll?(tabs[TabScrollItem*]), slot[children], actionGroup?(aiArea) ]

interface TabItem {
  label: string;
  selected?: boolean;
}

interface Props {
  /** Header variant: "ButtonClose" shows title + X close button; "Handle" shows the drag handle bar */
  variant?: "ButtonClose" | "Handle";
  /** Main section/content title shown in ButtonClose variant */
  title?: string;
  /** Sub text shown below the title in ButtonClose variant */
  subText?: string;
  /** Whether to show the sub text line */
  showSubText?: boolean;
  /** Whether to render the tab strip */
  showTab?: boolean;
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
  /** Primary CTA label in the action group */
  primaryLabel?: string;
  /** Secondary CTA label in the action group (shown alongside primary) */
  secondaryLabel?: string;
  /** Click handler for the primary action button */
  onPrimary?: () => void;
  /** Click handler for the secondary action button */
  onSecondary?: () => void;
  /** AI hint text displayed above the action group */
  aiHintText?: string;
  /** Slot content rendered in the main body area */
  children?: React.ReactNode;
}

const DEFAULT_TABS: TabItem[] = [
  { label: "탭명", selected: true },
  { label: "탭명" },
  { label: "탭명" },
  { label: "탭명" },
  { label: "탭명" },
  { label: "탭명" },
];

export function Bottomsheet({
  variant = "ButtonClose",
  title = "섹션/콘텐츠 타이틀",
  subText = "서브 텍스트",
  showSubText = true,
  showTab = true,
  tabs = DEFAULT_TABS,
  activeTab = 0,
  onTabChange,
  onClose,
  showActionGroup = true,
  primaryLabel = "구독하기",
  secondaryLabel = "선물하기",
  onPrimary,
  onSecondary,
  aiHintText = "텍스트",
  children,
}: Props) {
  return (
    <div
      className={styles.root}
      data-cx-component="Bottomsheet"
      data-variant={variant}
    >
      {/* ── Header ── */}
      {variant === "Handle" && (
        <div className={styles.handleBar} aria-hidden="true">
          <div className={styles.handle} />
        </div>
      )}

      {variant === "ButtonClose" && (
        <div className={styles.titleSection}>
          <div className={styles.titleTextItem}>
            <div className={styles.textItem}>
              <p className={styles.title}>{title}</p>
            </div>
            {showSubText && (
              <div className={styles.subTextGroup}>
                <p className={styles.subText}>{subText}</p>
              </div>
            )}
          </div>
          <button
            type="button"
            className={styles.closeBtn}
            onClick={onClose}
            aria-label="닫기"
          >
            {/* Close X icon — inline SVG matching Figma IconItem/Nomal/Close */}
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M3 3L13 13M13 3L3 13"
                stroke="var(--skt-color-icon-neutral-primary, #060c1f)"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      )}

      {/* ── Tab Strip ── */}
      {showTab && (
        <div className={styles.tabScroll} role="tablist">
          <div className={styles.tabTrack}>
            {tabs.map((tab, i) => {
              const isSelected = i === activeTab;
              return (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  className={[
                    styles.tabItem,
                    isSelected ? styles.tabItemSelected : styles.tabItemDefault,
                  ].join(" ")}
                  onClick={() => onTabChange?.(i)}
                >
                  <span className={styles.tabLabel}>{tab.label}</span>
                  {isSelected && <div className={styles.tabUnderline} />}
                </button>
              );
            })}
          </div>
          <div className={styles.tabBorder} />
        </div>
      )}

      {/* ── Slot / Body ── */}
      <div className={styles.slot}>{children}</div>

      {/* ── Action Group (AI area) ── */}
      {showActionGroup && (
        <div className={styles.actionGroup}>
          {/* AI hint row */}
          <div className={styles.aiHintRow}>
            <span className={styles.aiIconItem} aria-hidden="true">
              {/* AI sparkle icon — inline SVG */}
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 1L9.5 6.5L15 8L9.5 9.5L8 15L6.5 9.5L1 8L6.5 6.5L8 1Z"
                  fill="url(#aiGrad)"
                />
                <defs>
                  <linearGradient id="aiGrad" x1="1" y1="8" x2="15" y2="8" gradientUnits="userSpaceOnUse">
                    <stop stopColor="var(--skt-color-palette-blue-800, #3617ce)" />
                    <stop offset="1" stopColor="var(--skt-color-palette-blue-600, #5f6afd)" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <span className={styles.aiHintText}>{aiHintText}</span>
          </div>

          {/* CTA row: icon pill + split button */}
          <div className={styles.ctaRow}>
            {/* T icon pill */}
            <div className={styles.iconPill}>
              <div className={styles.iconPillBg} />
              <span className={styles.iconPillImg} aria-label="T AI 아이콘">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <text
                    x="1"
                    y="14"
                    fontFamily="'Pretendard Variable', sans-serif"
                    fontWeight="700"
                    fontSize="16"
                    fill="var(--skt-color-fill-brand-primary, #3617ce)"
                  >
                    T
                  </text>
                </svg>
              </span>
            </div>

            {/* Split CTA button */}
            <div className={styles.splitBtn}>
              <button
                type="button"
                className={styles.splitBtnLeft}
                onClick={onSecondary}
              >
                {secondaryLabel}
              </button>
              <div className={styles.splitBtnDivider} aria-hidden="true" />
              <button
                type="button"
                className={styles.splitBtnRight}
                onClick={onPrimary}
              >
                {primaryLabel}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
