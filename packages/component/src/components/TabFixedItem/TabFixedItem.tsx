import React from "react";
import styles from "./TabFixedItem.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.3 .TabFixedItem (node 55521:150823)
// anatomy: root[ text[ label, bar[ indicator? ] ] ]

interface Props {
  /** 탭 라벨 텍스트 */
  label?: string;
  /** 현재 선택(활성) 상태 여부 */
  selected?: boolean;
  /** Figma variant prop name */
  selection?: boolean;
  /** 클릭 핸들러 */
  onClick?: () => void;
  /** 추가 클래스명 */
  className?: string;
}

export function TabFixedItem({
  label = "Label",
  selected,
  selection,
  onClick,
  className,
}: Props) {
  const isSelected = selection ?? selected ?? true;

  return (
    <div
      className={[styles.root, className].filter(Boolean).join(" ")}
      data-cx-component="TabFixedItem"
      data-selection={isSelected ? "selected" : "unselected"}
      data-selected={isSelected ? "true" : "false"}
      role="tab"
      aria-selected={isSelected}
      tabIndex={isSelected ? 0 : -1}
      onClick={onClick}
    >
      <div className={styles.inner}>
        <span className={isSelected ? styles.labelSelected : styles.labelDefault}>
          {label}
        </span>
        <div className={styles.bar}>
          {isSelected && <div className={styles.indicator} />}
        </div>
      </div>
    </div>
  );
}
