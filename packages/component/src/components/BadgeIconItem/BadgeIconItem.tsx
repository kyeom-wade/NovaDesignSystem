import styles from "./BadgeIconItem.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.2--Token-Test- .BadgeIconItem (node 50943:30627)
// anatomy: root[ main[ icon, text ], subText? ]
// Variants: subtext(false|true) — when true, a right-aligned subText label is shown and the root stretches to full width

interface Props {
  /** Main label text shown next to the icon */
  text?: string;
  /** Optional subtext shown on the right side (visible only when showSubText is true) */
  subText?: string;
  /** Whether to show the right-aligned subText — switches between the two Figma variants */
  showSubText?: boolean;
  /** Icon src URL — defaults to a 16×16 placeholder icon */
  iconSrc?: string;
  /** Alt text for the icon image */
  iconAlt?: string;
  className?: string;
}

export function BadgeIconItem({
  text = "{Text}",
  subText = "{SubText}",
  showSubText = false,
  iconSrc,
  iconAlt = "",
  className,
}: Props) {
  const rootClass = [
    styles.root,
    showSubText ? styles.withSubText : styles.compact,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={rootClass} data-cx-component="BadgeIconItem">
      <div className={styles.main}>
        <div className={styles.iconWrap}>
          {iconSrc ? (
            <img className={styles.icon} src={iconSrc} alt={iconAlt} />
          ) : (
            <div className={styles.iconPlaceholder} aria-hidden="true" />
          )}
        </div>
        <p className={styles.text}>{text}</p>
      </div>
      {showSubText && <p className={styles.subText}>{subText}</p>}
    </div>
  );
}
