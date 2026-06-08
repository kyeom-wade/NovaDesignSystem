import React from "react";
import styles from "./CardProductVerticalList.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.2--Token-Test- .CardProductVerticalList (node 51529:31707)
// anatomy: root[ item*[ thumbnail[ img, dimOverlay ], textGroup[ textInfoGroup[ textNameGroup[ title, subText ], textSubGroup[ rating, divider, bookingRate ] ], textPriceGroup[ textPrice[ discountRate, price, installment ], priceCondition[ label, value ] ], badgeGroup[ badge* ] ] ] ]

export interface BadgeDef {
  label: string;
}

export interface CardProductVerticalListItemDef {
  /** Product thumbnail image URL */
  imageSrc?: string;
  /** Show dim multiply overlay on thumbnail */
  dimMultiply?: boolean;
  /** Product title (up to 2 lines) */
  title?: string;
  /** Sub-text below the title (e.g. brand or category) */
  subText?: string;
  /** Rating display string */
  rating?: string;
  /** Booking rate display string */
  bookingRate?: string;
  /** Discount rate label shown in brand color */
  discountRate?: string;
  /** Price string (e.g. "999,999원") */
  price?: string;
  /** Installment suffix (e.g. "/12개월") */
  installment?: string;
  /** Condition label above conditional price */
  priceConditionLabel?: string;
  /** Conditional price value */
  priceConditionValue?: string;
  /** Badge items to render in the badge group */
  badges?: BadgeDef[];
  /** Click handler */
  onClick?: () => void;
}

interface Props {
  /** List of product card items to render */
  items?: CardProductVerticalListItemDef[];
  /** Additional class name for the root element */
  className?: string;
}

const DEFAULT_BADGES: BadgeDef[] = [
  { label: "Badge" },
  { label: "Badge" },
  { label: "Badge" },
];

const DEFAULT_ITEMS: CardProductVerticalListItemDef[] = [
  {
    title: "타이틀 최대 2줄 노출됩니다. 타이틀 최대 2줄 노출됩니다.",
    subText: "Sub Text",
    rating: "평점 4.7",
    bookingRate: "예매율 21.4%",
    discountRate: "7%",
    price: "999,999원",
    installment: "/12개월",
    priceConditionLabel: "선택 약정 적용 시",
    priceConditionValue: "74,250원",
    badges: DEFAULT_BADGES,
    dimMultiply: true,
  },
  {
    title: "타이틀 최대 2줄 노출됩니다. 타이틀 최대 2줄 노출됩니다.",
    subText: "Sub Text",
    rating: "평점 4.7",
    bookingRate: "예매율 21.4%",
    discountRate: "7%",
    price: "999,999원",
    installment: "/12개월",
    priceConditionLabel: "선택 약정 적용 시",
    priceConditionValue: "74,250원",
    badges: DEFAULT_BADGES,
    dimMultiply: true,
  },
];

function CardItem({
  imageSrc,
  dimMultiply = true,
  title = "타이틀 최대 2줄 노출됩니다. 타이틀 최대 2줄 노출됩니다.",
  subText = "Sub Text",
  rating = "평점 4.7",
  bookingRate = "예매율 21.4%",
  discountRate = "7%",
  price = "999,999원",
  installment = "/12개월",
  priceConditionLabel = "선택 약정 적용 시",
  priceConditionValue = "74,250원",
  badges = DEFAULT_BADGES,
  onClick,
}: CardProductVerticalListItemDef) {
  return (
    <div
      className={styles.item}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {/* Thumbnail */}
      <div className={styles.thumbnail}>
        {imageSrc ? (
          <img className={styles.thumbnailImg} src={imageSrc} alt={title} />
        ) : (
          <div className={styles.thumbnailPlaceholder} aria-hidden="true" />
        )}
        {dimMultiply && <div className={styles.dimOverlay} aria-hidden="true" />}
      </div>

      {/* Text group */}
      <div className={styles.textGroup}>
        {/* Info group */}
        <div className={styles.textInfoGroup}>
          <div className={styles.textNameGroup}>
            <p className={styles.title}>{title}</p>
            <p className={styles.subText}>{subText}</p>
          </div>
          <div className={styles.textSubGroup}>
            <span className={styles.subGroupText}>{rating}</span>
            <span className={styles.subGroupDivider} aria-hidden="true" />
            <span className={styles.subGroupText}>{bookingRate}</span>
          </div>
        </div>

        {/* Price group */}
        <div className={styles.textPriceGroup}>
          <div className={styles.textPrice}>
            <span className={styles.discountRate}>{discountRate}</span>
            <span className={styles.priceAmount}>{price}</span>
            {installment && <span className={styles.installment}>{installment}</span>}
          </div>
          {priceConditionLabel && priceConditionValue && (
            <div className={styles.priceCondition}>
              <p className={styles.priceConditionLabel}>{priceConditionLabel}</p>
              <p className={styles.priceConditionValue}>{priceConditionValue}</p>
            </div>
          )}
        </div>

        {/* Badge group */}
        {badges && badges.length > 0 && (
          <div className={styles.badgeGroup}>
            {badges.map((badge, i) => (
              <span key={i} className={styles.badge}>
                {badge.label}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export function CardProductVerticalList({
  items = DEFAULT_ITEMS,
  className,
}: Props) {
  return (
    <div
      className={[styles.root, className ?? ""].filter(Boolean).join(" ")}
      data-cx-component="CardProductVerticalList"
    >
      {items.map((item, i) => (
        <CardItem key={i} {...item} />
      ))}
    </div>
  );
}
