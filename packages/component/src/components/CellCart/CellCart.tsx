import React from "react";
import styles from "./CellCart.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.2--Token-Test- .CellCart (node 51558:29668)
// anatomy: wrap[ titleRow[ titleText, closeBtn ], productRow[ thumbnail, info[ textGroup[ brand, productName ], adultNotice ] ], summaryBox[ slot[ tableRow×2, divider, totalRow ] ], changeButton ]

interface TableRow {
  /** 왼쪽 레이블 */
  label: string;
  /** 오른쪽 값 */
  value: string;
}

interface Props {
  /** 리스트 타이틀 텍스트 */
  title?: string;
  /** 타이틀 영역 표시 여부 */
  showTitle?: boolean;
  /** 타이틀 닫기 버튼 클릭 핸들러 */
  onClose?: () => void;
  /** 상품 썸네일 이미지 URL */
  thumbnailSrc?: string;
  /** 브랜드명 / 패스명 */
  brandName?: string;
  /** 상품명 */
  productName?: string;
  /** 성인 상품 안내 문구 표시 여부 */
  showAdultNotice?: boolean;
  /** 성인 상품 안내 문구 텍스트 */
  adultNoticeText?: string;
  /** 요약 박스 일반 행 목록 (label + value) */
  summaryRows?: TableRow[];
  /** 요약 박스 합계 행 레이블 */
  totalLabel?: string;
  /** 요약 박스 합계 행 값 */
  totalValue?: string;
  /** 하단 텍스트 버튼(상품 옵션 변경하기) 표시 여부 */
  showChangeButton?: boolean;
  /** 하단 텍스트 버튼 레이블 */
  changeButtonLabel?: string;
  /** 하단 텍스트 버튼 클릭 핸들러 */
  onChangeButton?: () => void;
}

export function CellCart({
  title = "리스트 타이틀",
  showTitle = true,
  onClose,
  thumbnailSrc,
  brandName = "브랜드명 / 패스명",
  productName = "상품명 최대 2줄 이후 말줄임",
  showAdultNotice = true,
  adultNoticeText = "19세 미만은 구독할 수 없는 상품입니다.",
  summaryRows = [
    { label: "상품 금액", value: "53,000원" },
    { label: "첫 구독 할인가", value: "-5,000원" },
  ],
  totalLabel = "이용 금액",
  totalValue = "1개월 / 48,000원",
  showChangeButton = true,
  changeButtonLabel = "상품 옵션 변경하기",
  onChangeButton,
}: Props) {
  return (
    <div className={styles.wrap} data-cx-component="CellCart">
      {/* Title row */}
      {showTitle && (
        <div className={styles.titleRow}>
          <span className={styles.titleText}>{title}</span>
          <button
            type="button"
            className={styles.closeBtn}
            onClick={onClose}
            aria-label="닫기"
          >
            <span className={styles.closeBtnIcon} aria-hidden="true" />
          </button>
        </div>
      )}

      {/* Product row */}
      <div className={styles.productRow}>
        <div className={styles.thumbnail}>
          {thumbnailSrc ? (
            <img src={thumbnailSrc} alt={productName} className={styles.thumbnailImg} />
          ) : (
            <div className={styles.thumbnailPlaceholder} aria-hidden="true" />
          )}
        </div>
        <div className={styles.productInfo}>
          <div className={styles.textGroup}>
            <p className={styles.brandName}>{brandName}</p>
            <p className={styles.productName}>{productName}</p>
          </div>
          {showAdultNotice && (
            <div className={styles.adultNotice}>
              <span className={styles.adultNoticeIcon} aria-hidden="true" />
              <p className={styles.adultNoticeText}>{adultNoticeText}</p>
            </div>
          )}
        </div>
      </div>

      {/* Summary box */}
      <div className={styles.summaryBox}>
        {summaryRows.map((row, idx) => (
          <div className={styles.summaryTableRow} key={idx}>
            <span className={styles.summaryLabel}>{row.label}</span>
            <span className={styles.summaryValue}>{row.value}</span>
          </div>
        ))}
        <div className={styles.dividerWrapper}>
          <div className={styles.divider} />
        </div>
        <div className={styles.summaryTotalRow}>
          <span className={styles.summaryTotalLabel}>{totalLabel}</span>
          <span className={styles.summaryTotalValue}>{totalValue}</span>
        </div>
      </div>

      {/* Change button */}
      {showChangeButton && (
        <div className={styles.changeButtonWrapper}>
          <button
            type="button"
            className={styles.changeButton}
            onClick={onChangeButton}
          >
            {changeButtonLabel}
          </button>
        </div>
      )}
    </div>
  );
}
