import type { ReactNode } from "react";
import styles from "./CardSectionTitle.module.css";
interface Props { title?: string; children?: ReactNode; }
export function CardSectionTitle({ title = "섹션 제목", children }: Props) {
  return (
    <div className={styles.wrap} data-cx-component="CardSectionTitle">
      <span className={styles.title}>{title}</span>
      {children ? <div className={styles.right}>{children}</div> : null}
    </div>
  );
}
