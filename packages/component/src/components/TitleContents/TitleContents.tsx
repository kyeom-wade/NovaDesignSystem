import styles from "./TitleContents.module.css";
interface Props { title?: string; showButton?: boolean; expanded?: boolean; onButtonClick?: () => void; }
export function TitleContents({ title = "제목", showButton = false, expanded = true, onButtonClick }: Props) {
  return (
    <div className={styles.wrap} data-cx-component="TitleContents">
      <p className={styles.title}>{title}</p>
      {showButton ? (
        <button type="button" className={styles.toggle} onClick={onButtonClick} aria-label={expanded ? "접기" : "펼치기"}>
          <svg className={`${styles.chev} ${expanded ? styles.up : ""}`} width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M6 8l4 4 4-4" stroke="#05001a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
      ) : null}
    </div>
  );
}
