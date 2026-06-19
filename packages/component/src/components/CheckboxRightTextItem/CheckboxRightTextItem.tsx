import React from "react";
import { CheckboxItem } from "../CheckboxItem";
import styles from "./CheckboxRightTextItem.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.3 .CheckboxRightTextItem (node 55765:134708)
// anatomy: root[ label, CheckboxItem ]
// Properties: checked(boolean), label(string), size(Small | Medium), state(boolean), variants(Circle | Line)

export type CheckboxRightTextItemSize = "Small" | "Medium";
export type CheckboxRightTextItemVariant = "Circle" | "Line";

interface Props {
  /** Figma property: selected state */
  checked?: boolean;
  /** Figma property: label text */
  label?: string;
  /** Figma property: text size */
  size?: CheckboxRightTextItemSize;
  /** Figma property: enabled state. true=Default, false=Disabled */
  state?: boolean;
  /** Figma property: checkbox visual variant */
  variants?: CheckboxRightTextItemVariant;
  onChange?: (checked: boolean) => void;
  className?: string;
}

export function CheckboxRightTextItem({
  checked = false,
  label = "Label",
  size = "Medium",
  state = true,
  variants = "Circle",
  onChange,
  className,
}: Props) {
  const isDisabled = !state;

  function handleChange(nextChecked: boolean) {
    if (!isDisabled) {
      onChange?.(nextChecked);
    }
  }

  return (
    <div
      className={[
        styles.root,
        styles[`size${size}`],
        checked ? styles.checked : styles.unchecked,
        isDisabled ? styles.disabled : styles.enabled,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      data-cx-component="CheckboxRightTextItem"
      data-checked={checked ? "on" : "off"}
      data-size={size}
      data-state={state ? "enabled" : "disabled"}
      data-variants={variants}
    >
      <p className={styles.label}>{label}</p>
      <CheckboxItem
        selection={checked}
        state={isDisabled ? "Disabled" : "Default"}
        variant={variants}
        onChange={handleChange}
      />
    </div>
  );
}
