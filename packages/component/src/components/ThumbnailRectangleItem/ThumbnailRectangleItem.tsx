import styles from "./ThumbnailRectangleItem.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.2--Token-Test- .ThumbnailRectangleItem (node 51157:54958)
// anatomy: root[ imgInner[ imgEl ], dimMultiply? ]

import React from "react";

/** Width × Height size variant (portrait rectangle).
 *  "48*72"   → 48×72 px  (small)
 *  "128*192" → 128×192 px (medium)
 *  "393*480" → 393×480 px (large / full-bleed hero)
 */
export type ThumbnailRectangleItemVariant = "48*72" | "128*192" | "393*480";

interface Props {
  /** Size variant as "width*height" */
  variant?: ThumbnailRectangleItemVariant;
  /** Image source URL */
  src?: string;
  /** Alt text for the thumbnail image */
  alt?: string;
  /** Apply a subtle multiply-blend dim overlay */
  dimMultiply?: boolean;
}

export function ThumbnailRectangleItem({
  variant = "48*72",
  src = "https://www.figma.com/api/mcp/asset/c3629828-ccfa-4382-8700-7bea414187c8",
  alt = "",
  dimMultiply = false,
}: Props) {
  return (
    <div
      className={`${styles.root} ${styles[`variant${variant.replace("*", "x")}`]}`}
      data-cx-component="ThumbnailRectangleItem"
      data-variant={variant}
    >
      <div className={styles.imgInner}>
        <img className={styles.imgEl} src={src} alt={alt} />
      </div>
      {dimMultiply && (
        <div className={styles.dimMultiply} aria-hidden="true" data-name="DimMultiply" />
      )}
    </div>
  );
}
