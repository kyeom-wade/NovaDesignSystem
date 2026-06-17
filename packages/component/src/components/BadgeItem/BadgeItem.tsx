import styles from "./BadgeItem.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.3 .BadgeItem (node 50943:27966)
// anatomy: root[ label ]
// Variants: size(Small|Large) × color(Neutral|Strong|Brand|Inverse) = 8 combinations

interface Props {
  /** Visual color scheme of the badge */
  color?: "Neutral" | "Strong" | "Brand" | "Inverse";
  /** Size variant — Small or Large */
  size?: "Small" | "Large";
  /** Badge label text */
  label?: string;
  /** @deprecated Use label instead. */
  text?: string;
  className?: string;
}

export function BadgeItem({
  color = "Neutral",
  size = "Small",
  label,
  text,
  className,
}: Props) {
  const resolvedLabel = label ?? text ?? "Label";
  const rootClass = [
    styles.root,
    styles[`size-${size}`],
    styles[`color-${color}`],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={rootClass} data-cx-component="BadgeItem" data-color={color} data-size={size}>
      <span className={styles.label}>{resolvedLabel}</span>
    </div>
  );
}
