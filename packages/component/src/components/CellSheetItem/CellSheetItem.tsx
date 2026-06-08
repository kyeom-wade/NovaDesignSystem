import React from "react";
import styles from "./CellSheetItem.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.2--Token-Test- .CellSheetItem (node 51082:44667)
// anatomy: root[ leftItem[ thumbnail, text[ label, priceRow[ price, perMonth ] | noticeLabel ] ], rightItem?[ arrowIcon | buttonItem ] ]

export type CellSheetItemVariant = "Price" | "Notice";

export interface CellSheetItemProps {
  /** Visual variant — "Price" shows a product with price; "Notice" shows a cart notification */
  variant?: CellSheetItemVariant;
  /** Thumbnail image src */
  thumbnailSrc?: string;
  /** Product name / notification label */
  label?: string;
  /** Price text (Price variant only) */
  price?: string;
  /** Per-month suffix text (Price variant only) */
  perMonth?: string;
  /** Fee note below price (Price variant only) */
  feeNote?: string;
  /** Whether to show the right-side item (arrow icon for Price, button for Notice) */
  rightItem?: boolean;
  /** Button label in the right item (Notice variant only) */
  buttonLabel?: string;
  /** Click handler for the right item */
  onRightItemClick?: () => void;
}

const DEFAULT_THUMBNAIL =
  "https://www.figma.com/api/mcp/asset/1916624a-6ead-458a-a3c6-31f7bfdd7af5";

export function CellSheetItem({
  variant = "Price",
  thumbnailSrc = DEFAULT_THUMBNAIL,
  label = variant === "Notice" ? "장바구니에 상품을 담았어요" : "iPhone 17 Pro 코스믹 오렌지 512G",
  price = "129,797원",
  perMonth = "/월",
  feeNote = "(부가세, 할부수수료 포함)",
  rightItem = false,
  buttonLabel = "버튼",
  onRightItemClick,
}: CellSheetItemProps) {
  return (
    <div
      className={styles.root}
      data-cx-component="CellSheetItem"
      data-variant={variant}
      data-right-item={rightItem ? "true" : "false"}
    >
      {/* Left item */}
      <div className={styles.leftItem}>
        <div className={styles.thumbnail}>
          <img alt="" className={styles.thumbnailImg} src={thumbnailSrc} />
        </div>

        {variant === "Price" && (
          <div className={styles.textBlock}>
            <p className={styles.productLabel}>{label}</p>
            <div className={styles.priceRow}>
              <div className={styles.priceGroup}>
                <span className={styles.price}>{price}</span>
                <span className={styles.perMonth}>{perMonth}</span>
              </div>
              <span className={styles.feeNote}>{feeNote}</span>
            </div>
          </div>
        )}

        {variant === "Notice" && (
          <p className={styles.noticeLabel}>{label}</p>
        )}
      </div>

      {/* Right item */}
      {rightItem && (
        <div className={styles.rightItem}>
          {variant === "Price" && (
            <button
              type="button"
              className={styles.arrowBtn}
              onClick={onRightItemClick}
              aria-label="자세히 보기"
            >
              {/* Chevron right SVG — replaces remote asset */}
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M6 4L10 8L6 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          )}

          {variant === "Notice" && (
            <button
              type="button"
              className={styles.noticeBtn}
              onClick={onRightItemClick}
            >
              {buttonLabel}
            </button>
          )}
        </div>
      )}
    </div>
  );
}
