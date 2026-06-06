import styles from "./ListSelectedRightItem.module.css";
interface Props { type?: "ButtonXsmallSolid" | "Icon" | "TextButton"; label?: string; onClick?: () => void; }
export function ListSelectedRightItem({ type = "Icon", label = "선택", onClick }: Props) {
  const t = String(type);
  if (t === "ButtonXsmallSolid") return <button type="button" className={styles.solid} onClick={onClick} data-cx-component="ListSelectedRightItem">{label}</button>;
  if (t === "TextButton") return <button type="button" className={styles.text} onClick={onClick} data-cx-component="ListSelectedRightItem">{label}</button>;
  return <span className={styles.icon} onClick={onClick} data-cx-component="ListSelectedRightItem"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 4l4 4-4 4" stroke="#05001a" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg></span>;
}
