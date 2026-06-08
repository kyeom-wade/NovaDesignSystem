import React from "react";
import styles from "./CellBrandItem.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.2--Token-Test- .CellBrandItem (node 51711:79865)
// anatomy: root[ contentsGroup[ thumbnail[img], textGroup[ subTitle?, mainText, subText?, priceGroup?, subTextGroup?, badgeList? ] ], rightButton? ]

interface Props {
  /** Brand logo image src */
  thumbnailSrc?: string;
  /** Optional subtitle above the main text */
  subTitle?: string;
  /** Whether to show the subtitle */
  showSubTitle?: boolean;
  /** Primary brand/product name */
  mainText?: string;
  /** Optional sub text below the main text */
  subText?: string;
  /** Whether to show the sub text */
  showSubText?: boolean;
  /** Label on the pill action button */
  rightButtonLabel?: string;
  /** Whether to show the right pill button */
  rightButton?: boolean;
  /** Click handler for the right button */
  onRightButtonClick?: () => void;
  className?: string;
}

export function CellBrandItem({
  thumbnailSrc,
  subTitle = "SubTitle",
  showSubTitle = false,
  mainText = "Main Text",
  subText = "Sub Text",
  showSubText = true,
  rightButtonLabel = "사용",
  rightButton = true,
  onRightButtonClick,
  className,
}: Props) {
  return (
    <div
      className={[styles.root, className ?? ""].filter(Boolean).join(" ")}
      data-cx-component="CellBrandItem"
    >
      {/* contentsGroup: thumbnail + text */}
      <div className={styles.contentsGroup}>
        {/* Thumbnail */}
        <div className={styles.thumbnail}>
          {thumbnailSrc ? (
            <img src={thumbnailSrc} alt="" className={styles.thumbnailImg} />
          ) : (
            <div className={styles.thumbnailPlaceholder} aria-hidden="true" />
          )}
        </div>

        {/* Text group */}
        <div className={styles.textGroup}>
          {showSubTitle && (
            <p className={styles.subTitle}>{subTitle}</p>
          )}
          <p className={styles.mainText}>{mainText}</p>
          {showSubText && (
            <p className={styles.subText}>{subText}</p>
          )}
        </div>
      </div>

      {/* Right pill button */}
      {rightButton && (
        <button
          type="button"
          className={styles.rightButton}
          onClick={onRightButtonClick}
        >
          {rightButtonLabel}
        </button>
      )}
    </div>
  );
}
