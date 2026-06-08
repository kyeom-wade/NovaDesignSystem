import React from "react";
import styles from "./Thumbnail.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.2--Token-Test- .Thumbnail (node 51521:64384)
// anatomy: root[ imageLayer[ img ], indicatorRow[ dot×count ] ]

interface Props {
  /** Product thumbnail image source URL */
  src?: string;
  /** Alt text for the thumbnail image */
  alt?: string;
  /** Total number of indicator dots shown at the bottom */
  dotCount?: number;
  /** Zero-based index of the active (selected) dot */
  activeIndex?: number;
  /** Called when an indicator dot is clicked; receives the clicked index */
  onDotClick?: (index: number) => void;
}

export function Thumbnail({
  src = "https://www.figma.com/api/mcp/asset/7dd2c32a-c2f4-44ac-b193-e948b7230443",
  alt = "",
  dotCount = 6,
  activeIndex = 0,
  onDotClick,
}: Props) {
  const dots = Array.from({ length: dotCount }, (_, i) => i);

  return (
    <div className={styles.root} data-cx-component="Thumbnail">
      {/* Full-bleed product image */}
      <div className={styles.imageLayer}>
        <img className={styles.img} src={src} alt={alt} />
      </div>

      {/* Page indicator dots */}
      <div
        className={styles.indicatorRow}
        role="tablist"
        aria-label="페이지 인디케이터"
      >
        {dots.map((i) => (
          <span
            key={i}
            className={[
              styles.dot,
              i === activeIndex ? styles.dotActive : styles.dotInactive,
            ].join(" ")}
            role="tab"
            aria-selected={i === activeIndex}
            aria-label={`${i + 1} / ${dotCount}`}
            tabIndex={i === activeIndex ? 0 : -1}
            onClick={() => onDotClick?.(i)}
            onKeyDown={(e) => {
              if (onDotClick && (e.key === " " || e.key === "Enter")) {
                e.preventDefault();
                onDotClick(i);
              }
            }}
          />
        ))}
      </div>
    </div>
  );
}
