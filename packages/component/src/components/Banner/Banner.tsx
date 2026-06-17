import React from "react";
import styles from "./Banner.module.css";
import { BannerImageItem } from "../BannerImageItem/BannerImageItem";
import { IndicatorItem } from "../IndicatorItem/IndicatorItem";

// Figma SSOT: SKT-Next_UI-Draft_3.3 .Banner (node 50990:58936)
// anatomy: root[ BannerGroup[ BannerImageItem, TextGroup[ title, subtitle ] ], ?IndicatorItem ]

export interface BannerProps {
  /** Card size variant: "Small" = 72 px tall, "Medium" = 112 px tall */
  variants?: "Small" | "Medium";
  /** Show the dot-indicator strip below the card */
  indicator?: boolean;
  /** Primary title text (Small: single line; Medium: can wrap to 2 lines) */
  title?: string;
  /** Secondary text beneath the title. Figma property name: subtitle */
  subtitle?: string;
  /** Legacy alias for subtitle */
  subText?: string;
  /** Optional image URL rendered in the right image area */
  imageUrl?: string;
  /** Alias matching BannerImageItem naming */
  imageSrc?: string;
  /** Alt text for the image */
  imageAlt?: string;
  /** Active indicator index */
  activeIndex?: number;
  /** Click handler for the banner card */
  onClick?: () => void;
  className?: string;
}

export function Banner({
  variants = "Small",
  indicator = true,
  title = "Title",
  subtitle,
  subText,
  imageUrl,
  imageSrc,
  imageAlt = "",
  activeIndex = 0,
  onClick,
  className,
}: BannerProps) {
  const isMedium = variants === "Medium";
  const resolvedSubtitle = subtitle ?? subText ?? "Subtitle";
  const resolvedImageSrc = imageSrc ?? imageUrl;
  const titleLines = title.split("\n");

  return (
    <div
      className={[styles.root, className].filter(Boolean).join(" ")}
      data-cx-component="Banner"
      data-variant={variants}
    >
      <div className={styles.group}>
        <button
          type="button"
          className={[styles.bannerGroup, isMedium ? styles.bannerGroupMedium : styles.bannerGroupSmall].join(" ")}
          onClick={onClick}
          aria-label={title}
        >
          <BannerImageItem
            className={styles.bannerImageItem}
            variants={variants}
            background
            imageSrc={resolvedImageSrc}
            imageAlt={imageAlt}
          />
          <div className={styles.textGroup}>
            <p className={styles.title}>
              {titleLines.map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  {i < titleLines.length - 1 && <br />}
                </React.Fragment>
              ))}
            </p>
            <p className={styles.subtitle}>{resolvedSubtitle}</p>
          </div>
        </button>

        {indicator && (
          <IndicatorItem
            count={6}
            activeIndex={activeIndex}
            ariaLabel="배너 페이지 인디케이터"
          />
        )}
      </div>
    </div>
  );
}
