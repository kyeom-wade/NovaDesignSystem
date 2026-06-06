import type { ReactNode } from "react";
import styles from "./ChipImageItem.module.css";
interface Props { label?: string; icon?: ReactNode; selected?: boolean; onClick?: () => void; }
export function ChipImageItem({ label = "칩", icon, selected, onClick }: Props) {
  return (
    <button type="button" className={`${styles.chip} ${selected ? styles.on : ""}`} onClick={onClick} data-cx-component="ChipImageItem">
      {icon ? <span className={styles.icon}>{icon}</span> : null}
      <span>{label}</span>
    </button>
  );
}
