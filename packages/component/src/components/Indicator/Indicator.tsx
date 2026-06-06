import styles from "./Indicator.module.css";
interface Props { count?: number; activeIndex?: number; }
export function Indicator({ count = 5, activeIndex = 0 }: Props) {
  return (
    <div className={styles.wrap} data-cx-component="Indicator">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className={`${styles.dot} ${i === activeIndex ? styles.on : ""}`} />
      ))}
    </div>
  );
}
