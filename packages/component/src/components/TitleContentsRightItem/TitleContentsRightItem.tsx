import styles from "./TitleContentsRightItem.module.css";
interface Props { type?: "Icon" | "Button"; label?: string; onClick?: () => void; }
export function TitleContentsRightItem({ type = "Icon", label = "더보기", onClick }: Props) {
  if (String(type) === "Button") return <button type="button" className={styles.btn} onClick={onClick} data-cx-component="TitleContentsRightItem">{label}</button>;
  return <button type="button" className={styles.iconBtn} onClick={onClick} data-cx-component="TitleContentsRightItem"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 4l4 4-4 4" stroke="#05001a" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg></button>;
}
