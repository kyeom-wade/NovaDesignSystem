import React from "react";
import styles from "./CardProductHorizontalList.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.2--Token-Test- .CardProductHorizontalList (node 50964:30879)
// anatomy: root[ infoArea[ textGroupImage[ textGroup[ textNameGroup[category, name, benefit] ], thumbnail? ], infosub[ tagBadgeList?, iconBadgeList? ] ] ]

interface TagBadge {
  label: string;
}

interface IconBadge {
  /** Icon image URL */
  iconSrc?: string;
  /** Badge text */
  text: string;
}

interface Props {
  /** Product category label */
  category?: string;
  /** Product / brand name */
  name?: string;
  /** Short benefit description (e.g. 할인 ∙ 적립 ∙ 사용) */
  benefit?: string;
  /** Thumbnail image URL */
  thumbnailSrc?: string;
  /** Show the thumbnail image */
  showThumbnail?: boolean;
  /** Tag-style badge list (e.g. 스마트폰, 일반 …) */
  tagBadges?: TagBadge[];
  /** Show tag badge row */
  showTagBadges?: boolean;
  /** Icon badge list with small icon + text */
  iconBadges?: IconBadge[];
  /** Show icon badge row */
  showIconBadges?: boolean;
  className?: string;
}

export function CardProductHorizontalList({
  category = "카페/아이스크림",
  name = "베스킨라빈스",
  benefit = "할인 ∙ 적립 ∙ 사용",
  thumbnailSrc,
  showThumbnail = true,
  tagBadges = [
    { label: "스마트폰" },
    { label: "일반" },
    { label: "안심/보험" },
    { label: "유료" },
    { label: "일반" },
  ],
  showTagBadges = true,
  iconBadges = [
    { text: "혜택1" },
    { text: "혜택2" },
    { text: "혜택3" },
    { text: "혜택4" },
    { text: "혜택5" },
  ],
  showIconBadges = true,
  className,
}: Props) {
  return (
    <div
      className={[styles.root, className ?? ""].filter(Boolean).join(" ")}
      data-cx-component="CardProductHorizontalList"
    >
      <div className={styles.infoArea}>
        {/* Text + Thumbnail row */}
        <div className={styles.textGroupImage}>
          <div className={styles.textGroup}>
            <div className={styles.textNameGroup}>
              <p className={styles.category}>{category}</p>
              <p className={styles.name}>{name}</p>
              <p className={styles.benefit}>{benefit}</p>
            </div>
          </div>

          {showThumbnail && (
            <div className={styles.thumbnail}>
              {thumbnailSrc ? (
                <img src={thumbnailSrc} alt={name} className={styles.thumbnailImg} />
              ) : (
                <div className={styles.thumbnailPlaceholder} aria-hidden="true" />
              )}
            </div>
          )}
        </div>

        {/* Badge rows */}
        {(showTagBadges || showIconBadges) && (
          <div className={styles.infoSub}>
            {showTagBadges && tagBadges && tagBadges.length > 0 && (
              <div className={styles.tagBadgeList}>
                {tagBadges.map((badge, i) => (
                  <span key={i} className={styles.tagBadge}>
                    {badge.label}
                  </span>
                ))}
              </div>
            )}

            {showIconBadges && iconBadges && iconBadges.length > 0 && (
              <div className={styles.iconBadgeList}>
                {iconBadges.map((badge, i) => (
                  <div key={i} className={styles.iconBadgeItem}>
                    <span className={styles.iconBadgeIcon} aria-hidden="true">
                      {badge.iconSrc ? (
                        <img src={badge.iconSrc} alt="" className={styles.iconBadgeIconImg} />
                      ) : (
                        <span className={styles.iconBadgeIconPlaceholder} />
                      )}
                    </span>
                    <span className={styles.iconBadgeText}>{badge.text}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
