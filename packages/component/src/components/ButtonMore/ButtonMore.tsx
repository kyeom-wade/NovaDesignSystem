import styles from "./ButtonMore.module.css";
interface Props { label?: string; onClick?: () => void; }
export function ButtonMore({ label = "더보기", onClick }: Props) {
  return (
    <button type="button" className={styles.btn} onClick={onClick} data-cx-component="ButtonMore">
      <span>{label}</span>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4.5 6.5l3.5 3.5 3.5-3.5" stroke="#05001a" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
    </button>
  );
}
