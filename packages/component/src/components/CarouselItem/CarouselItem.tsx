import React from "react";
import { TextGroupProductVertical } from "../TextGroupProductVertical/TextGroupProductVertical";
import styles from "./CarouselItem.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.2--Token-Test- .CarouselItem (node 51093:41213)
// anatomy: root[ thumbnail[ img, dimOverlay ], textGroup[ textInfoGroup[ textNameGroup[ title, subText? ], textSubGroup? ], textPriceGroup[ textPrice[ discountRate?, price, priceUnit? ], textPriceCondition? ], badgeGroup?[ badge, badge ] ] ]

export type CarouselItemVariant = "Small" | "Medium" | "Large";

export interface CarouselItemProps {
  /** 카드 크기 변형 */
  variant?: CarouselItemVariant;
  /** 상품/콘텐츠 타이틀 (2줄 말줄임) */
  title?: string;
  /** 부 텍스트 (Large 전용) */
  subText?: string;
  /** 가격 문자열 (Small/Medium) */
  price?: string;
  /** 할인율 숫자 (Large 전용) */
  discountRate?: string;
  /** 할인 후 가격 (Large 전용) */
  discountedPrice?: string;
  /** 월 단위 표기 (Large 전용, 예: /12개월) */
  priceUnit?: string;
  /** 평점 텍스트 (Medium 전용) */
  rating?: string;
  /** 예매율/구매율 텍스트 (Medium 전용) */
  bookingRate?: string;
  /** 약정 조건 텍스트 첫 줄 (Small 전용) */
  conditionLabel?: string;
  /** 약정 조건 가격 (Small 전용) */
  conditionPrice?: string;
  /** 배지 레이블 목록 (Large 전용, 최대 2개 권장) */
  badges?: string[];
  /** 썸네일 이미지 URL */
  imageSrc?: string;
  /** 썸네일 이미지 alt */
  imageAlt?: string;
}

export function CarouselItem({
  variant = "Small",
  title = "타이틀 최대 2줄 노출됩니다. 타이틀 최대 2줄 노출됩니다.",
  subText = "Sub Text",
  price = "999,999원",
  discountRate = "7%",
  discountedPrice = "999,999원",
  priceUnit = "/12개월",
  rating = "평점 4.7",
  bookingRate = "예매율 21.4%",
  conditionLabel = "선택 약정 적용 시",
  conditionPrice = "74,250원",
  badges = ["Badge", "Badge"],
  imageSrc,
  imageAlt = "",
}: CarouselItemProps) {
  const isSmall = variant === "Small";
  const isMedium = variant === "Medium";
  const isLarge = variant === "Large";

  return (
    <div
      className={`${styles.root} ${styles[`root--${variant.toLowerCase()}`]}`}
      data-cx-component="CarouselItem"
      data-variant={variant}
    >
      {/* Thumbnail */}
      {(isSmall || isLarge) && (
        <div className={`${styles.thumbnail} ${isLarge ? styles.thumbnailLarge : styles.thumbnailSmall}`}>
          {imageSrc ? (
            <img className={styles.thumbnailImg} src={imageSrc} alt={imageAlt} />
          ) : (
            <div className={styles.thumbnailPlaceholder} />
          )}
          <div className={styles.dimOverlay} />
        </div>
      )}
      {isMedium && (
        <div className={styles.thumbnailRect}>
          {imageSrc ? (
            <img className={styles.thumbnailImg} src={imageSrc} alt={imageAlt} />
          ) : (
            <div className={styles.thumbnailPlaceholder} />
          )}
        </div>
      )}

      <div className={`${styles.textGroup} ${isLarge ? styles.textGroupLarge : ""}`}>
        <TextGroupProductVertical
          className={styles.productTextGroup}
          title={title}
          subText={subText}
          showSubText={isLarge}
          rating={rating}
          bookingRate={bookingRate}
          showSubGroup={isMedium}
          discount={discountRate}
          showDiscount={isLarge}
          price={isLarge ? discountedPrice : price}
          showPrice={!isMedium}
          period={priceUnit}
          showPeriod={isLarge}
          priceConditionLabel={conditionLabel}
          priceConditionValue={conditionPrice}
          showPriceCondition={isSmall}
          badges={badges}
          showBadgeGroup={isLarge}
        />
      </div>
    </div>
  );
}
