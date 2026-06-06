import type { ReactNode } from "react";
import styles from "./BadgeIcon.module.css";
interface Props { icon?: ReactNode; label?: string; subLabel?: string; }
export function BadgeIcon({ icon, label = "라벨", subLabel }: Props) {
  return (
    <div className={styles.badge} data-cx-component="BadgeIcon">
      {icon ? <span className={styles.icon}>{icon}</span> : null}
      <span className={styles.label}>{label}</span>
      {subLabel ? <span className={styles.sub}>{subLabel}</span> : null}
    </div>
  );
}
