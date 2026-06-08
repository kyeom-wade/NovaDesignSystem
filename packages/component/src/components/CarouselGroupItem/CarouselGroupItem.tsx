import React from "react";
import styles from "./CarouselGroupItem.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.2--Token-Test- .CarouselGroupItem (node 51529:29830)
// anatomy: root[ item*3[ thumbnail, textGroup[ textInfoGroup[ nameGroup[ title, subText? ] ], priceGroup[ price[ discount?, amount, unit? ] ], priceCondition? ], badgeGroup? ] ]

export type CarouselGroupItemVariant = "Small" | "Medium" | "Large";

interface BadgeProps {
  text?: string;
}

function Badge({ text = "Badge" }: BadgeProps) {
  return (
    <span className={styles.badge}>{text}</span>
  );
}

interface CarouselItemProps {
  variant: CarouselGroupItemVariant;
  title?: string;
  subText?: string;
  price?: string;
  discountRate?: string;
  priceUnit?: string;
  priceConditionLabel?: string;
  priceConditionAmount?: string;
  rating?: string;
  bookingRate?: string;
  badges?: string[];
  src?: string;
}

function CarouselItem({
  variant,
  title = "타이틀 최대 2줄 노출됩니다. 타이틀 최대 2줄 노출됩니다.",
  subText = "Sub Text",
  price = "999,999원",
  discountRate = "7%",
  priceUnit = "/12개월",
  priceConditionLabel = "선택 약정 적용 시",
  priceConditionAmount = "74,250원",
  rating = "평점 4.7",
  bookingRate = "예매율 21.4%",
  badges = ["Badge", "Badge"],
  src = "https://www.figma.com/api/mcp/asset/1020cd18-5b96-4e7c-9275-218b198fc745",
}: CarouselItemProps) {
  const isSmall = variant === "Small";
  const isMedium = variant === "Medium";
  const isLarge = variant === "Large";

  return (
    <div className={`${styles.item} ${styles[`item${variant}`]}`}>
      {/* Thumbnail */}
      {isSmall && (
        <div className={`${styles.thumbnail} ${styles.thumbnailSmall}`}>
          <img className={styles.thumbnailImg} src={src} alt="" />
          <div className={styles.dimOverlay} aria-hidden="true" />
        </div>
      )}
      {isMedium && (
        <div className={`${styles.thumbnail} ${styles.thumbnailMedium}`}>
          <img className={styles.thumbnailImg} src="https://www.figma.com/api/mcp/asset/81c3e868-0fca-43e8-bf4f-096887055d11" alt="" />
        </div>
      )}
      {isLarge && (
        <div className={`${styles.thumbnail} ${styles.thumbnailLarge}`}>
          <img className={styles.thumbnailImg} src={src} alt="" />
          <div className={styles.dimOverlay} aria-hidden="true" />
        </div>
      )}

      {/* Text group */}
      <div className={`${styles.textGroup} ${isLarge ? styles.textGroupLarge : styles.textGroupDefault}`}>
        {/* Info group */}
        <div className={styles.textInfoGroup}>
          <div className={styles.nameGroup}>
            <p className={`${styles.title} ${isLarge ? styles.titleMediumWeight : styles.titleSemiBold}`}>{title}</p>
            {isLarge && (
              <p className={styles.subTextLabel}>{subText}</p>
            )}
          </div>
          {isMedium && (
            <div className={styles.subGroup}>
              <span className={styles.subGroupText}>{rating}</span>
              <span className={styles.subGroupDivider} aria-hidden="true" />
              <span className={styles.subGroupText}>{bookingRate}</span>
            </div>
          )}
        </div>

        {/* Price group — Small and Large only */}
        {(isSmall || isLarge) && (
          <div className={styles.priceGroup}>
            <div className={styles.priceRow}>
              {isLarge && (
                <span className={styles.discountRate}>{discountRate}</span>
              )}
              <span className={`${styles.priceAmount} ${isLarge ? styles.priceAmountNeutral : styles.priceAmountPrimary}`}>{price}</span>
              {isLarge && (
                <span className={styles.priceUnit}>{priceUnit}</span>
              )}
            </div>
            {isSmall && (
              <div className={styles.priceCondition}>
                <p className={styles.priceConditionLabel}>{priceConditionLabel}</p>
                <p className={styles.priceConditionAmount}>{priceConditionAmount}</p>
              </div>
            )}
          </div>
        )}

        {/* Badge group — Large only */}
        {isLarge && badges.length > 0 && (
          <div className={styles.badgeGroup}>
            {badges.map((b, i) => (
              <Badge key={i} text={b} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

interface Props {
  /** Layout / size variant matching Figma Variants */
  variant?: CarouselGroupItemVariant;
  /** Title text for each card (applied to all 3 items) */
  title?: string;
  /** Sub-text label shown in Large variant */
  subText?: string;
  /** Price string shown in Small/Large variants */
  price?: string;
  /** Discount rate shown in Large variant */
  discountRate?: string;
  /** Price unit suffix shown in Large variant */
  priceUnit?: string;
  /** Condition label shown in Small variant */
  priceConditionLabel?: string;
  /** Condition amount shown in Small variant */
  priceConditionAmount?: string;
  /** Rating text shown in Medium variant */
  rating?: string;
  /** Booking rate text shown in Medium variant */
  bookingRate?: string;
  /** Badge labels shown in Large variant */
  badges?: string[];
  /** Thumbnail image src */
  src?: string;
}

export function CarouselGroupItem({
  variant = "Small",
  title = "타이틀 최대 2줄 노출됩니다. 타이틀 최대 2줄 노출됩니다.",
  subText = "Sub Text",
  price = "999,999원",
  discountRate = "7%",
  priceUnit = "/12개월",
  priceConditionLabel = "선택 약정 적용 시",
  priceConditionAmount = "74,250원",
  rating = "평점 4.7",
  bookingRate = "예매율 21.4%",
  badges = ["Badge", "Badge"],
  src,
}: Props) {
  const itemProps: CarouselItemProps = {
    variant,
    title,
    subText,
    price,
    discountRate,
    priceUnit,
    priceConditionLabel,
    priceConditionAmount,
    rating,
    bookingRate,
    badges,
    src,
  };

  return (
    <div className={styles.root} data-cx-component="CarouselGroupItem" data-variant={variant}>
      <CarouselItem {...itemProps} />
      <CarouselItem {...itemProps} />
      <CarouselItem {...itemProps} />
    </div>
  );
}
