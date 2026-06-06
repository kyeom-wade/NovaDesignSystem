import styles from "./TitleBottomSheet.module.css";
// Figma SSOT: SKT_GenUI_Test .TitleBottomSheet (node 9412:12082)
// anatomy: container[ titleRow[ title, closeIco ], subText[ text, highlight ] ]
interface Props { title?: string; subText?: string; subTextHighlight?: string; onClose?: () => void; }
export function TitleBottomSheet({ title = "제목", subText, subTextHighlight, onClose }: Props) {
  return (
    <div className={styles.wrap} data-cx-component="TitleBottomSheet">
      <div className={styles.titleRow}>
        <span className={styles.title}>{title}</span>
        <button type="button" className={styles.close} onClick={onClose} aria-label="닫기">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6L6 18" stroke="#05001a" strokeWidth="1.5" strokeLinecap="round"/></svg>
        </button>
      </div>
      {subText || subTextHighlight ? (
        <div className={styles.sub}>
          {subText ? <span className={styles.subText}>{subText}</span> : null}
          {subTextHighlight ? <span className={styles.hi}>{subTextHighlight}</span> : null}
        </div>
      ) : null}
    </div>
  );
}
