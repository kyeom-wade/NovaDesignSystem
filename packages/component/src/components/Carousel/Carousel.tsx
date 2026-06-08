import React from "react";
import styles from "./Carousel.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.2--Token-Test- .Carousel (node 51819:84703)
// anatomy: wrap[ header[ title, moreIcon? ], itemGroup[ item[ thumbnail[ img, dim? ], textGroup[ nameGroup[ title ], priceGroup[ price, condition ] ] ]* ] ]

interface CarouselItemData {
  /** 상품 이미지 URL */
  imageSrc?: string;
  /** 상품 이미지 alt 텍스트 */
  imageAlt?: string;
  /** 상품 타이틀 */
  itemTitle?: string;
  /** 상품 가격 (예: "999,999원") */
  price?: string;
  /** 가격 조건 레이블 (예: "선택 약정 적용 시") */
  priceConditionLabel?: string;
  /** 할인 가격 (예: "74,250원") */
  priceCondition?: string;
  /** dim 오버레이 표시 여부 */
  showDim?: boolean;
}

interface Props {
  /** 섹션 타이틀 */
  title?: string;
  /** 더보기 아이콘 표시 여부 */
  showMoreIcon?: boolean;
  /** 더보기 클릭 핸들러 */
  onMore?: () => void;
  /** 캐러셀 아이템 목록 */
  items?: CarouselItemData[];
}

const DEFAULT_ITEMS: CarouselItemData[] = [
  {
    imageSrc: undefined,
    imageAlt: "상품 이미지",
    itemTitle: "타이틀 최대 2줄 노출됩니다. 타이틀 최대 2줄 노출됩니다.",
    price: "999,999원",
    priceConditionLabel: "선택 약정 적용 시",
    priceCondition: "74,250원",
    showDim: true,
  },
  {
    imageSrc: undefined,
    imageAlt: "상품 이미지",
    itemTitle: "타이틀 최대 2줄 노출됩니다. 타이틀 최대 2줄 노출됩니다.",
    price: "999,999원",
    priceConditionLabel: "선택 약정 적용 시",
    priceCondition: "74,250원",
    showDim: true,
  },
  {
    imageSrc: undefined,
    imageAlt: "상품 이미지",
    itemTitle: "타이틀 최대 2줄 노출됩니다. 타이틀 최대 2줄 노출됩니다.",
    price: "999,999원",
    priceConditionLabel: "선택 약정 적용 시",
    priceCondition: "74,250원",
    showDim: true,
  },
];

export function Carousel({
  title = "섹션/콘텐츠 타이틀",
  showMoreIcon = true,
  onMore,
  items = DEFAULT_ITEMS,
}: Props) {
  return (
    <div className={styles.wrap} data-cx-component="Carousel">
      {/* Header */}
      <div className={styles.header}>
        <span className={styles.title}>{title}</span>
        {showMoreIcon && (
          <button
            type="button"
            className={styles.moreBtn}
            onClick={onMore}
            aria-label="더보기"
          >
            <span className={styles.moreIcon} aria-hidden="true" />
          </button>
        )}
      </div>

      {/* Scrollable item group */}
      <div className={styles.itemGroup}>
        {items.map((item, idx) => (
          <div key={idx} className={styles.item}>
            {/* Thumbnail */}
            <div className={styles.thumbnail}>
              {item.imageSrc ? (
                <img
                  className={styles.thumbnailImg}
                  src={item.imageSrc}
                  alt={item.imageAlt ?? "상품 이미지"}
                />
              ) : (
                <div className={styles.thumbnailPlaceholder} aria-hidden="true" />
              )}
              {item.showDim && (
                <div className={styles.dim} aria-hidden="true" />
              )}
            </div>

            {/* Text group */}
            <div className={styles.textGroup}>
              {/* Product name */}
              <div className={styles.nameGroup}>
                <p className={styles.itemTitle}>{item.itemTitle}</p>
              </div>

              {/* Price group */}
              <div className={styles.priceGroup}>
                <p className={styles.price}>{item.price}</p>
                {(item.priceConditionLabel || item.priceCondition) && (
                  <div className={styles.priceCondition}>
                    {item.priceConditionLabel && (
                      <p className={styles.priceConditionLabel}>
                        {item.priceConditionLabel}
                      </p>
                    )}
                    {item.priceCondition && (
                      <p className={styles.priceConditionValue}>
                        {item.priceCondition}
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
