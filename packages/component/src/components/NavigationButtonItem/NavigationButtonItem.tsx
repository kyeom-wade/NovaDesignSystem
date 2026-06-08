import React from "react";
import styles from "./NavigationButtonItem.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.2--Token-Test- .NavigationButtonItem (node 51087:46531)
// anatomy: root[ (AI variant) aiInput[ aiIcon, textArea[ placeholderText ] ], voiceBtn[ voiceIcon ] | (Menu variant) tabItems[ NavigationTabItem... ] ]
// variants: AI × disclosureAi(false=collapsed pill, true=expanded bar) | Menu × disclosureMenu(Default=icon-only, On=single-tab, Off=two-tab)

/** Inline SVG icons — no runtime asset dependency */

const IconTAgent = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M12 4C9.5 4 7.5 5.8 7.5 8c0 1.2.55 2.28 1.42 3H7a1 1 0 0 0 0 2h4v1H9a1 1 0 0 0 0 2h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 0-2h-2v-1h4a1 1 0 0 0 0-2h-1.92A4 4 0 0 0 16 8c0-2.2-1.8-4-4-4Z" fill="var(--skt-color-icon-brand-primary, #3617ce)" />
  </svg>
);

const IconAI = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M8 1.5c-1.1 0-2 .9-2 2 0 .55.22 1.05.58 1.42L5 5a.75.75 0 0 0 0 1.5h2.25V7H6a.75.75 0 0 0 0 1.5h1.25V10a.75.75 0 0 0 1.5 0V8.5H10A.75.75 0 0 0 10 7H8.75v-.5H11A.75.75 0 0 0 11 5l-1.58-.08A2.5 2.5 0 0 0 8 1.5Z" fill="var(--skt-color-text-brand-primary, #3617ce)" />
  </svg>
);

const IconVoice = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="9" y="3" width="6" height="10" rx="3" fill="var(--skt-color-icon-brand-primary, #3617ce)" />
    <path d="M5 11a7 7 0 0 0 14 0" stroke="var(--skt-color-icon-brand-primary, #3617ce)" strokeWidth="1.6" strokeLinecap="round" />
    <line x1="12" y1="18" x2="12" y2="21" stroke="var(--skt-color-icon-brand-primary, #3617ce)" strokeWidth="1.6" strokeLinecap="round" />
    <line x1="9" y1="21" x2="15" y2="21" stroke="var(--skt-color-icon-brand-primary, #3617ce)" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

const IconShop = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M6 7h12l-1.5 8H7.5L6 7Z" fill="rgba(6,12,31,0.4)" />
    <path d="M9 7V6a3 3 0 1 1 6 0v1" stroke="rgba(6,12,31,0.4)" strokeWidth="1.6" strokeLinecap="round" />
    <circle cx="9.5" cy="17.5" r="1" fill="rgba(6,12,31,0.4)" />
    <circle cx="15.5" cy="17.5" r="1" fill="rgba(6,12,31,0.4)" />
  </svg>
);

const IconMy = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="12" cy="8" r="3.5" fill="rgba(6,12,31,0.4)" />
    <path d="M5 19c0-3.866 3.134-7 7-7s7 3.134 7 7" stroke="rgba(6,12,31,0.4)" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const IconBenefit = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="12" cy="12" r="9" fill="#3617ce" />
    <path d="M8 12l2.5 2.5L16 9" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export interface NavigationButtonItemProps {
  /**
   * Top-level variant: "AI" renders an AI search bar / collapsed pill;
   * "Menu" renders a floating navigation menu with tab items.
   */
  variant?: "AI" | "Menu";
  /**
   * AI variant — when true the bar is fully expanded with placeholder text and voice button.
   * When false it shows as a collapsed icon-only pill.
   */
  disclosureAi?: boolean;
  /**
   * Menu variant — controls which sub-state is shown:
   * "Default" = single icon-only pill (benefit icon, selected)
   * "On"      = single-tab pill (benefit tab only, indeterminate)
   * "Off"     = two-tab row (shop + my, unselected)
   */
  disclosureMenu?: "Default" | "On" | "Off";
  /** Placeholder text shown in the expanded AI bar */
  aiPlaceholder?: string;
  /** Click handler for the AI voice button */
  onVoiceClick?: () => void;
  /** Click handler for the whole component */
  onClick?: () => void;
  className?: string;
}

export function NavigationButtonItem({
  variant = "AI",
  disclosureAi = true,
  disclosureMenu = "Default",
  aiPlaceholder = "T에 대해 무엇이든 물어보세요",
  onVoiceClick,
  onClick,
  className,
}: NavigationButtonItemProps) {
  const isAI = variant === "AI";
  const isMenu = variant === "Menu";

  // Determine shape modifier class
  let shapeClass = "";
  if (isAI && disclosureAi) shapeClass = styles.aiExpanded;
  else if (isAI && !disclosureAi) shapeClass = styles.aiCollapsed;
  else if (isMenu && disclosureMenu === "Default") shapeClass = styles.menuDefault;
  else if (isMenu && disclosureMenu === "On") shapeClass = styles.menuOn;
  else if (isMenu && disclosureMenu === "Off") shapeClass = styles.menuOff;

  return (
    <div
      className={[styles.root, shapeClass, className ?? ""].filter(Boolean).join(" ")}
      data-cx-component="NavigationButtonItem"
      data-variant={variant}
      data-disclosure-ai={String(disclosureAi)}
      data-disclosure-menu={disclosureMenu}
      onClick={onClick}
    >
      {/* ── AI variant ── */}
      {isAI && !disclosureAi && (
        <span className={styles.iconWrapper} aria-label="AI 어시스턴트">
          <IconTAgent />
        </span>
      )}

      {isAI && disclosureAi && (
        <>
          <div className={styles.aiInput}>
            <span className={styles.aiIconWrapper} aria-hidden="true">
              <IconAI />
            </span>
            <div className={styles.textArea}>
              <p className={styles.placeholder}>{aiPlaceholder}</p>
            </div>
          </div>
          <button
            type="button"
            className={styles.voiceBtn}
            onClick={onVoiceClick}
            aria-label="음성 입력"
          >
            <span className={styles.iconWrapper}>
              <IconVoice />
            </span>
          </button>
        </>
      )}

      {/* ── Menu variant: Default — single benefit pill (selected) ── */}
      {isMenu && disclosureMenu === "Default" && (
        <div className={styles.tabItem}>
          <span className={styles.iconWrapper} aria-hidden="true">
            <IconBenefit />
          </span>
        </div>
      )}

      {/* ── Menu variant: On — single tab indeterminate (icon-only, no label) ── */}
      {isMenu && disclosureMenu === "On" && (
        <div className={[styles.tabItem, styles.tabIndeterminate].join(" ")}>
          <span className={styles.iconWrapper} aria-hidden="true">
            <IconBenefit />
          </span>
        </div>
      )}

      {/* ── Menu variant: Off — two tabs (shop + my, unselected) ── */}
      {isMenu && disclosureMenu === "Off" && (
        <>
          <div className={[styles.tabItem, styles.tabFull].join(" ")}>
            <span className={styles.iconWrapper} aria-hidden="true">
              <IconShop />
            </span>
            <span className={styles.tabLabel}>쇼핑</span>
          </div>
          <div className={[styles.tabItem, styles.tabFull].join(" ")}>
            <span className={styles.iconWrapper} aria-hidden="true">
              <IconMy />
            </span>
            <span className={styles.tabLabel}>마이</span>
          </div>
        </>
      )}
    </div>
  );
}
