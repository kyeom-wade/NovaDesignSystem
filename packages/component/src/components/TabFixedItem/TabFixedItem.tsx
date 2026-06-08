import React from "react";
import styles from "./TabFixedItem.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.2--Token-Test- .TabFixedItem (node 51157:56812)
// anatomy: root[ inner[ label, bar[ indicator? ] ] ]

interface Props {
  /** 탭 라벨 텍스트 */
  label?: string;
  /** 현재 선택(활성) 상태 여부 */
  selected?: boolean;
  /** 클릭 핸들러 */
  onClick?: () => void;
}

export function TabFixedItem({
  label = "탭명",
  selected = false,
  onClick,
}: Props) {
  return (
    <div
      className={styles.root}
      data-cx-component="TabFixedItem"
      data-selected={selected ? "true" : "false"}
      role="tab"
      aria-selected={selected}
      tabIndex={selected ? 0 : -1}
      onClick={onClick}
    >
      <div className={styles.inner}>
        <span className={selected ? styles.labelSelected : styles.labelDefault}>
          {label}
        </span>
        <div className={styles.bar}>
          {selected && <div className={styles.indicator} />}
        </div>
      </div>
    </div>
  );
}
