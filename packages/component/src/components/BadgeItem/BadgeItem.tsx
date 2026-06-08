import styles from "./BadgeItem.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.2--Token-Test- .BadgeItem (node 50943:27966)
// anatomy: root[ label ]
// Variants: size(Small|Large) × color(Neutral|Strong|Brand|Inverse) = 8 combinations

interface Props {
  /** Visual color scheme of the badge */
  color?: "Neutral" | "Strong" | "Brand" | "Inverse";
  /** Size variant — Small (17px) or Large (22px) */
  size?: "Small" | "Large";
  /** Badge label text */
  text?: string;
  className?: string;
}

export function BadgeItem({
  color = "Neutral",
  size = "Small",
  text = "Badge",
  className,
}: Props) {
  const rootClass = [
    styles.root,
    styles[`size-${size}`],
    styles[`color-${color}`],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={rootClass} data-cx-component="BadgeItem">
      <span className={styles.label}>{text}</span>
    </div>
  );
}
