import React from "react";
import styles from "./CellCard.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.2--Token-Test- .CellCard (node 50985:53834)
// anatomy: wrap[ group[ slot[ children ] ] ]

interface Props {
  /** 슬롯 내부에 삽입될 콘텐츠 */
  children?: React.ReactNode;
  /** Optional fixed slot height. Omit to let the card hug its children. */
  slotHeight?: number;
  /** 추가 클래스명 */
  className?: string;
}

export function CellCard({
  children,
  slotHeight,
  className,
}: Props) {
  return (
    <div
      className={[styles.wrap, className].filter(Boolean).join(" ")}
      data-cx-component="CellCard"
    >
      <div className={styles.group}>
        <div
          className={styles.slot}
          style={slotHeight !== undefined ? { height: slotHeight } : undefined}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
