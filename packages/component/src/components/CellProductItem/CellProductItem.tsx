import React from "react";
import styles from "./CellProductItem.module.css";
import { ThumbnailSquareItem } from "../ThumbnailSquareItem/ThumbnailSquareItem";
// Figma SSOT: SKT-Next_UI-Draft_3.3 .CellProductItem (node 55406:33508)
// anatomy: root[ thumbnail(48), info[ infoRow[ text[ subtitle, title(2line) ], helpText?[ infoIcon, dangerText ], closeButton? ] ] ]
// 상품 선택/요약 리스트의 단일 상품 행 — 썸네일 + 브랜드/상품명 + 안내(helpText) + 닫기.

interface Props {
  /** 썸네일 이미지 URL */
  thumbnailSrc?: string;
  /** 브랜드명 / 패스명 (상품명 위 보조 텍스트) */
  subtitle?: string;
  /** 상품명 — 최대 2줄 이후 말줄임 */
  title?: string;
  /** 안내 텍스트 행(info 아이콘 + danger 메시지) 표시 여부 */
  helpText?: boolean;
  /** 안내 텍스트 메시지 */
  helpTextLabel?: string;
  /** 우측 상단 닫기 아이콘 표시 여부 */
  closeButton?: boolean;
  /** 닫기 클릭 콜백 */
  onClose?: () => void;
  className?: string;
}

export function CellProductItem({
  thumbnailSrc,
  subtitle = "브랜드명 / 패스명",
  title = "상품명 최대 2줄 이후 말줄임 상품명 최대 2줄 이후 말줄임",
  helpText = true,
  helpTextLabel = "19세 미만은 구독할 수 없는 상품입니다.",
  closeButton = true,
  onClose,
  className,
}: Props) {
  return (
    <div
      className={[styles.root, className ?? ""].filter(Boolean).join(" ")}
      data-cx-component="CellProductItem"
    >
      {/* Thumbnail 48 (rounded 8) */}
      <div className={styles.thumbnail}>
        <ThumbnailSquareItem size="48" src={thumbnailSrc} dimMultiply />
      </div>

      {/* Info column */}
      <div className={styles.info}>
        <div className={styles.infoRow}>
          <div className={styles.textCol}>
            <div className={styles.text}>
              <p className={styles.subtitle}>{subtitle}</p>
              <p className={styles.title}>{title}</p>
            </div>

            {helpText && (
              <div className={styles.helpText}>
                <span className={styles.helpIcon} aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="6.4" stroke="currentColor" strokeWidth="1.2" />
                    <circle cx="8" cy="5.2" r="0.85" fill="currentColor" />
                    <path d="M8 7.4V11.2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                </span>
                <span className={styles.helpLabel}>{helpTextLabel}</span>
              </div>
            )}
          </div>

          {closeButton && (
            <button
              type="button"
              className={styles.closeBtn}
              onClick={onClose}
              aria-label="삭제"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M4 4L12 12M12 4L4 12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
