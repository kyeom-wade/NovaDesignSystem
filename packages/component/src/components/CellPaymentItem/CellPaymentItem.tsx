import React from "react";
import styles from "./CellPaymentItem.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.2--Token-Test- .CellPaymentItem (node 51273:85926)
// anatomy: root[ radio, content[ logoText[ logoImage?, label, badge? ], card?(bottomButton) ] ]

interface Props {
  /** Whether to show a logo thumbnail image next to the label */
  logoImage?: boolean;
  /** Whether to show the "최근 결제" badge */
  badge?: boolean;
  /** Whether to show the bottom CTA card (11Pay 약관 동의) */
  bottomButton?: boolean;
  /** Payment method label */
  label?: string;
  /** Badge text */
  badgeLabel?: string;
  /** Logo image src — only used when logoImage=true */
  logoSrc?: string;
  /** Card headline (brand part, rendered with gradient) */
  cardBrand?: string;
  /** Card headline (suffix) */
  cardHeadlineSuffix?: string;
  /** Card body text */
  cardBody?: string;
  /** Radio selection state */
  selected?: boolean;
  /** Click handler for the whole row */
  onClick?: () => void;
  /** Click handler for the bottom card CTA */
  onCardClick?: () => void;
}

export function CellPaymentItem({
  logoImage = false,
  badge = false,
  bottomButton = false,
  label = "카드/계좌 간편결제",
  badgeLabel = "최근 결제",
  logoSrc = "https://www.figma.com/api/mcp/asset/5e7b8927-78d3-4c87-8b44-c27997df83e8",
  cardBrand = "11Pay",
  cardHeadlineSuffix = "로 쉽고 빠르게",
  cardBody = "이용을 위해 약관 동의를 진행해 주세요",
  selected = false,
  onClick,
  onCardClick,
}: Props) {
  return (
    <div
      className={styles.root}
      data-cx-component="CellPaymentItem"
      data-bottom-button={bottomButton ? "true" : undefined}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {/* Radio */}
      <div className={styles.radioWrap} aria-hidden="true">
        <div className={`${styles.radio} ${selected ? styles.radioSelected : ""}`} />
      </div>

      {/* Right content column */}
      <div className={`${styles.content} ${bottomButton ? styles.contentGap : ""}`}>

        {/* Logo + label row */}
        <div className={`${styles.logoText} ${badge ? styles.logoTextGap : ""}`}>
          <div className={`${styles.logoLabel} ${logoImage ? styles.logoLabelGap : ""}`}>
            {logoImage && (
              <div className={styles.thumbnail}>
                <img className={styles.thumbnailImg} src={logoSrc} alt="" />
              </div>
            )}
            <span className={styles.label}>{label}</span>
          </div>

          {badge && (
            <div className={styles.badge}>
              <span className={styles.badgeText}>{badgeLabel}</span>
            </div>
          )}
        </div>

        {/* Bottom CTA card */}
        {bottomButton && (
          <button
            type="button"
            className={styles.card}
            onClick={(e) => { e.stopPropagation(); onCardClick?.(); }}
          >
            <div className={styles.cardText}>
              <div className={styles.cardHeadline}>
                <span className={styles.cardBrand}>{cardBrand}</span>
                <span className={styles.cardHeadlineSuffix}>{cardHeadlineSuffix}</span>
              </div>
              <p className={styles.cardBody}>{cardBody}</p>
            </div>
            <div className={styles.arrowIcon} aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6 4L10 8L6 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </button>
        )}
      </div>
    </div>
  );
}
