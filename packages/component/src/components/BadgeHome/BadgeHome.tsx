import styles from "./BadgeHome.module.css";
interface Props { label?: string; }
export function BadgeHome({ label = "N" }: Props) {
  return <span className={styles.badge} data-cx-component="BadgeHome">{label}</span>;
}
