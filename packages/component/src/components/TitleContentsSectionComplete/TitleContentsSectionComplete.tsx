import React from "react";
import styles from "./TitleContentsSectionComplete.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.2--Token-Test- .TitleContentsSectionComplete (node 50943:30595)
// anatomy: wrap[ titleText[ titleSubText[ thumbnailRound, subLabel ], titleMain ], subText[ description ] ]

interface Props {
  /** 상단 서브 레이블 텍스트 (기기명 등) */
  subLabel?: string;
  /** 서브 레이블 행 표시 여부 */
  showTitleSubText?: boolean;
  /** 썸네일 이미지 표시 여부 */
  showThumbnail?: boolean;
  /** 썸네일 이미지 URL */
  thumbnailSrc?: string;
  /** 메인 타이틀 텍스트 */
  title?: string;
  /** 하단 보조 설명 텍스트 */
  description?: string;
}

export function TitleContentsSectionComplete({
  subLabel = "갤럭시 S29 ∙ SM-S942NV",
  showTitleSubText = true,
  showThumbnail = true,
  thumbnailSrc,
  title = "축하드려요 지훈님,\n개통이 완료되었어요",
  description = "지금부터 새로운 휴대폰 사용이 가능해요.",
}: Props) {
  return (
    <div className={styles.wrap} data-cx-component="TitleContentsSectionComplete">
      <div className={styles.titleText}>
        {showTitleSubText && (
          <div className={styles.titleSubText}>
            {showThumbnail && (
              <div className={styles.thumbnailRound}>
                {thumbnailSrc && (
                  <img
                    src={thumbnailSrc}
                    alt=""
                    className={styles.thumbnailImg}
                  />
                )}
              </div>
            )}
            <p className={styles.subLabel}>{subLabel}</p>
          </div>
        )}
        <p className={styles.titleMain}>
          {title.split("\n").map((line, i, arr) => (
            <React.Fragment key={i}>
              {line}
              {i < arr.length - 1 && <br />}
            </React.Fragment>
          ))}
        </p>
      </div>

      <div className={styles.subText}>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}
