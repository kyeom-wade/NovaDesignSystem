import React from "react";
import styles from "./CellProductItem.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.2--Token-Test- .CellProductItem (node 51650:65033)
// anatomy: root[ thumbnail, info[ infoRow[ textGroup[ brand, productName ], adultWarning?, closeBtn? ], cellBox?[ benefitText, tableRow*, tableRow* ] ] ]

interface CellTableRow {
  label: string;
  value: string;
}

interface Props {
  /** Thumbnail image URL */
  thumbnailSrc?: string;
  /** Brand and path text above the product name */
  brand?: string;
  /** Product name — supports up to 2 lines then truncates */
  productName?: string;
  /** Show adult (19+) warning row */
  showAdultWarning?: boolean;
  /** Adult warning message text */
  adultWarningText?: string;
  /** Show the close/remove icon button in top-right */
  showCloseButton?: boolean;
  /** Callback fired when the close button is pressed */
  onClose?: () => void;
  /** Show the bottom benefit info box (CellBoxItem) */
  showCellBox?: boolean;
  /** Primary benefit text shown at the top of the info box */
  benefitText?: string;
  /** Table rows shown inside the info box */
  tableRows?: CellTableRow[];
  className?: string;
}

export function CellProductItem({
  thumbnailSrc,
  brand = "브랜드명 / 패스명",
  productName = "상품명 최대 2줄 이후 말줄임",
  showAdultWarning = true,
  adultWarningText = "19세 미만은 구독할 수 없는 상품입니다.",
  showCloseButton = true,
  onClose,
  showCellBox = true,
  benefitText = "배달의민족 5,000원 쿠폰 + 배민 3,000원 쿠폰",
  tableRows = [
    { label: "타이틀", value: "내용 들어가는 부분" },
    { label: "타이틀", value: "내용 들어가는 부분" },
  ],
  className,
}: Props) {
  return (
    <div
      className={[styles.root, className ?? ""].filter(Boolean).join(" ")}
      data-cx-component="CellProductItem"
    >
      {/* Thumbnail */}
      <div className={styles.thumbnail}>
        {thumbnailSrc ? (
          <img src={thumbnailSrc} alt="" className={styles.thumbnailImg} />
        ) : (
          <div className={styles.thumbnailPlaceholder} aria-hidden="true" />
        )}
        <div className={styles.thumbnailDim} aria-hidden="true" />
      </div>

      {/* Info column */}
      <div className={styles.info}>
        {/* Top row: text + close button */}
        <div className={styles.infoRow}>
          <div className={styles.textGroup}>
            {/* Brand / path */}
            <p className={styles.brand}>{brand}</p>
            {/* Product name (up to 2 lines) */}
            <p className={styles.productName}>{productName}</p>

            {/* Adult warning */}
            {showAdultWarning && (
              <div className={styles.adultWarning}>
                {/* Info icon */}
                <svg
                  className={styles.adultIcon}
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  aria-hidden="true"
                >
                  <circle
                    cx="6"
                    cy="6"
                    r="5"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                  <line
                    x1="6"
                    y1="5"
                    x2="6"
                    y2="8.5"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                  />
                  <circle cx="6" cy="3.5" r="0.6" fill="currentColor" />
                </svg>
                <span className={styles.adultText}>{adultWarningText}</span>
              </div>
            )}
          </div>

          {/* Close button */}
          {showCloseButton && (
            <button
              type="button"
              className={styles.closeBtn}
              onClick={onClose}
              aria-label="삭제"
            >
              {/* X icon */}
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M1.5 1.5L8.5 8.5M8.5 1.5L1.5 8.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          )}
        </div>

        {/* CellBoxItem — benefit info */}
        {showCellBox && (
          <div className={styles.cellBox}>
            <div className={styles.cellBoxSlot}>
              {/* Benefit text row */}
              <div className={styles.cellBenefitRow}>
                <p className={styles.cellBenefitText}>{benefitText}</p>
              </div>

              {/* Table rows */}
              {tableRows.map((row, i) => (
                <div key={i} className={styles.cellTableRow}>
                  <span className={styles.cellTableLabel}>{row.label}</span>
                  <span className={styles.cellTableValue}>{row.value}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
