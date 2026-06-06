import styles from "./PaymentLogoItem.module.css";
interface Props { src?: string; bgColor?: string; }
export function PaymentLogoItem({ src, bgColor }: Props) {
  return (
    <span className={styles.wrap} style={bgColor ? { background: bgColor } : undefined} data-cx-component="PaymentLogoItem">
      {src ? <img className={styles.img} src={src} alt="" /> : null}
    </span>
  );
}
