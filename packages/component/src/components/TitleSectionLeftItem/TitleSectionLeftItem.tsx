import type { ReactNode } from "react";
import styles from "./TitleSectionLeftItem.module.css";
interface Props { type?: "Text" | "Icon" | "Badge"; count?: string; badge?: ReactNode; }
export function TitleSectionLeftItem({ type = "Text", count, badge }: Props) {
  const t = String(type);
  if (t === "Icon") return <span className={styles.icon} data-cx-component="TitleSectionLeftItem"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6.5" stroke="#97a2bf" strokeWidth="1.3"/><path d="M8 7.2v3M8 5.3v.1" stroke="#97a2bf" strokeWidth="1.3" strokeLinecap="round"/></svg></span>;
  if (t === "Badge") return <span className={styles.badge} data-cx-component="TitleSectionLeftItem">{badge}</span>;
  return count ? <span className={styles.count} data-cx-component="TitleSectionLeftItem">{count}</span> : null;
}
