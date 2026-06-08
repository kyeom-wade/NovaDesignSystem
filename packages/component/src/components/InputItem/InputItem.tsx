import React from "react";
import styles from "./InputItem.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.2--Token-Test- .InputItem (node 50943:28032)
// anatomy: wrap[ label?, fieldRow[ textField[ placeholder|value, caret? ], button? ], helpText? ]
// States: Default | Focused | Typing | Typed | Disabled
// Error variant changes label/helpText color and field background to danger

export type InputItemState = "Default" | "Focused" | "Typing" | "Typed" | "Disabled";

interface Props {
  /** 현재 입력 상태 */
  states?: InputItemState;
  /** 에러 여부 */
  error?: boolean;
  /** 레이블 노출 여부 */
  label?: boolean;
  /** 레이블 텍스트 */
  labelText?: string;
  /** 도움말 텍스트 노출 여부 */
  helpText?: boolean;
  /** 도움말 텍스트 */
  helpTextContent?: string;
  /** 오른쪽 버튼 노출 여부 */
  button?: boolean;
  /** 버튼 레이블 */
  buttonLabel?: string;
  /** 입력 필드 플레이스홀더 */
  placeholder?: string;
  /** 버튼 클릭 핸들러 */
  onButtonClick?: () => void;
  /** 추가 클래스명 */
  className?: string;
}

export function InputItem({
  states = "Default",
  error = false,
  label = true,
  labelText = "레이블",
  helpText = true,
  helpTextContent = "Help Text",
  button = true,
  buttonLabel = "버튼",
  placeholder = "텍스트를 입력하세요",
  onButtonClick,
  className,
}: Props) {
  const isTyping = states === "Typing";
  const isDisabled = states === "Disabled";

  // Field background class
  const fieldClass = [
    styles.textField,
    isDisabled
      ? styles.textFieldDisabled
      : error
      ? styles.textFieldError
      : states === "Default" || states === "Typed"
      ? styles.textFieldDefault
      : styles.textFieldFocused, // Focused | Typing
  ]
    .filter(Boolean)
    .join(" ");

  // Text inside the field: tertiary for placeholder states, primary for typed/typing
  const fieldTextClass =
    states === "Typed" || isTyping
      ? isDisabled
        ? styles.fieldTextDisabled
        : styles.fieldTextPrimary
      : isDisabled
      ? styles.fieldTextDisabled
      : styles.fieldTextPlaceholder;

  return (
    <div
      className={[styles.wrap, className].filter(Boolean).join(" ")}
      data-cx-component="InputItem"
      data-state={states}
      data-error={error ? "true" : undefined}
    >
      {/* Label */}
      {label && (
        <div className={styles.labelRow}>
          <span className={error ? styles.labelError : styles.label}>
            {labelText}
          </span>
        </div>
      )}

      {/* Field row */}
      <div className={styles.fieldRow}>
        <div className={fieldClass}>
          <span className={fieldTextClass}>{placeholder}</span>
          {isTyping && !isDisabled && (
            <span className={styles.caret} aria-hidden="true" />
          )}
        </div>

        {button && (
          <button
            type="button"
            className={isDisabled ? styles.btnDisabled : styles.btn}
            disabled={isDisabled}
            onClick={onButtonClick}
          >
            <span className={isDisabled ? styles.btnTextDisabled : styles.btnText}>
              {buttonLabel}
            </span>
          </button>
        )}
      </div>

      {/* Help text */}
      {helpText && (
        <div className={styles.helpRow}>
          <span className={error ? styles.helpTextError : styles.helpText}>
            {helpTextContent}
          </span>
        </div>
      )}
    </div>
  );
}
