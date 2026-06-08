import styles from "./ThumbnailRoundItem.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.2--Token-Test- .ThumbnailRoundItem (node 50985:98026)
// anatomy: root[ image, dimOverlay? ]
// Variants: size(16|20|24|40|48|64) × dimMultiply(true|false)
// Sizes 16/20/24 use neutral/gray bg; 40/48/64 use white/inverse bg

interface Props {
  /** Size variant in pixels — controls container dimensions and background */
  size?: "16" | "20" | "24" | "40" | "48" | "64";
  /** Whether to render a semi-transparent multiply dim overlay on top of the image */
  dimMultiply?: boolean;
  /** Source URL for the thumbnail image */
  src?: string;
  /** Alt text for the thumbnail image */
  alt?: string;
  className?: string;
}

export function ThumbnailRoundItem({
  size = "40",
  dimMultiply = false,
  src,
  alt = "",
  className,
}: Props) {
  const rootClass = [
    styles.root,
    styles[`size-${size}`],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={rootClass} data-cx-component="ThumbnailRoundItem">
      {src && (
        <img
          className={styles.image}
          src={src}
          alt={alt}
        />
      )}
      {dimMultiply && (
        <div className={styles.dimOverlay} aria-hidden="true" />
      )}
    </div>
  );
}
