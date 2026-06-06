import styles from "./RightItem.module.css";
interface Props { type?: "Text" | "TextButton" | "Icon" | "BadgeLevel"; label?: string; onClick?: () => void; }
export function RightItem({ type = "Icon", label = "값", onClick }: Props) {
  const t = String(type);
  if (t === "Text") return <span className={styles.text} data-cx-component="RightItem">{label}</span>;
  if (t === "TextButton") return <button type="button" className={styles.textBtn} onClick={onClick} data-cx-component="RightItem">{label}</button>;
  if (t === "BadgeLevel") return <span className={styles.level} data-cx-component="RightItem"><i /><i /><i /></span>;
  return <span className={styles.icon} data-cx-component="RightItem"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 4l4 4-4 4" stroke="rgba(6,12,31,0.4)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg></span>;
}
