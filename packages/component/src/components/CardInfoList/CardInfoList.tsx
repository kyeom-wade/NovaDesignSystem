import React from "react";
import styles from "./CardInfoList.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.2--Token-Test- .CardInfoList (node 50943:29055)
// anatomy: root[ brand: contentsGroup[thumbnail, textGroup[mainText, subText?, badgeList?]] | place: contentsGroup[iconItem, textGroup[mainText, subText?]], rightButton? | coupon: contentsGroup[thumbnail, textGroup[mainText, subText?, badgeList?]], rightButton? | listCardMap: imageMap ]

interface BadgeItem {
  label: string;
}

interface Props {
  /** Layout variant — Brand (no button), Coupon (with pill button), Place (icon + button), ListCardMap (map image) */
  variant?: "Brand" | "Coupon" | "Place" | "ListCardMap";
  /** Thumbnail image src (Brand / Coupon variants) */
  thumbnailSrc?: string;
  /** Icon image src (Place variant) */
  iconSrc?: string;
  /** Map image src (ListCardMap variant) */
  mapSrc?: string;
  /** Primary text */
  mainText?: string;
  /** Secondary text below mainText */
  subText?: string;
  /** Show the sub text */
  showSubText?: boolean;
  /** Badge list items (Brand / Coupon variants) */
  badges?: BadgeItem[];
  /** Label on the right pill action button (Place / Coupon) */
  rightButtonLabel?: string;
  /** Show the right pill action button */
  showRightButton?: boolean;
  /** Click handler for the right button */
  onRightButtonClick?: () => void;
  className?: string;
}

export function CardInfoList({
  variant = "Brand",
  thumbnailSrc,
  iconSrc,
  mapSrc,
  mainText = "Main Text",
  subText = "Sub Text",
  showSubText = true,
  badges = [{ label: "할인" }, { label: "적립" }, { label: "사용" }],
  rightButtonLabel = "사용",
  showRightButton,
  onRightButtonClick,
  className,
}: Props) {
  const defaultShowRightButton =
    showRightButton !== undefined
      ? showRightButton
      : variant === "Place" || variant === "Coupon";

  return (
    <div
      className={[styles.root, styles[`variant${variant}`], className ?? ""].filter(Boolean).join(" ")}
      data-cx-component="CardInfoList"
      data-variant={variant}
    >
      {/* ── Brand / Coupon ── */}
      {(variant === "Brand" || variant === "Coupon") && (
        <>
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
              <p className={styles.mainText}>{mainText}</p>
              {showSubText && <p className={styles.subText}>{subText}</p>}
              {badges && badges.length > 0 && (
                <div className={styles.badgeList}>
                  {badges.map((b, i) => (
                    <span key={i} className={styles.badge}>{b.label}</span>
                  ))}
                </div>
              )}
            </div>
          </div>

          {defaultShowRightButton && (
            <button
              type="button"
              className={styles.rightButton}
              onClick={onRightButtonClick}
            >
              {rightButtonLabel}
            </button>
          )}
        </>
      )}

      {/* ── Place ── */}
      {variant === "Place" && (
        <>
          <div className={styles.contentsGroup}>
            {/* Icon */}
            <div className={styles.iconItem}>
              {iconSrc ? (
                <img src={iconSrc} alt="" className={styles.iconImg} />
              ) : (
                <div className={styles.iconPlaceholder} aria-hidden="true" />
              )}
            </div>

            {/* Text group */}
            <div className={styles.textGroup}>
              <p className={styles.mainText}>{mainText}</p>
              {showSubText && <p className={styles.subText}>{subText}</p>}
            </div>
          </div>

          {defaultShowRightButton && (
            <button
              type="button"
              className={styles.rightButton}
              onClick={onRightButtonClick}
            >
              {rightButtonLabel}
            </button>
          )}
        </>
      )}

      {/* ── ListCardMap ── */}
      {variant === "ListCardMap" && (
        <div className={styles.imageMap}>
          {mapSrc ? (
            <img src={mapSrc} alt="지도" className={styles.mapImg} />
          ) : (
            <div className={styles.mapPlaceholder} aria-hidden="true" />
          )}
        </div>
      )}
    </div>
  );
}
