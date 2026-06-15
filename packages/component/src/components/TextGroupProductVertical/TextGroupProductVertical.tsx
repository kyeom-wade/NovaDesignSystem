import styles from "./TextGroupProductVertical.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.2--Token-Test- .TextGroupProductVertical (node 50946:59494)
// anatomy: root[ textInfoGroup[ textNameGroup[ title, subText? ], textSubGroup?[ rating, divider, bookingRate ] ], textPriceGroup?[ textPrice[ discount?, price, period? ], textPriceCondition?[ conditionLabel, conditionPrice ] ], badgeGroup?[ badge* ] ]

import React from "react";

interface BadgeItemProps {
  text?: string;
}

function BadgeItem({ text = "Badge" }: BadgeItemProps) {
  return (
    <div className={styles.badge}>
      <span className={styles.badgeText}>{text}</span>
    </div>
  );
}

interface Props {
  className?: string;
  /** Main product title — up to 2 lines */
  title?: string;
  /** Sub label below title (e.g. category / tag) */
  subText?: string;
  /** Whether to show the sub label */
  showSubText?: boolean;
  /** Rating text shown in the secondary info row */
  rating?: string;
  /** Booking rate text shown in the secondary info row */
  bookingRate?: string;
  /** Whether to show the sub-info group (rating & booking rate) */
  showSubGroup?: boolean;
  /** Discount percentage label (e.g. "7%") */
  discount?: string;
  /** Whether to show the discount label */
  showDiscount?: boolean;
  /** Main price label (e.g. "999,999원") */
  price?: string;
  /** Whether to show the price row */
  showPrice?: boolean;
  /** Period suffix (e.g. "/12개월") */
  period?: string;
  /** Whether to show the period suffix */
  showPeriod?: boolean;
  /** Condition description for the price (e.g. "선택 약정 적용 시") */
  priceConditionLabel?: string;
  /** Condition price (e.g. "74,250원") */
  priceConditionValue?: string;
  /** Whether to show the price condition block */
  showPriceCondition?: boolean;
  /** Badge labels rendered in the badge group */
  badges?: string[];
  /** Whether to show the badge group */
  showBadgeGroup?: boolean;
}

export function TextGroupProductVertical({
  className,
  title = "타이틀 최대 2줄 노출됩니다. 타이틀 최대 2줄 노출됩니다.",
  subText = "Sub Text",
  showSubText = true,
  rating = "평점 4.7",
  bookingRate = "예매율 21.4%",
  showSubGroup = true,
  discount = "7%",
  showDiscount = true,
  price = "999,999원",
  showPrice = true,
  period = "/12개월",
  showPeriod = true,
  priceConditionLabel = "선택 약정 적용 시",
  priceConditionValue = "74,250원",
  showPriceCondition = true,
  badges = ["Badge", "Badge", "Badge"],
  showBadgeGroup = true,
}: Props) {
  return (
    <div className={`${styles.root} ${className ?? ""}`} data-cx-component="TextGroupProductVertical">
      {/* TextInfoGroup */}
      <div className={styles.textInfoGroup}>
        {/* TextNameGroup */}
        <div className={styles.textNameGroup}>
          <p className={styles.title}>{title}</p>
          {showSubText && (
            <p className={styles.subText}>{subText}</p>
          )}
        </div>

        {/* TextSubGroup — rating & booking rate */}
        {showSubGroup && (
          <div className={styles.textSubGroup}>
            <span className={styles.subGroupText}>{rating}</span>
            <div className={styles.divider} />
            <span className={styles.subGroupText}>{bookingRate}</span>
          </div>
        )}
      </div>

      {/* TextPriceGroup */}
      {showPrice && (
        <div className={styles.textPriceGroup}>
          <div className={styles.textPrice}>
            {showDiscount && (
              <span className={styles.discount}>{discount}</span>
            )}
            <span className={styles.price}>{price}</span>
            {showPeriod && (
              <span className={styles.period}>{period}</span>
            )}
          </div>

          {showPriceCondition && (
            <div className={styles.textPriceCondition}>
              <p className={styles.priceConditionLabel}>{priceConditionLabel}</p>
              <p className={styles.priceConditionValue}>{priceConditionValue}</p>
            </div>
          )}
        </div>
      )}

      {/* BadgeGroup */}
      {showBadgeGroup && badges.length > 0 && (
        <div className={styles.badgeGroup}>
          {badges.map((label, idx) => (
            <BadgeItem key={idx} text={label} />
          ))}
        </div>
      )}
    </div>
  );
}
