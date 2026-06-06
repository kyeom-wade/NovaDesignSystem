import styles from "./ButtonCloseItem.module.css";
interface Props { onClick?: () => void; "aria-label"?: string; }
export function ButtonCloseItem({ onClick, ...rest }: Props) {
  return (
    <button type="button" className={styles.btn} onClick={onClick} aria-label={rest["aria-label"] ?? "닫기"} data-cx-component="ButtonCloseItem">
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M4.5 4.5l9 9M13.5 4.5l-9 9" stroke="#05001a" strokeWidth="1.5" strokeLinecap="round"/></svg>
    </button>
  );
}
