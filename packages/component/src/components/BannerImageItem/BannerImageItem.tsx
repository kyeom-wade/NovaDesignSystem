import React from "react";
import styles from "./BannerImageItem.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.2--Token-Test- .BannerImageItem (node 51243:74524)
// anatomy: root[ background?, imageArea[ imageWrap[ img ] ], contentSlot[ children ] ]

export type BannerImageItemVariant = "Medium" | "Small";

interface Props {
  /** Size variant — Medium (112px tall, 80×80 image) or Small (72px tall, 58×40 rounded image) */
  variant?: BannerImageItemVariant;
  /** Whether to render the semi-transparent background overlay */
  showBackground?: boolean;
  /** Image source URL for the decorative product image */
  imageSrc?: string;
  /** Alt text for the image */
  imageAlt?: string;
  /** Slot for left-side text/content */
  children?: React.ReactNode;
  /** Accessible label for the banner region */
  ariaLabel?: string;
}

export function BannerImageItem({
  variant = "Medium",
  showBackground = false,
  imageSrc,
  imageAlt = "",
  children,
  ariaLabel,
}: Props) {
  const isSmall = variant === "Small";

  return (
    <div
      className={[styles.root, isSmall ? styles.variantSmall : styles.variantMedium].join(" ")}
      data-cx-component="BannerImageItem"
      data-variant={variant}
      aria-label={ariaLabel}
    >
      {showBackground && (
        <div
          className={[styles.background, isSmall ? styles.backgroundSmall : styles.backgroundMedium].join(" ")}
          aria-hidden="true"
        />
      )}

      <div className={styles.contentSlot}>{children}</div>

      <div className={[styles.imageArea, isSmall ? styles.imageAreaSmall : styles.imageAreaMedium].join(" ")}>
        <div className={[styles.imageWrap, isSmall ? styles.imageWrapSmall : styles.imageWrapMedium].join(" ")}>
          {imageSrc ? (
            <img src={imageSrc} alt={imageAlt} className={styles.img} />
          ) : (
            <div className={styles.imagePlaceholder} aria-hidden="true" />
          )}
        </div>
      </div>
    </div>
  );
}
