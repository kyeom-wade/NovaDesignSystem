import React from "react";
import styles from "./BannerImageItem.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.3 .BannerImageItem (node 51243:74524)
// anatomy: root[ background?, imageArea[ imageWrap[ img ] ], contentSlot? ]

export type BannerImageItemVariant = "Medium" | "Small";

export interface BannerImageItemProps {
  /** Figma property name. Medium (112px tall, 80×80 image) or Small (72px tall, 58×40 image) */
  variants?: BannerImageItemVariant;
  /** Figma property name. Whether to render the semi-transparent background layer */
  background?: boolean;
  /** Legacy alias for variants */
  variant?: BannerImageItemVariant;
  /** Legacy alias for background */
  showBackground?: boolean;
  /** Image source URL for the decorative product image */
  imageSrc?: string;
  /** Alt text for the image */
  imageAlt?: string;
  /** Slot for left-side text/content */
  children?: React.ReactNode;
  /** Accessible label for the banner region */
  ariaLabel?: string;
  className?: string;
}

export function BannerImageItem({
  variants,
  background,
  variant,
  showBackground,
  imageSrc,
  imageAlt = "",
  children,
  ariaLabel,
  className,
}: BannerImageItemProps) {
  const resolvedVariant = variants ?? variant ?? "Medium";
  const resolvedBackground = background ?? showBackground ?? true;
  const isSmall = resolvedVariant === "Small";

  return (
    <div
      className={[
        styles.root,
        isSmall ? styles.variantSmall : styles.variantMedium,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      data-cx-component="BannerImageItem"
      data-variant={resolvedVariant}
      data-background={resolvedBackground ? "true" : "false"}
      aria-label={ariaLabel}
    >
      {resolvedBackground && (
        <div
          className={[styles.background, isSmall ? styles.backgroundSmall : styles.backgroundMedium].join(" ")}
          aria-hidden="true"
        />
      )}

      {children && <div className={styles.contentSlot}>{children}</div>}

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
