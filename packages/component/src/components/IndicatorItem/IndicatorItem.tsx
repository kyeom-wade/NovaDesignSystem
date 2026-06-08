import styles from "./IndicatorItem.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.2--Token-Test- .IndicatorItem (node 50946:57015)
// anatomy: root[ dot× count ] — horizontal row of IndicatorDotItem-sized circles; one active dot, rest inactive

interface Props {
  /** Total number of indicator dots */
  count?: number;
  /** Zero-based index of the active (selected) dot */
  activeIndex?: number;
  /** Called when a dot is clicked; receives the clicked index */
  onDotClick?: (index: number) => void;
  /** Accessible label for the indicator group */
  ariaLabel?: string;
}

export function IndicatorItem({
  count = 6,
  activeIndex = 0,
  onDotClick,
  ariaLabel = "페이지 인디케이터",
}: Props) {
  const dots = Array.from({ length: count }, (_, i) => i);

  return (
    <div
      className={styles.root}
      data-cx-component="IndicatorItem"
      role="tablist"
      aria-label={ariaLabel}
    >
      {dots.map((i) => (
        <span
          key={i}
          className={[styles.dot, i === activeIndex ? styles.dotActive : styles.dotInactive].join(" ")}
          role="tab"
          aria-selected={i === activeIndex}
          aria-label={`${i + 1} / ${count}`}
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
  );
}
