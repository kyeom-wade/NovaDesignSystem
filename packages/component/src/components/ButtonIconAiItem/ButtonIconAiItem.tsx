import React from "react";
import { ButtonIcon } from "../ButtonIcon/ButtonIcon";
import styles from "./ButtonIconAiItem.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.3 .ButtonIconAIItem (node 55216:179427)
// anatomy: root[ ButtonIcon(Large) ]

interface Props {
  /** Custom icon slot. Takes precedence over children. */
  icon?: React.ReactNode;
  /** Custom icon slot. */
  children?: React.ReactNode;
  className?: string;
}

export function ButtonIconAiItem({
  icon,
  children,
  className,
}: Props) {
  return (
    <span
      className={[styles.root, className].filter(Boolean).join(" ")}
      data-cx-component="ButtonIconAiItem"
    >
      <ButtonIcon variant="Large" icon={icon ?? children} />
    </span>
  );
}
