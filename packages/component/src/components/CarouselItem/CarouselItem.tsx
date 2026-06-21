import React from "react";
import styles from "./CarouselItem.module.css";
import { ThumbnailSquareItem } from "../ThumbnailSquareItem/ThumbnailSquareItem";
import { ThumbnailRectangleItem } from "../ThumbnailRectangleItem/ThumbnailRectangleItem";
import { TextProductDetail } from "../TextProductDetail/TextProductDetail";
// Figma SSOT: SKT-Next_UI-Draft_3.3 .CarouselItem (node 51093:41213)
// 캐러셀 슬라이드 아이템 — 썸네일 + TextProductDetail(ProductList) 인스턴스 합성. 3 variant.
//   Small  — 128 정사각 썸네일 + 타이틀·캡션·가격
//   Medium — 128×192 직사각 썸네일 + 타이틀·별점/예매율
//   Large  — 160 정사각 썸네일 + 서브타이틀·타이틀·할인가·배지
// anatomy: root[ thumbnail, TextProductDetail(ProductList) ]

export type CarouselItemVariant = "Small" | "Medium" | "Large";

export interface CarouselItemProps {
  variants?: CarouselItemVariant;
  /** 상품명 */
  title?: string;
  /** 서브타이틀(브랜드·카테고리) — Large */
  subtitle?: string;
  /** 가격 조건 캡션 — Small */
  caption01?: string;
  /** 가격(최종) */
  price?: string;
  /** 할인율 — Large */
  discount?: string;
  /** 기간 — Large */
  period?: string;
  /** 별점 — Medium */
  rating?: string;
  /** 예매율 등 보조 정보 — Medium */
  subInfo?: string;
  /** 배지 라벨 목록 — Large */
  badges?: string[];
  /** 썸네일 이미지 */
  imageSrc?: string;
  className?: string;
}

export function CarouselItem({
  variants = "Small",
  title = "Title",
  subtitle = "Subtitle",
  caption01 = "Caption01",
  price = "99,999원",
  discount = "99%",
  period = "/Period",
  rating = "5.0",
  subInfo = "예매율 99.9%",
  badges,
  imageSrc,
  className,
}: CarouselItemProps) {
  const rootClass = [styles.root, styles[`variant-${variants}`], className].filter(Boolean).join(" ");

  // ── Medium ── 직사각 썸네일 + 타이틀·별점/예매율
  if (variants === "Medium") {
    return (
      <div className={rootClass} data-cx-component="CarouselItem" data-variant="Medium">
        <div className={styles.thumbRect}>
          <ThumbnailRectangleItem variant="128*192" src={imageSrc} />
        </div>
        <TextProductDetail
          className={styles.text}
          variants="ProductList"
          subTitle={false}
          title={title}
          textPriceGroup={false}
          caption03
          captionIconItem1
          captionIconType="Star"
          caption031={rating}
          caption032={subInfo}
          captionCount={false}
          badgeGroup={false}
        />
      </div>
    );
  }

  // ── Large ── 160 정사각 + 서브타이틀·타이틀·할인가·배지
  if (variants === "Large") {
    return (
      <div className={rootClass} data-cx-component="CarouselItem" data-variant="Large">
        <div className={styles.thumbSquare160}>
          <ThumbnailSquareItem size="160" src={imageSrc} dimMultiply />
        </div>
        <TextProductDetail
          className={`${styles.text} ${styles.textLarge}`}
          variants="ProductList"
          subtitle={subtitle}
          title={title}
          caption01={false}
          value01={discount}
          value01Discount
          value02={price}
          value03={period}
          value03Period
          caption02={false}
          caption03={false}
          badges={badges}
        />
      </div>
    );
  }

  // ── Small ── 128 정사각 + 타이틀·캡션·가격
  return (
    <div className={rootClass} data-cx-component="CarouselItem" data-variant="Small">
      <div className={styles.thumbSquare128}>
        <ThumbnailSquareItem size="128" src={imageSrc} dimMultiply />
      </div>
      <TextProductDetail
        className={styles.text}
        variants="ProductList"
        subTitle={false}
        title={title}
        caption01
        caption2={caption01}
        value01Discount={false}
        value02={price}
        value03Period={false}
        caption02={false}
        caption03={false}
        badgeGroup={false}
      />
    </div>
  );
}
