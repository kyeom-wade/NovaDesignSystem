import React from "react";
import styles from "./TextGroupProductHorizontal.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.2--Token-Test- .TextGroupProductHorizontal (node 50946:59518)
// anatomy: root[ textNameGroup[ subTitle?, mainText, textSub? ], textPriceGroup?[ txtDiscount?[ discountLabel, discountAmount ], textPrice[ discountRate?, period?, txtPriceValue[ price, unit ] ] ], subTextGroup?[ subText1, divider, subText2, extraCount ], badgeList?[ badge* ] ]

interface Props {
  /** 서브타이틀 텍스트 (상품명 위 작은 레이블) */
  subTitle?: string;
  /** 상품 메인 텍스트 */
  mainText?: string;
  /** 메인 텍스트 아래 보조 텍스트 */
  subText?: string;
  /** 할인 금액 레이블 표시 여부 */
  showDiscount?: boolean;
  /** 할인 금액 (예: "- 999,999원") */
  discountAmount?: string;
  /** 할인율 텍스트 (예: "7%") */
  discountRate?: string;
  /** 월 단위 텍스트 표시 여부 */
  showPeriod?: boolean;
  /** 가격 표시 여부 */
  showPrice?: boolean;
  /** 가격 숫자 (단위 별도) */
  priceValue?: string;
  /** 보조 텍스트 그룹 표시 여부 */
  showSubTextGroup?: boolean;
  /** 보조 텍스트1 */
  subText1?: string;
  /** 보조 텍스트2 */
  subText2?: string;
  /** 추가 항목 수 (예: "+2") */
  extraCount?: string;
  /** 배지 목록 표시 여부 */
  showBadgeGroup?: boolean;
  /** 배지 텍스트 배열 */
  badges?: string[];
}

export function TextGroupProductHorizontal({
  subTitle = "SubTitle",
  mainText = "Main Text",
  subText = "Sub Text",
  showDiscount = true,
  discountAmount = "- 999,999원",
  discountRate = "7%",
  showPeriod = true,
  showPrice = true,
  priceValue = "99,000",
  showSubTextGroup = true,
  subText1 = "텍스트",
  subText2 = "텍스트",
  extraCount = "+2",
  showBadgeGroup = true,
  badges = ["할인", "적립", "사용"],
}: Props) {
  return (
    <div className={styles.root} data-cx-component="TextGroupProductHorizontal">
      {/* TextNameGroup */}
      <div className={styles.textNameGroup}>
        {subTitle && (
          <p className={styles.subTitle}>{subTitle}</p>
        )}
        <p className={styles.mainText}>{mainText}</p>
        {subText && (
          <p className={styles.textSub}>{subText}</p>
        )}
      </div>

      {/* TextPriceGroup */}
      {showPrice && (
        <div className={styles.textPriceGroup}>
          {showDiscount && (
            <div className={styles.txtDiscount}>
              <span className={styles.discountLabel}>최대할인</span>
              <span className={styles.discountAmount}>{discountAmount}</span>
            </div>
          )}
          <div className={styles.textPrice}>
            {showDiscount && discountRate && (
              <span className={styles.discountRate}>{discountRate}</span>
            )}
            {showPeriod && (
              <span className={styles.period}>월</span>
            )}
            <span className={styles.txtPriceValue}>
              <span className={styles.priceNumber}>{priceValue}</span>
              <span className={styles.priceUnit}>원</span>
            </span>
          </div>
        </div>
      )}

      {/* SubTextGroup */}
      {showSubTextGroup && (
        <div className={styles.subTextGroup}>
          <span className={styles.subTextItem}>{subText1}</span>
          <span className={styles.divider} aria-hidden="true" />
          <span className={styles.subTextItem}>{subText2}</span>
          {extraCount && (
            <span className={styles.extraCount}>{extraCount}</span>
          )}
        </div>
      )}

      {/* BadgeList */}
      {showBadgeGroup && badges.length > 0 && (
        <div className={styles.badgeList}>
          {badges.map((badge, i) => (
            <span key={i} className={styles.badge}>{badge}</span>
          ))}
        </div>
      )}
    </div>
  );
}
