import React from "react";
import styles from "./TextProductDetail.module.css";
import { BadgeItem } from "../BadgeItem/BadgeItem";
import { ThumbnailRoundItem } from "../ThumbnailRoundItem/ThumbnailRoundItem";
import { ToogleItem } from "../ToogleItem/ToogleItem";
import { IconDummy } from "../IconDummy/IconDummy";
// Figma SSOT: SKT-Next_UI-Draft_3.3 .TextProductDetail (node 55105:41129)
// 상품 텍스트 그룹 — 4 variant 통합 컴포넌트. Figma 구조/게이트를 1:1 로 반영.
//   ProductList / ProductSummation / ProductDetail / Variants4
// 매핑(Figma 주석): Subtitle=브랜드/카테고리, Title=상품명, value01=할인율, value02=가격,
//   value03=기간, value05=원가, caption2=가격조건, caption02-*=서브가격, caption03-*=최하위정보

export type TextProductDetailVariant =
  | "ProductList"
  | "ProductSummation"
  | "ProductDetail"
  | "Variants4";

export interface TextProductDetailProps {
  variants?: TextProductDetailVariant;
  /** 서브타이틀(브랜드명·카테고리) */
  subtitle?: string;
  /** 서브타이틀 표시 여부 */
  subTitle?: boolean;
  /** 상품명(타이틀) */
  title?: string;
  /** 타이틀 옆 배지 표시 여부(ProductSummation) */
  titleBadge?: boolean;
  /** 타이틀 배지 라벨 */
  titleBadgeLabel?: string;
  /** 가격 그룹 표시 여부 */
  textPriceGroup?: boolean;
  /** 가격 조건 캡션 표시 여부 */
  caption01?: boolean;
  /** 가격 조건 캡션 텍스트(e.g. 선택약정 24개월 기준) */
  caption2?: string;
  /** 할인율(NN%) */
  value01?: string;
  /** 할인율 표시 여부 */
  value01Discount?: boolean;
  /** 가격(할인 적용 후 최종) */
  value02?: string;
  /** 기간(e.g. /월) */
  value03?: string;
  /** 기간 표시 여부 */
  value03Period?: boolean;
  /** 원가격(할인 전, 취소선) — ProductDetail */
  value05?: string;
  /** 서브 가격/정보 텍스트 표시 여부 */
  caption02?: boolean;
  /** 서브 가격/정보 텍스트(2줄) */
  caption021?: string;
  caption022?: string;
  /** 최하위 정보 텍스트 표시 여부 */
  caption03?: boolean;
  /** 최하위 정보 텍스트 */
  caption031?: string;
  caption032?: string;
  caption033?: string;
  /** 하위정보 각 항목 앞 더미 아이콘(ProductList) */
  captionIconItem1?: boolean;
  captionIconItem2?: boolean;
  /** 추가 개수(e.g. +2) */
  count?: string;
  captionCount?: boolean;
  /** 배지 표시 여부 */
  badgeGroup?: boolean;
  /** 배지 라벨 목록(기본 3개) */
  badges?: string[];
  /** 하트 토글 표시 여부(ProductDetail / Variants4) */
  toggleItem?: boolean;
  /** 하트 카운트(Variants4) */
  toggleCount?: string;
  /** 우측 버튼 표시 여부(ProductDetail) */
  button?: boolean;
  buttonLabel?: string;
  onButton?: () => void;
  /** Variants4 브랜드 로고 이미지 */
  logoSrc?: string;
  className?: string;
}

const HEART_OFF_PATH =
  "M16.5 5C14.76 5 13.09 5.97 12 7.5C10.91 5.97 9.24 5 7.5 5C5.01 5 3 7.01 3 9.5C3 15.5 12 21 12 21C12 21 21 15.5 21 9.5C21 7.01 18.99 5 16.5 5ZM12 18.9C10.21 17.74 4.5 13.96 4.5 9.5C4.5 7.84 5.84 6.5 7.5 6.5C9.04 6.5 10.47 7.47 11.07 8.91L12 11.14L12.93 8.91C13.53 7.47 14.96 6.5 16.5 6.5C18.16 6.5 19.5 7.84 19.5 9.5C19.5 13.96 13.79 17.74 12 18.9Z";

function BadgeRow({ badges, color }: { badges: string[]; color: "Neutral" | "Inverse" }) {
  return (
    <div className={styles.badgeGroup}>
      {badges.map((label, i) => (
        <BadgeItem key={i} size="Small" color={color} label={label} />
      ))}
    </div>
  );
}

function VDivider() {
  return <span className={styles.vDivider} aria-hidden="true" />;
}

export function TextProductDetail({
  variants = "ProductList",
  subtitle = "Subtitle",
  subTitle = true,
  title = "Title",
  titleBadge = true,
  titleBadgeLabel = "Label",
  textPriceGroup = true,
  caption01 = true,
  caption2 = "Caption01",
  value01 = "99%",
  value01Discount = true,
  value02 = "99,999원",
  value03 = "/Period",
  value03Period = true,
  value05 = "99,999원",
  caption02 = true,
  caption021 = "Caption02-1",
  caption022 = "Caption02-2",
  caption03 = true,
  caption031 = "Caption03-1",
  caption032 = "Caption03-2",
  caption033 = "Caption03-3",
  captionIconItem1 = false,
  captionIconItem2 = false,
  count = "+2",
  captionCount = true,
  badgeGroup = true,
  badges,
  toggleItem = true,
  toggleCount = "9,999",
  button = true,
  buttonLabel = "Label",
  onButton,
  logoSrc,
  className,
}: TextProductDetailProps) {
  const badgeList = badges ?? ["Label", "Label", "Label"];
  const rootClass = [styles.root, styles[`variant-${variants}`], className].filter(Boolean).join(" ");

  // ── ProductList ──
  if (variants === "ProductList") {
    return (
      <div className={rootClass} data-cx-component="TextProductDetail" data-variant="ProductList">
        <div className={styles.textInfoGroup}>
          <div className={styles.textNameGroup}>
            {subTitle && <p className={styles.subtitle}>{subtitle}</p>}
            <p className={styles.title16}>{title}</p>
          </div>
        </div>

        {textPriceGroup && (
          <div className={styles.textPriceGroup}>
            {caption01 && <p className={styles.priceCaption}>{caption2}</p>}
            <div className={styles.priceRow}>
              {value01Discount && <span className={styles.priceDiscount}>{value01}</span>}
              <span className={styles.price}>{value02}</span>
              {value03Period && <span className={styles.pricePeriod}>{value03}</span>}
            </div>
            {caption02 && (
              <div className={styles.priceSubText}>
                <p>{caption021}</p>
                <p>{caption022}</p>
              </div>
            )}
          </div>
        )}

        {caption03 && (
          <div className={styles.subInfoRow}>
            <div className={styles.subInfoItem}>
              {captionIconItem1 && <IconDummy size={12} className={styles.captionIcon} />}
              <span className={styles.subInfo}>{caption031}</span>
            </div>
            <VDivider />
            <div className={styles.subInfoItem}>
              {captionIconItem2 && <IconDummy size={12} className={styles.captionIcon} />}
              <span className={styles.subInfo}>{caption032}</span>
            </div>
            {captionCount && <span className={styles.subInfo}>{count}</span>}
          </div>
        )}

        {badgeGroup && <BadgeRow badges={badgeList} color="Neutral" />}
      </div>
    );
  }

  // ── ProductSummation ──
  if (variants === "ProductSummation") {
    return (
      <div className={rootClass} data-cx-component="TextProductDetail" data-variant="ProductSummation">
        <div className={styles.textInfoGroup}>
          <div className={styles.textNameGroup}>
            {subTitle && <p className={styles.subtitle}>{subtitle}</p>}
            <div className={styles.titleRow}>
              <p className={styles.title18}>{title}</p>
              {titleBadge && <BadgeItem size="Large" color="Neutral" label={titleBadgeLabel} />}
            </div>
          </div>
        </div>

        {caption03 && (
          <div className={styles.subInfoRow}>
            <span className={styles.subInfo}>{caption031}</span>
            <VDivider />
            <span className={styles.subInfo}>{caption032}</span>
            <VDivider />
            <span className={styles.subInfo}>{caption033}</span>
            {captionCount && <span className={styles.subInfo}>{count}</span>}
          </div>
        )}

        {badgeGroup && <BadgeRow badges={badgeList} color="Neutral" />}
      </div>
    );
  }

  // ── ProductDetail ──
  if (variants === "ProductDetail") {
    return (
      <div className={rootClass} data-cx-component="TextProductDetail" data-variant="ProductDetail">
        <div className={styles.detailTitleRow}>
          <div className={styles.detailTextProduct}>
            {subTitle && <p className={styles.subtitleNowrap}>{subtitle}</p>}
            <p className={styles.title18}>{title}</p>
          </div>
          {toggleItem && <ToogleItem variant="None" ariaLabel="좋아요" />}
        </div>

        <div className={styles.detailPriceRow}>
          <div className={styles.detailPriceCol}>
            {textPriceGroup && (
              <div className={styles.detailPriceGroup}>
                <div className={styles.detailPriceText}>
                  <p className={styles.priceStrike}>{value05}</p>
                  <div className={styles.priceRow}>
                    {value01Discount && <span className={styles.priceDiscount18}>{value01}</span>}
                    <span className={styles.price18}>{value02}</span>
                    {value03Period && <span className={styles.pricePeriod}>{value03}</span>}
                  </div>
                </div>
                {caption03 && (
                  <div className={styles.subInfoRow}>
                    <span className={styles.subInfo14}>{caption031}</span>
                    <VDivider />
                    <span className={styles.subInfo14}>{caption032}</span>
                    <VDivider />
                    <span className={styles.subInfo14}>{caption033}</span>
                    {captionCount && <span className={styles.subInfo14}>{count}</span>}
                  </div>
                )}
              </div>
            )}
            {badgeGroup && <BadgeRow badges={badgeList} color="Neutral" />}
          </div>
          {button && (
            <button type="button" className={styles.outlineButton} onClick={onButton}>
              <span>{buttonLabel}</span>
              <svg className={styles.btnArrow} viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M4.75 2.5L8.25 6L4.75 9.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          )}
        </div>
      </div>
    );
  }

  // ── Variants4 (brand) ──
  return (
    <div className={rootClass} data-cx-component="TextProductDetail" data-variant="Variants4">
      <div className={styles.brandRow}>
        <ThumbnailRoundItem size="64" src={logoSrc} alt={subtitle} className={styles.brandThumb} />
        <div className={styles.brandTextGroup}>
          <div className={styles.detailTitleRow}>
            <div className={styles.detailTextProduct}>
              {subTitle && <p className={styles.subtitle14Inverse}>{subtitle}</p>}
              <p className={styles.title18Inverse}>{title}</p>
            </div>
            {toggleItem && (
              <div className={styles.brandToggle}>
                <span className={styles.brandHeart} aria-label="좋아요" role="img">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d={HEART_OFF_PATH} fill="currentColor" />
                  </svg>
                </span>
                <span className={styles.brandHeartCount}>{toggleCount}</span>
              </div>
            )}
          </div>
          {badgeGroup && <BadgeRow badges={badgeList} color="Inverse" />}
        </div>
      </div>
    </div>
  );
}
