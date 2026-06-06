import styles from "./Tooltip.module.css";
interface Props { label?: string; tailPosition?: "Left" | "Center" | "Right"; }
export function Tooltip({ label = "툴팁", tailPosition = "Center" }: Props) {
  return <div className={`${styles.tip} ${styles["tail" + String(tailPosition)] ?? ""}`} data-cx-component="Tooltip">{label}</div>;
}
