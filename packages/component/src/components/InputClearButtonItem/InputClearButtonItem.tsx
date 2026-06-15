import React from "react";
import { IconClose } from "../IconClose";
import styles from "./InputClearButtonItem.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.3 .InputClearButtonItem (node 51081:61398)
// anatomy: root[ IconItem(Variants=Close, 10px) ]
// variants: state(Default | Disabled)

interface Props {
  /** Interaction state */
  state?: "Default" | "Disabled";
  /** Accessible label for the clear button */
  "aria-label"?: string;
  /** Click handler */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

export function InputClearButtonItem({
  state = "Default",
  "aria-label": ariaLabel = "입력 내용 지우기",
  onClick,
  className,
}: Props) {
  const isDisabled = state === "Disabled";
  const rootClass = [
    styles.root,
    isDisabled ? styles.disabled : styles.default,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      type="button"
      className={rootClass}
      data-cx-component="InputClearButtonItem"
      data-node-id="51081:61398"
      data-state={state}
      disabled={isDisabled}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      <span className={styles.iconItem} aria-hidden="true">
        <IconClose size={10} />
      </span>
    </button>
  );
}
