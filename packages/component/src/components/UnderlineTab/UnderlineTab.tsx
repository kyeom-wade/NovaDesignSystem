import styles from "./UnderlineTab.module.css";
interface Props { items?: readonly string[]; activeIndex?: number; onChange?: (i: number) => void; }
export function UnderlineTab({ items = ["탭1", "탭2"], activeIndex = 0, onChange }: Props) {
  return (
    <div className={styles.wrap} role="tablist" data-cx-component="UnderlineTab">
      {items.map((label, i) => (
        <button key={i} type="button" role="tab" aria-selected={i === activeIndex}
          className={`${styles.tab} ${i === activeIndex ? styles.active : ""}`} onClick={() => onChange?.(i)}>
          {label}
        </button>
      ))}
    </div>
  );
}
