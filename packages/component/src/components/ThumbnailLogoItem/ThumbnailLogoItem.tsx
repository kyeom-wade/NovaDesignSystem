import type { ReactNode } from "react";
import styles from "./ThumbnailLogoItem.module.css";
interface Props { logo?: ReactNode; bgColor?: string; src?: string; }
export function ThumbnailLogoItem({ logo, bgColor, src }: Props) {
  return (
    <span className={styles.wrap} style={bgColor ? { background: bgColor } : undefined} data-cx-component="ThumbnailLogoItem">
      {src ? <img className={styles.img} src={src} alt="" /> : logo}
    </span>
  );
}
