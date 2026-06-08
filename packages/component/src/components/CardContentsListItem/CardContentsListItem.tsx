import React from "react";
import styles from "./CardContentsListItem.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.2--Token-Test- .CardContentsListItem (node 51084:42807)
// anatomy: root[ {Profile: avatarThumb, profileName, profilePhone, actionBtn} | {Data: leftArea[titleRow[titleText, badge], subTitle], iconArea} | {Barcode: barcodeImg, barcodeNumRow[nums, time]} | {Product: thumbSquare, textGroup[mainText, price]} | {Benefit: thumbRound, textGroup[mainText, subTexts, badgeList]} | {TaskCard: gradientBg, imageArea} ]

export type CardContentsListItemVariant =
  | "Profile"
  | "Data"
  | "Barcode"
  | "Product"
  | "Benefit"
  | "TaskCard";

interface Props {
  /** Which card layout variant to render */
  variant?: CardContentsListItemVariant;
  /** Profile: user name */
  profileName?: string;
  /** Profile: phone number */
  profilePhone?: string;
  /** Profile: action button label */
  actionLabel?: string;
  /** Profile: callback for action button */
  onAction?: () => void;
  /** Data/Benefit: main title text */
  title?: string;
  /** Data: whether to show the title row */
  showTitle?: boolean;
  /** Data: badge text next to title */
  badgeText?: string;
  /** Data: whether to show badge */
  showBadge?: boolean;
  /** Data: sub-title / description text */
  subTitle?: string;
  /** Barcode: barcode number segments */
  barcodeNumbers?: [string, string, string, string];
  /** Barcode: expiry/time label */
  barcodeTime?: string;
  /** Product/Benefit: main text */
  mainText?: string;
  /** Product: price label (e.g. "월99,000원") */
  priceText?: string;
  /** Benefit: sub text list (shown below main text) */
  subTexts?: string[];
  /** Benefit: badge labels */
  badges?: string[];
  /** Product/Benefit/Profile: thumbnail image src */
  thumbnailSrc?: string;
  /** TaskCard: first line heading */
  taskTitle?: string;
  /** TaskCard: second line body text */
  taskBody?: string;
  /** TaskCard: decorative image src for right side */
  taskImageSrc?: string;
}

export function CardContentsListItem({
  variant = "Profile",
  profileName = "박지훈님",
  profilePhone = "010-1234-5678",
  actionLabel = "버튼",
  onAction,
  title = "타이틀",
  showTitle = true,
  badgeText = "Badge",
  showBadge = true,
  subTitle = "서브타이틀",
  barcodeNumbers = ["1234", "4561", "1506", "4932"],
  barcodeTime = "19:58",
  mainText = "Main Text",
  priceText = "월99,000원",
  subTexts = ["Sub Text"],
  badges = ["할인", "적립", "사용"],
  thumbnailSrc,
  taskTitle = "Task Title",
  taskBody = "내용 텍스트",
  taskImageSrc,
}: Props) {
  return (
    <div
      className={[styles.root, styles[`variant-${variant}`]].join(" ")}
      data-cx-component="CardContentsListItem"
      data-variant={variant}
    >
      {variant === "Profile" && (
        <>
          <div className={styles.profileLeft}>
            <div className={styles.profileAvatar}>
              {thumbnailSrc ? (
                <img src={thumbnailSrc} alt="" className={styles.avatarImg} />
              ) : (
                <div className={styles.avatarPlaceholder} />
              )}
            </div>
            <span className={styles.profileName}>{profileName}</span>
            <span className={styles.profilePhone}>{profilePhone}</span>
          </div>
          <button
            type="button"
            className={styles.actionBtn}
            onClick={onAction}
          >
            {actionLabel}
          </button>
        </>
      )}

      {variant === "Data" && (
        <>
          <div className={styles.dataLeft}>
            {showTitle && (
              <div className={styles.dataTitleRow}>
                <span className={styles.dataTitle}>{title}</span>
                {showBadge && (
                  <span className={styles.dataBadge}>{badgeText}</span>
                )}
              </div>
            )}
            <span className={styles.dataSubTitle}>{subTitle}</span>
          </div>
          <div className={styles.dataIconArea}>
            <svg
              className={styles.dataIcon}
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="2" />
              <path d="M14 20h12M20 14l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </>
      )}

      {variant === "Barcode" && (
        <div className={styles.barcodeArea}>
          <div className={styles.barcodeImg}>
            {/* Barcode visual placeholder — replace with real barcode renderer */}
            <svg
              viewBox="0 0 369 48"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.barcodeSvg}
              aria-label="바코드"
            >
              {Array.from({ length: 60 }, (_, i) => (
                <rect
                  key={i}
                  x={i * 6 + (i % 3 === 0 ? 1 : 0)}
                  y="0"
                  width={i % 5 === 0 ? 3 : i % 3 === 0 ? 2 : 1}
                  height="48"
                  fill="#060c1f"
                />
              ))}
            </svg>
          </div>
          <div className={styles.barcodeNumRow}>
            <div className={styles.barcodeNums}>
              {barcodeNumbers.map((n, i) => (
                <span key={i} className={styles.barcodeNum}>
                  {n}
                </span>
              ))}
            </div>
            <span className={styles.barcodeTime}>{barcodeTime}</span>
          </div>
        </div>
      )}

      {variant === "Product" && (
        <>
          <div className={styles.productThumb}>
            {thumbnailSrc ? (
              <img src={thumbnailSrc} alt="" className={styles.thumbImg} />
            ) : (
              <div className={styles.thumbPlaceholder} />
            )}
          </div>
          <div className={styles.productTextGroup}>
            <span className={styles.productMainText}>{mainText}</span>
            <span className={styles.productPrice}>{priceText}</span>
          </div>
        </>
      )}

      {variant === "Benefit" && (
        <>
          <div className={styles.benefitThumbWrap}>
            <div className={styles.benefitThumb}>
              {thumbnailSrc ? (
                <img src={thumbnailSrc} alt="" className={styles.thumbImg} />
              ) : (
                <div className={styles.benefitThumbPlaceholder} />
              )}
            </div>
          </div>
          <div className={styles.benefitTextGroup}>
            <span className={styles.benefitMainText}>{mainText}</span>
            {subTexts.length > 0 && (
              <div className={styles.benefitSubTexts}>
                {subTexts.map((t, i) => (
                  <React.Fragment key={i}>
                    {i > 0 && <span className={styles.subTextDivider} />}
                    <span className={styles.benefitSubText}>{t}</span>
                  </React.Fragment>
                ))}
              </div>
            )}
            {badges.length > 0 && (
              <div className={styles.benefitBadgeList}>
                {badges.map((b, i) => (
                  <span key={i} className={styles.benefitBadge}>
                    {b}
                  </span>
                ))}
              </div>
            )}
          </div>
        </>
      )}

      {variant === "TaskCard" && (
        <div className={styles.taskCardInner}>
          <div className={styles.taskTextArea}>
            <span className={styles.taskTitle}>{taskTitle}</span>
            <span className={styles.taskBody}>{taskBody}</span>
          </div>
          {taskImageSrc && (
            <div className={styles.taskImageArea}>
              <img src={taskImageSrc} alt="" className={styles.taskImg} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
