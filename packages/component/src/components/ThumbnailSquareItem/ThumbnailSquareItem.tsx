import styles from "./ThumbnailSquareItem.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.2--Token-Test- .ThumbnailSquareItem (node 50943:27813)
// anatomy: root[ img[ imgInner[ imgEl ] ], dimMultiply? ]

import React from "react";

export type ThumbnailSquareItemSize = "40" | "48" | "64" | "128" | "160" | "172";

interface Props {
  /** Square size variant in px */
  size?: ThumbnailSquareItemSize;
  /** Apply a subtle multiply-blend dim overlay over the thumbnail */
  dimMultiply?: boolean;
  /** Image source URL */
  src?: string;
  /** Alt text for the thumbnail image */
  alt?: string;
}

export function ThumbnailSquareItem({
  size = "40",
  dimMultiply = true,
  src = "https://www.figma.com/api/mcp/asset/bb6f546f-472a-4fc7-812f-bbf3d1b0becf",
  alt = "",
}: Props) {
  return (
    <div
      className={`${styles.root} ${styles[`size${size}`]}`}
      data-cx-component="ThumbnailSquareItem"
      data-size={size}
    >
      <div className={`${styles.img} ${size === "128" ? styles.imgCentered : ""}`}>
        <div className={styles.imgInner}>
          <img className={styles.imgEl} src={src} alt={alt} />
        </div>
      </div>
      {dimMultiply && (
        <div className={styles.dimMultiply} aria-hidden="true" data-name="DimMultiply" />
      )}
    </div>
  );
}
