import styles from "./TitleSectionRightItem.module.css";
interface Props { type?: "Icon" | "TextButton" | "TextItemButton" | "ButtonListOrder" | "Text"; label?: string; subText?: string; highlight?: string; onClick?: () => void; }
export function TitleSectionRightItem({ type = "TextButton", label = "전체보기", subText, highlight, onClick }: Props) {
  const t = String(type);
  if (t === "Icon") return <button type="button" className={styles.iconBtn} onClick={onClick} data-cx-component="TitleSectionRightItem"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 4l4 4-4 4" stroke="#05001a" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg></button>;
  if (t === "Text") return <span className={styles.text} data-cx-component="TitleSectionRightItem">{highlight ? <em className={styles.hi}>{highlight}</em> : null}{label}</span>;
  return <button type="button" className={styles.btn} onClick={onClick} data-cx-component="TitleSectionRightItem"><span>{label}</span>{subText ? <span className={styles.sub}>{subText}</span> : null}<svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M6 4l4 4-4 4" stroke="rgba(6,12,31,0.5)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg></button>;
}
