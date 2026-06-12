import React from "react";
import { CellRightItem } from "../CellRightItem/CellRightItem";
import styles from "./CellSelectedItem.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.2--Token-Test- .CellSelectedItem (node 50985:75730)
// anatomy: root[ selectionItem[ control(radio|checkbox), label ], rightItem?(icon|text) ]

export type CellSelectedItemVariant = "radioButton" | "checkbox";
export type CellSelectedItemRightItem = "None" | "Icon" | "Text";

interface Props {
  /** Selection control type: radio button or checkbox */
  variant?: CellSelectedItemVariant;
  /** Optional right-side item: none, icon (chevron), or secondary text */
  rightItem?: CellSelectedItemRightItem;
  /** Main label text shown next to the selection control */
  label?: string;
  /** Text shown in the right-side Text variant */
  rightText?: string;
  /** Whether the selection control is in a checked/selected state */
  selected?: boolean;
  /** Whether the item is disabled */
  disabled?: boolean;
  /** Click/change handler */
  onChange?: (selected: boolean) => void;
  className?: string;
}

export function CellSelectedItem({
  variant = "radioButton",
  rightItem = "None",
  label = "텍스트",
  rightText = "텍스트",
  selected = false,
  disabled = false,
  onChange,
  className,
}: Props) {
  const hasRightItem = rightItem !== "None";

  function handleClick() {
    if (!disabled && onChange) {
      onChange(!selected);
    }
  }

  return (
    <div
      className={[
        styles.root,
        hasRightItem ? styles.rootWithRight : "",
        disabled ? styles.rootDisabled : "",
        className ?? "",
      ]
        .filter(Boolean)
        .join(" ")}
      data-cx-component="CellSelectedItem"
      data-variant={variant}
      data-right-item={rightItem}
      data-selected={selected}
      data-disabled={disabled}
      onClick={handleClick}
      role={variant === "radioButton" ? "radio" : "checkbox"}
      aria-checked={selected}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : 0}
      onKeyDown={(e) => {
        if (e.key === " " || e.key === "Enter") {
          e.preventDefault();
          handleClick();
        }
      }}
    >
      {/* Selection control + label */}
      <div className={styles.selectionItem}>
        {/* Radio or Checkbox control */}
        {variant === "radioButton" ? (
          <span
            className={[
              styles.radio,
              selected ? styles.radioSelected : "",
              disabled ? styles.radioDisabled : "",
            ]
              .filter(Boolean)
              .join(" ")}
            aria-hidden="true"
          >
            {selected && <span className={styles.radioDot} />}
          </span>
        ) : (
          <span
            className={[
              styles.checkbox,
              selected ? styles.checkboxSelected : "",
              disabled ? styles.checkboxDisabled : "",
            ]
              .filter(Boolean)
              .join(" ")}
            aria-hidden="true"
          >
            {selected && (
              <svg
                className={styles.checkIcon}
                width="12"
                height="9"
                viewBox="0 0 12 9"
                fill="none"
              >
                <path
                  d="M1.5 4.5L4.5 7.5L10.5 1.5"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </span>
        )}

        {/* Label text */}
        <span
          className={[
            styles.label,
            disabled ? styles.labelDisabled : "",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {label}
        </span>
      </div>

      {rightItem === "Icon" && (
        <CellRightItem variants="Icon" />
      )}

      {rightItem === "Text" && (
        <CellRightItem variants="TextInfo" text={rightText} />
      )}
    </div>
  );
}
