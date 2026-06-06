import type { ReactNode } from "react";
import styles from "./ButtonMoreProduct.module.css";
interface Props { label?: string; logo?: ReactNode; logoColor?: string; onClick?: () => void; }
export function ButtonMoreProduct({ label = "상품 더보기", logo, logoColor, onClick }: Props) {
  return (
    <button type="button" className={styles.btn} onClick={onClick} data-cx-component="ButtonMoreProduct">
      <span className={styles.logo} style={logoColor ? { background: logoColor } : undefined}>{logo}</span>
      <span className={styles.label}>{label}</span>
      <svg className={styles.chev} width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 4l4 4-4 4" stroke="#05001a" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
    </button>
  );
}
