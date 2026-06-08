import React from "react";
import styles from "./DetailInfo.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.2--Token-Test- .DetailInfo (node 51083:55311)
// anatomy: wrap[ productVariant[ textGroupProductDetail[ textProduct[ txtSub, productName ], toggleItem ], priceGroup[ textPrice[ originalPrice, discountRow[ discountRate, salePrice, period ] ], badgeList[ badge* ] ], couponButton ], txtSubRow[ usageLabel, divider, usageValue ], detailInfoItem[ infoLeft[ thumbnail, infoLabel ], arrowIcon ] ] | brandVariant[ title[ brandLogo, textBrandName[ textGroupBrandDetail[ categoryItem, brandName ], toggleItem[ heartIcon, likeCount ] ], badgeList[ badge* ] ] ]

interface Props {
  /** 컴포넌트 변형: Product(상품 상세) | Brand(브랜드 상세) */
  variants?: "Product" | "Brand";
  /** 카테고리 텍스트 (Product: 카테고리명 / Brand: 카테고리 경로) */
  category?: string;
  /** 상품/브랜드 이름 */
  name?: string;
  /** 원래 가격 텍스트 (Product 전용) */
  originalPrice?: string;
  /** 할인율 표시 여부 (Product 전용) */
  showDiscount?: boolean;
  /** 할인율 텍스트 (Product 전용) */
  discountRate?: string;
  /** 판매 가격 텍스트 (Product 전용) */
  salePrice?: string;
  /** 할부 기간 표시 여부 (Product 전용) */
  showPeriod?: boolean;
  /** 할부 기간 텍스트 (Product 전용) */
  period?: string;
  /** 배지 목록 표시 여부 */
  showBadgeList?: boolean;
  /** 배지 텍스트 목록 */
  badges?: string[];
  /** 쿠폰 버튼 표시 여부 (Product 전용) */
  showCouponButton?: boolean;
  /** 쿠폰 버튼 레이블 */
  couponLabel?: string;
  /** 쿠폰 버튼 클릭 핸들러 */
  onCoupon?: () => void;
  /** 사용처 영역 표시 여부 (Product 전용) */
  showUsage?: boolean;
  /** 사용처 텍스트 (Product 전용) */
  usage?: string;
  /** 상세 정보 링크 아이템 표시 여부 (Product 전용) */
  showDetailInfoItem?: boolean;
  /** 상세 정보 링크 레이블 */
  detailInfoLabel?: string;
  /** 상세 정보 링크 클릭 핸들러 */
  onDetailInfo?: () => void;
  /** 좋아요 수 (Brand 전용) */
  likeCount?: string;
  /** 좋아요 클릭 핸들러 */
  onLike?: () => void;
}

export function DetailInfo({
  variants = "Product",
  category = "Product Category",
  name = "Product Name",
  originalPrice = "999,999원",
  showDiscount = true,
  discountRate = "99%",
  salePrice = "999,999원",
  showPeriod = true,
  period = "/12개월",
  showBadgeList = true,
  badges = ["NEW", "256GB", "256GB"],
  showCouponButton = true,
  couponLabel = "쿠폰 받기",
  onCoupon,
  showUsage = true,
  usage = "이마트 매장교환",
  showDetailInfoItem = true,
  detailInfoLabel = "Gifticon Best 상품 더보기",
  onDetailInfo,
  likeCount = "9,999",
  onLike,
}: Props) {
  const isBrand = variants === "Brand";
  const isProduct = variants === "Product";

  return (
    <div
      className={`${styles.wrap} ${isBrand ? styles.wrapBrand : styles.wrapProduct}`}
      data-cx-component="DetailInfo"
      data-variant={variants}
    >
      {isProduct && (
        <>
          {/* 상품명 + 하트 아이콘 */}
          <div className={styles.textGroupProductDetail}>
            <div className={styles.textProduct}>
              <span className={styles.txtCategory}>{category}</span>
              <span className={styles.productName}>{name}</span>
            </div>
            <button type="button" className={styles.toggleItem} onClick={onLike} aria-label="좋아요">
              <svg className={styles.heartIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </button>
          </div>

          {/* 가격 + 쿠폰 버튼 */}
          <div className={styles.priceGroup}>
            <div className={styles.textPrice}>
              <span className={styles.originalPrice}>{originalPrice}</span>
              <div className={styles.discountRow}>
                {showDiscount && (
                  <span className={styles.discountRate}>{discountRate}</span>
                )}
                <span className={styles.salePrice}>{salePrice}</span>
                {showPeriod && (
                  <span className={styles.period}>{period}</span>
                )}
              </div>
              {showBadgeList && badges.length > 0 && (
                <div className={styles.badgeList}>
                  {badges.map((badge, i) => (
                    <span key={i} className={styles.badge}>{badge}</span>
                  ))}
                </div>
              )}
            </div>
            {showCouponButton && (
              <button type="button" className={styles.couponButton} onClick={onCoupon}>
                <span className={styles.couponLabel}>{couponLabel}</span>
                <svg className={styles.arrowIcon} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.5 2.5L7.5 6L4.5 9.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            )}
          </div>

          {/* 사용처 */}
          {showUsage && (
            <div className={styles.usageRow}>
              <span className={styles.usageLabel}>사용처</span>
              <div className={styles.usageDivider} />
              <span className={styles.usageValue}>{usage}</span>
            </div>
          )}

          {/* 상세 정보 아이템 링크 */}
          {showDetailInfoItem && (
            <button type="button" className={styles.detailInfoItem} onClick={onDetailInfo}>
              <div className={styles.detailInfoLeft}>
                <div className={styles.detailInfoThumb} aria-hidden="true">
                  <span className={styles.detailInfoThumbText}>Best</span>
                </div>
                <span className={styles.detailInfoLabel}>{detailInfoLabel}</span>
              </div>
              <svg className={styles.detailInfoArrow} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          )}
        </>
      )}

      {isBrand && (
        <div className={styles.brandTitle}>
          {/* 브랜드 로고 */}
          <div className={styles.brandLogo} aria-hidden="true">
            <div className={styles.brandLogoInner} />
          </div>

          {/* 브랜드 텍스트 정보 */}
          <div className={styles.textBrandName}>
            <div className={styles.brandTextGroupDetail}>
              <div className={styles.brandTextProduct}>
                <span className={styles.brandCategory}>{category}</span>
                <span className={styles.brandName}>{name}</span>
              </div>
              <div className={styles.brandToggleItem}>
                <button type="button" className={styles.brandToggle} onClick={onLike} aria-label="좋아요">
                  <svg className={styles.brandHeartIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </button>
                <span className={styles.likeCount}>{likeCount}</span>
              </div>
            </div>

            {showBadgeList && badges.length > 0 && (
              <div className={styles.brandBadgeList}>
                {badges.map((badge, i) => (
                  <span key={i} className={styles.brandBadge}>{badge}</span>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
