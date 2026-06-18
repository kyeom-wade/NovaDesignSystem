import type { ReactNode } from "react";
import { Divider } from "../Divider";
import { IconArrow } from "../IconArrow/IconArrow";
import styles from "./BottomSheetSelectItem.module.css";

// Figma SSOT: SKT-Next_UI-Draft_3.3 .BottomSheetSelectItem (node 54678:32922)
// anatomy: root[ header[ title, chevron ], ?Divider, ?slot ]
// Variants: selection(boolean) x disclosure(boolean)

export interface BottomSheetSelectItemProps {
  /** Whether the item is selected */
  selection?: boolean;
  /** Legacy alias for selection */
  selected?: boolean;
  /** Whether the content slot is expanded */
  disclosure?: boolean;
  /** Header title text */
  title?: string;
  /** Expanded content slot */
  children?: ReactNode;
  className?: string;
}

export function BottomSheetSelectItem({
  selection = false,
  selected,
  disclosure = false,
  title = "섹션/콘텐츠 타이틀",
  children,
  className,
}: BottomSheetSelectItemProps) {
  const isSelected = selected ?? selection;

  return (
    <section
      className={[
        styles.root,
        isSelected ? styles.selected : styles.unselected,
        disclosure ? styles.disclosure : styles.collapsed,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      data-cx-component="BottomSheetSelectItem"
      data-selection={isSelected ? "true" : "false"}
      data-disclosure={disclosure ? "true" : "false"}
    >
      <div className={styles.header}>
        <p className={styles.title}>{title}</p>
        <span className={styles.icon} aria-hidden="true">
          <IconArrow variant={disclosure ? "up" : "down"} size={16} />
        </span>
      </div>

      {disclosure && (
        <>
          <Divider variant="contents" className={styles.divider} />
          <div className={styles.slot}>{children}</div>
        </>
      )}
    </section>
  );
}
