import React from "react";
import styles from "./Banner.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.2--Token-Test- .Banner (node 50990:58936)
// anatomy: root[ group[ bannerCard[ imageArea, textGroup[ title, subText ] ], indicator[ dot× 6 ] ] ]

interface Props {
  /** Card size variant: "Small" = 72 px tall, "Medium" = 112 px tall */
  variants?: "Small" | "Medium";
  /** Show the dot-indicator strip below the card */
  indicator?: boolean;
  /** Primary title text (Small: single line; Medium: can wrap to 2 lines) */
  title?: string;
  /** Secondary sub-text beneath the title */
  subText?: string;
  /** Optional image URL rendered in the right image area */
  imageUrl?: string;
  /** Alt text for the image */
  imageAlt?: string;
  /** Click handler for the banner card */
  onClick?: () => void;
}

export function Banner({
  variants = "Small",
  indicator = true,
  title = variants === "Medium" ? "iPhone 20 사전 예약 시\n에어팟 프로 증정" : "T우주 x 신한카드 결제 혜택",
  subText = variants === "Medium" ? "사전예약 클럽 멤버십 혜택" : "우주패스 all, mini 무료 구독",
  imageUrl,
  imageAlt = "",
  onClick,
}: Props) {
  const isMedium = variants === "Medium";

  const titleLines = title.split("\n");

  return (
    <div className={styles.root} data-cx-component="Banner">
      <div className={styles.group}>
        {/* Banner card */}
        <button
          type="button"
          className={`${styles.card} ${isMedium ? styles.cardMedium : styles.cardSmall}`}
          onClick={onClick}
          aria-label={title}
        >
          {/* Image area */}
          {imageUrl && (
            <div className={`${styles.imageArea} ${isMedium ? styles.imageAreaMedium : styles.imageAreaSmall}`}>
              <img
                src={imageUrl}
                alt={imageAlt}
                className={`${styles.image} ${isMedium ? styles.imageMedium : styles.imageSmall}`}
              />
            </div>
          )}

          {/* Text group */}
          <div className={`${styles.textGroup} ${isMedium ? styles.textGroupMedium : styles.textGroupSmall}`}>
            <p className={`${styles.title} ${isMedium ? styles.titleMedium : styles.titleSmall}`}>
              {titleLines.map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  {i < titleLines.length - 1 && <br />}
                </React.Fragment>
              ))}
            </p>
            <p className={styles.subText}>{subText}</p>
          </div>
        </button>

        {/* Dot indicator */}
        {indicator && (
          <div className={styles.indicator} aria-hidden="true">
            {Array.from({ length: 6 }, (_, i) => (
              <span key={i} className={`${styles.dot} ${i === 0 ? styles.dotActive : ""}`} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
