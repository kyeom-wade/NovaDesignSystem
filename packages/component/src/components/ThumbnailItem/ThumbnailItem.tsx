import styles from "./ThumbnailItem.module.css";
interface Props { size?: 40 | 64 | 160 | 182 | "movie"; src?: string; alt?: string; }
const DIM: Record<string, number> = { "40": 40, "64": 64, "160": 160, "182": 182 };
export function ThumbnailItem({ size = 64, src, alt = "" }: Props) {
  const isMovie = String(size) === "movie";
  const px = isMovie ? undefined : DIM[String(size)] ?? 64;
  const style = isMovie ? { width: 40, height: 58 } : { width: px, height: px };
  return (
    <div className={styles.thumb} style={style} data-cx-component="ThumbnailItem">
      {src ? <img className={styles.img} src={src} alt={alt} /> : null}
    </div>
  );
}
