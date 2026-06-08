import React from "react";
import styles from "./Input.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.2--Token-Test- .Input (node 51521:25412)
// anatomy: wrap[ inputRow*[ label?, fieldRow[ textField[ placeholder ], button? ], helpText? ] ]
// variants: "1Input" = 1 row (label+button+helpText), "2Input" = 2 rows (1st: label, no button/helpText; 2nd: button+helpText), "3Input" = 3 rows (1st: label; 2nd: button; 3rd: no button+helpText)

export type InputVariants = "1Input" | "2Input" | "3Input";

interface Props {
  /** Layout variant: number of stacked input rows */
  variants?: InputVariants;
  /** Shared label text shown on the first row */
  labelText?: string;
  /** Placeholder shown in every text field */
  placeholder?: string;
  /** Button label text */
  buttonLabel?: string;
  /** Help text content */
  helpTextContent?: string;
  /** Whether to show the label on the first row */
  label?: boolean;
  /** Additional class name for the root element */
  className?: string;
}

export function Input({
  variants = "1Input",
  labelText = "레이블",
  placeholder = "텍스트를 입력하세요",
  buttonLabel = "버튼",
  helpTextContent = "Help Text",
  label = true,
  className,
}: Props) {
  const is2Input = variants === "2Input";
  const is3Input = variants === "3Input";
  const isMulti = is2Input || is3Input;

  return (
    <div
      className={[styles.wrap, className].filter(Boolean).join(" ")}
      data-cx-component="Input"
      data-variants={variants}
    >
      {/* Row 1: always shown — has label; no button and no helpText when multi-row */}
      <div className={styles.inputRow}>
        {label && (
          <div className={styles.labelRow}>
            <span className={styles.label}>{labelText}</span>
          </div>
        )}
        <div className={styles.fieldRow}>
          <div className={styles.textField}>
            <span className={styles.fieldTextPlaceholder}>{placeholder}</span>
          </div>
          {!isMulti && (
            <button type="button" className={styles.btn}>
              <span className={styles.btnText}>{buttonLabel}</span>
            </button>
          )}
        </div>
        {!isMulti && (
          <div className={styles.helpRow}>
            <span className={styles.helpText}>{helpTextContent}</span>
          </div>
        )}
      </div>

      {/* Row 2: shown for 2Input and 3Input — always has a button */}
      {isMulti && (
        <div className={styles.inputRowNoPt}>
          <div className={styles.fieldRow}>
            <div className={styles.textField}>
              <span className={styles.fieldTextPlaceholder}>{placeholder}</span>
            </div>
            <button type="button" className={styles.btn}>
              <span className={styles.btnText}>{buttonLabel}</span>
            </button>
          </div>
          {/* 2Input shows helpText on row 2; 3Input does not */}
          {is2Input && (
            <div className={styles.helpRow}>
              <span className={styles.helpText}>{helpTextContent}</span>
            </div>
          )}
        </div>
      )}

      {/* Row 3: shown for 3Input only — no button, shows helpText */}
      {is3Input && (
        <div className={styles.inputRowNoPt}>
          <div className={styles.fieldRow}>
            <div className={styles.textField}>
              <span className={styles.fieldTextPlaceholder}>{placeholder}</span>
            </div>
          </div>
          <div className={styles.helpRow}>
            <span className={styles.helpText}>{helpTextContent}</span>
          </div>
        </div>
      )}
    </div>
  );
}
