import React from "react";
import { CheckboxItem } from "../CheckboxItem";
import styles from "./CheckboxLeftTextItem.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.3 .CheckboxLeftTextItem (node 50943:27986)
// anatomy: root[ CheckboxItem, label ]
// Properties: checked(boolean), label(string), size(Small | Medium), state(boolean), variants(Circle | Line)

export type CheckboxLeftTextItemSize = "Small" | "Medium";
export type CheckboxLeftTextItemVariant = "Circle" | "Line";

interface Props {
  /** Figma property: selected state */
  checked?: boolean;
  /** Figma property: label text */
  label?: string;
  /** Figma property: text size */
  size?: CheckboxLeftTextItemSize;
  /** Figma property: enabled state. true=Enabled, false=Disabled */
  state?: boolean;
  /** Figma property: checkbox visual variant */
  variants?: CheckboxLeftTextItemVariant;
  onChange?: (checked: boolean) => void;
  className?: string;
}

export function CheckboxLeftTextItem({
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
      data-cx-component="CheckboxLeftTextItem"
      data-checked={checked ? "on" : "off"}
      data-size={size}
      data-state={state ? "enabled" : "disabled"}
      data-variants={variants}
    >
      <CheckboxItem
        selection={checked}
        state={isDisabled ? "Disabled" : "Default"}
        variant={variants}
        onChange={handleChange}
      />
      <p className={styles.label}>{label}</p>
    </div>
  );
}
