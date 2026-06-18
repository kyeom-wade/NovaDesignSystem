import styles from "./BottomSheetHandleItem.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.3 .BottomSheetHandleItem (node 55521:156018)
// anatomy: root[ handle ]

import React from "react";

interface Props {
  /** Width of the container. Defaults to 393px matching the Figma frame. */
  width?: number | string;
  /** Additional className forwarded to the root element. */
  className?: string;
}

export function BottomSheetHandleItem({
  width = 393,
  className,
}: Props) {
  return (
    <div
      className={[styles.root, className].filter(Boolean).join(" ")}
      data-cx-component="BottomSheetHandleItem"
      style={width !== 393 ? { width: typeof width === "number" ? `${width}px` : width } : undefined}
    >
      <div className={styles.handle} />
    </div>
  );
}
