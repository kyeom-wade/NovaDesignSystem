import styles from "./BottomSheetHandleItem.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.2--Token-Test- .BottomSheetHandleItem (node 50946:57023)
// anatomy: root[ handle ]

import React from "react";

interface Props {
  /** Width of the container. Defaults to 393px matching the Figma artboard. */
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
