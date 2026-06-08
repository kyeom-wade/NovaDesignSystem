import styles from "./Loader.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.2--Token-Test- .Loader (node 51426:58757)
// anatomy: root[ dot dot dot ] — three 5px circles in a row with staggered bounce animation

interface Props {
  /** Color theme of the dots */
  color?: "brand" | "neutral" | "inverse";
  /** Size of each dot in px (also sets gap proportionally) */
  size?: "small" | "medium" | "large";
  /** Accessible label for the loading indicator */
  label?: string;
  className?: string;
}

export function Loader({
  color = "brand",
  size = "medium",
  label = "로딩 중",
  className,
}: Props) {
  const rootClass = [
    styles.root,
    styles[`color--${color}`],
    styles[`size--${size}`],
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <span
      className={rootClass}
      data-cx-component="Loader"
      role="status"
      aria-label={label}
    >
      <span className={`${styles.dot} ${styles.dot1}`} />
      <span className={`${styles.dot} ${styles.dot2}`} />
      <span className={`${styles.dot} ${styles.dot3}`} />
    </span>
  );
}
