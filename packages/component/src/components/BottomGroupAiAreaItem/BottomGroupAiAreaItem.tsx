import React from "react";
import styles from "./BottomGroupAiAreaItem.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.2--Token-Test- .BottomGroupAiAreaItem (node 51308:127243)
// anatomy: root[ iconMask[ iconBg, iconImg ], buttonRow[ primaryLabel?(text), divider?, secondaryLabel?(text) ] ]
// Variants: "1 Botton" = single CTA, "2 Botton" = two-split CTA (선물하기 | 구독하기)

interface Props {
  /** Layout variant: single button or two-split button */
  variant?: "1 Botton" | "2 Botton";
  /** Primary CTA label — used as-is for "1 Botton", becomes the right label for "2 Botton" */
  primaryLabel?: string;
  /** Left label shown only in "2 Botton" variant */
  secondaryLabel?: string;
  /** Click handler for the main (right) button */
  onPrimary?: () => void;
  /** Click handler for the secondary (left) button — only meaningful in "2 Botton" */
  onSecondary?: () => void;
  /** Alt-text for the icon image */
  iconAlt?: string;
  className?: string;
}

export function BottomGroupAiAreaItem({
  variant = "1 Botton",
  primaryLabel = "구독하기",
  secondaryLabel = "선물하기",
  onPrimary,
  onSecondary,
  iconAlt = "AI 홈 아이콘",
  className,
}: Props) {
  const is2Botton = variant === "2 Botton";

  return (
    <div
      className={[styles.root, className].filter(Boolean).join(" ")}
      data-cx-component="BottomGroupAiAreaItem"
      data-variant={variant}
    >
      {/* Icon pill — frosted circle with T star logo */}
      <div className={styles.iconMask}>
        <div className={styles.iconBg} />
        <span className={styles.iconImg} role="img" aria-label={iconAlt}>
          {/* T with star — inline SVG approximating the Figma icon */}
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <text
              x="1"
              y="14"
              fontFamily="'Pretendard Variable', sans-serif"
              fontWeight="700"
              fontSize="16"
              fill="var(--skt-color-fill-brand-primary, #3617ce)"
            >
              T
            </text>
          </svg>
          {/* Star badge */}
          <span className={styles.starBadge} aria-hidden="true">
            <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M3.5 0L4.327 2.673L7 3.5L4.327 4.327L3.5 7L2.673 4.327L0 3.5L2.673 2.673L3.5 0Z"
                fill="var(--skt-color-fill-brand-primary, #3617ce)"
              />
            </svg>
          </span>
        </span>
      </div>

      {/* CTA button(s) */}
      <div className={styles.buttonRow}>
        {is2Botton && (
          <>
            <button
              type="button"
              className={[styles.cta, styles.ctaLeft].join(" ")}
              onClick={onSecondary}
            >
              {secondaryLabel}
            </button>
            <span className={styles.divider} aria-hidden="true" />
          </>
        )}
        <button
          type="button"
          className={[styles.cta, is2Botton ? styles.ctaRight : styles.ctaFull].join(" ")}
          onClick={onPrimary}
        >
          {primaryLabel}
        </button>
      </div>
    </div>
  );
}
