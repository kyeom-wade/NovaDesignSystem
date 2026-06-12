import React from "react";
import styles from "./NavigationBar.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.2--Token-Test- .NavigationBar (node 51287:55934)
// anatomy: root[ aiButton[ (collapsed) tAgentIcon | (expanded) aiInput[aiIcon, placeholder], voiceBtn ], menuButton?[ tabItem(혜택), tabItem(쇼핑)?, tabItem(마이)? ] ]
// variants: activeTab(Benefit|Shopping|My) × disclosure(false=expanded-ai + icon-menu, true=collapsed-ai + expanded-menu)

/** ── Inline SVG icons ── */

const IconTAgent = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path
      d="M12 3.5C9.238 3.5 7 5.515 7 8c0 1.31.6 2.49 1.554 3.31L7 11.5A.75.75 0 0 0 7 13h4v1.5H9a.75.75 0 0 0 0 1.5h2V18a.75.75 0 0 0 1.5 0v-2h2a.75.75 0 0 0 0-1.5h-2V13h4a.75.75 0 0 0 0-1.5l-1.554-.19A5.02 5.02 0 0 0 17 8c0-2.485-2.238-4.5-5-4.5Z"
      fill="var(--skt-color-icon-brand-primary, #3617ce)"
    />
  </svg>
);

const IconAI = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path
      d="M8 2C6.343 2 5 3.12 5 4.5c0 .69.308 1.315.8 1.763L4.5 6.5A.5.5 0 0 0 4.5 7.5H7V8.5H5.5a.5.5 0 0 0 0 1H7V11a.5.5 0 0 0 1 0V9.5H9.5a.5.5 0 0 0 0-1H8V7.5h2.5a.5.5 0 0 0 0-1l-1.3-.237A2.5 2.5 0 0 0 11 4.5C11 3.12 9.657 2 8 2Z"
      fill="var(--skt-color-text-brand-primary, #3617ce)"
    />
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

const IconBenefit = ({ active }: { active: boolean }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="12" cy="12" r="9" fill={active ? "var(--skt-color-icon-brand-primary, #3617ce)" : "var(--skt-color-icon-neutral-tertiary, rgba(6,12,31,0.4))"} />
    <path d="M8.5 12l2.5 2.5L16 9" stroke="var(--skt-color-icon-inverse-primary, #ffffff)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconShop = ({ active }: { active: boolean }) => {
  const c = active ? "var(--skt-color-icon-brand-primary, #3617ce)" : "var(--skt-color-icon-neutral-tertiary, rgba(6,12,31,0.4))";
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M6 7h12l-1.5 9H7.5L6 7Z" fill={c} />
      <path d="M9 7V6a3 3 0 1 1 6 0v1" stroke={c} strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="9.5" cy="17.5" r="1" fill={c} />
      <circle cx="15.5" cy="17.5" r="1" fill={c} />
    </svg>
  );
};

const IconMy = ({ active }: { active: boolean }) => {
  const c = active ? "var(--skt-color-icon-brand-primary, #3617ce)" : "var(--skt-color-icon-neutral-tertiary, rgba(6,12,31,0.4))";
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="12" cy="8" r="3.5" fill={c} />
      <path d="M5 19c0-3.866 3.134-7 7-7s7 3.134 7 7" stroke={c} strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
};

export interface NavigationBarProps {
  /**
   * Which navigation tab is currently selected.
   * Controls which tab item gets the selected/brand highlight in the menu.
   */
  activeTab?: "Benefit" | "Shopping" | "My";
  /**
   * When true: AI button collapses to an icon-only pill and the menu button
   * expands to show all three tabs (혜택 · 쇼핑 · 마이).
   * When false: AI button is the expanded search bar and the menu shows only
   * the active tab as a compact icon pill.
   */
  disclosure?: boolean;
  /** Placeholder text displayed in the expanded AI search bar */
  aiPlaceholder?: string;
  /** Called when the user taps the AI area (collapsed or expanded bar) */
  onAiClick?: () => void;
  /** Called when the user taps the voice button inside the expanded AI bar */
  onVoiceClick?: () => void;
  /** Called when the user taps the 혜택 tab */
  onBenefitClick?: () => void;
  /** Called when the user taps the 쇼핑 tab */
  onShoppingClick?: () => void;
  /** Called when the user taps the 마이 tab */
  onMyClick?: () => void;
}

export function NavigationBar({
  activeTab = "Benefit",
  disclosure = false,
  aiPlaceholder = "T에 대해 무엇이든 물어보세요",
  onAiClick,
  onVoiceClick,
  onBenefitClick,
  onShoppingClick,
  onMyClick,
}: NavigationBarProps) {
  const showExpandedMenu = disclosure;
  const showExpandedAi = !disclosure;

  return (
    <div className={styles.root} data-cx-component="NavigationBar" data-active-tab={activeTab} data-disclosure={String(disclosure)}>
      {/* ── AI Button ── */}
      <div
        className={showExpandedAi ? styles.aiBtnExpanded : styles.aiBtnCollapsed}
        role="button"
        tabIndex={0}
        aria-label={showExpandedAi ? aiPlaceholder : "AI 어시스턴트"}
        onClick={onAiClick}
      >
        {showExpandedAi ? (
          /* Expanded: icon + placeholder text + voice button */
          <>
            <div className={styles.aiInput}>
              <span className={styles.aiIconSm} aria-hidden="true">
                <IconAI />
              </span>
              <div className={styles.aiTextArea}>
                <p className={styles.aiPlaceholder}>{aiPlaceholder}</p>
              </div>
            </div>
            <button
              type="button"
              className={styles.voiceBtn}
              onClick={(e) => { e.stopPropagation(); onVoiceClick?.(); }}
              aria-label="음성 입력"
            >
              <span className={styles.voiceIconWrapper} aria-hidden="true">
                <IconVoice />
              </span>
            </button>
          </>
        ) : (
          /* Collapsed: TAgent icon only */
          <span className={styles.iconWrapper} aria-hidden="true">
            <IconTAgent />
          </span>
        )}
      </div>

      {/* ── Menu Button ── */}
      <div className={showExpandedMenu ? styles.menuBtnExpanded : styles.menuBtnCollapsed}>
        {showExpandedMenu ? (
          /* Expanded menu: all three tabs */
          <>
            <div
              className={[styles.tabItem, activeTab === "Benefit" ? styles.tabSelected : styles.tabUnselected].join(" ")}
              role="tab"
              aria-selected={activeTab === "Benefit"}
              tabIndex={0}
              onClick={onBenefitClick}
            >
              <span className={styles.tabIcon} aria-hidden="true">
                <IconBenefit active={activeTab === "Benefit"} />
              </span>
              <span className={[styles.tabLabel, activeTab === "Benefit" ? styles.tabLabelActive : styles.tabLabelInactive].join(" ")}>
                혜택
              </span>
            </div>

            <div
              className={[styles.tabItem, activeTab === "Shopping" ? styles.tabSelected : styles.tabUnselected].join(" ")}
              role="tab"
              aria-selected={activeTab === "Shopping"}
              tabIndex={0}
              onClick={onShoppingClick}
            >
              <span className={styles.tabIcon} aria-hidden="true">
                <IconShop active={activeTab === "Shopping"} />
              </span>
              <span className={[styles.tabLabel, activeTab === "Shopping" ? styles.tabLabelActive : styles.tabLabelInactive].join(" ")}>
                쇼핑
              </span>
            </div>

            <div
              className={[styles.tabItem, activeTab === "My" ? styles.tabSelected : styles.tabUnselected].join(" ")}
              role="tab"
              aria-selected={activeTab === "My"}
              tabIndex={0}
              onClick={onMyClick}
            >
              <span className={styles.tabIcon} aria-hidden="true">
                <IconMy active={activeTab === "My"} />
              </span>
              <span className={[styles.tabLabel, activeTab === "My" ? styles.tabLabelActive : styles.tabLabelInactive].join(" ")}>
                마이
              </span>
            </div>
          </>
        ) : (
          /* Collapsed menu: icon-only pill showing active tab */
          <div
            className={styles.tabItemIconOnly}
            role="tab"
            aria-selected
            tabIndex={0}
            onClick={
              activeTab === "Benefit" ? onBenefitClick
              : activeTab === "Shopping" ? onShoppingClick
              : onMyClick
            }
          >
            <span className={styles.tabIcon} aria-hidden="true">
              {activeTab === "Benefit" && <IconBenefit active />}
              {activeTab === "Shopping" && <IconShop active />}
              {activeTab === "My" && <IconMy active />}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
