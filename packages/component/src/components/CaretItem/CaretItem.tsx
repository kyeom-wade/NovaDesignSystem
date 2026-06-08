import styles from "./CaretItem.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.2--Token-Test- .CaretItem (node 51715:87224)
// anatomy: root[ bar ] — a 1px × 20px pill-shaped brand-colored vertical caret indicator

interface Props {
  /** Fill color variant of the caret */
  variant?: "brand" | "neutral" | "inverse";
  /** Height of the caret bar in px */
  height?: number;
  /** Additional class name */
  className?: string;
}

export function CaretItem({
  variant = "brand",
  height = 20,
  className,
}: Props) {
  const rootClass = [
    styles.root,
    styles[`variant-${variant}`],
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <span
      className={rootClass}
      data-cx-component="CaretItem"
      data-variant={variant}
      style={height !== 20 ? { height: `${height}px` } : undefined}
      aria-hidden="true"
    />
  );
}
