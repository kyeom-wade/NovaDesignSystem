import React from "react";
import styles from "./ChipItemQuicklinkItem.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.2--Token-Test- .ChipItemQuicklinkItem (node 50989:64700)
// anatomy: root[ iconWrap[ iconBg[ iconItem ] ], label ]

interface Props {
  /** Label text shown next to the icon */
  text?: string;
  /** URL for the icon image (32×32 area, 20×20 icon rendered inside) */
  iconSrc?: string;
  /** Alt text for the icon image */
  iconAlt?: string;
  /** Click handler */
  onClick?: () => void;
  className?: string;
}

export function ChipItemQuicklinkItem({
  text = "텍스트",
  iconSrc,
  iconAlt = "",
  onClick,
  className,
}: Props) {
  return (
    <div
      data-cx-component="ChipItemQuicklinkItem"
      className={[styles.root, className].filter(Boolean).join(" ")}
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") onClick?.();
      }}
    >
      <div className={styles.iconWrap}>
        <div className={styles.iconBg}>
          <div className={styles.iconItem}>
            {iconSrc ? (
              <img className={styles.iconImg} src={iconSrc} alt={iconAlt} />
            ) : (
              <div className={styles.iconPlaceholder} aria-hidden="true" />
            )}
          </div>
        </div>
      </div>
      <span className={styles.label}>{text}</span>
    </div>
  );
}
