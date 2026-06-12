import { InputCaretItem } from "../InputCaretItem/InputCaretItem";
import { InputClearButtonItem } from "../InputClearButtonItem/InputClearButtonItem";
import styles from "./InputTypeItem.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.3 .InputTypeItem (node 54420:140015)
// anatomy: root[ textField[ contents[ text, InputCaretItem? ], InputClearButtonItem? ] ]
// variants: state(Default | Focused | Typing | Completed | Disabled) x danger(boolean)

export type InputTypeItemState =
  | "Default"
  | "Focused"
  | "Typing"
  | "Completed"
  | "Disabled";

interface Props {
  /** Input visual state */
  state?: InputTypeItemState;
  /** Danger/error state */
  danger?: boolean;
  /** Text or placeholder content */
  text?: string;
  /** Clear button click handler, shown in Typing state */
  onClear?: () => void;
  className?: string;
}

export function InputTypeItem({
  state = "Default",
  danger = false,
  text = "텍스트를 입력하세요",
  onClear,
  className,
}: Props) {
  const isDisabled = state === "Disabled";
  const isTyping = state === "Typing";
  const isFocused = state === "Focused";
  const hasPrimaryText = state === "Typing" || state === "Completed";

  const rootClass = [styles.root, className].filter(Boolean).join(" ");
  const textFieldClass = [
    styles.textField,
    isDisabled
      ? styles.disabled
      : danger
      ? styles.danger
      : state === "Focused" || state === "Typing"
      ? styles.focused
      : styles.default,
    isTyping ? styles.typing : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={rootClass}
      data-cx-component="InputTypeItem"
      data-node-id="54420:140015"
      data-state={state}
      data-danger={danger ? "true" : "false"}
    >
      <div className={textFieldClass} data-name="Text Field">
        <div className={styles.contents} data-name="Contents">
          {isFocused && !isDisabled && <InputCaretItem className={styles.caretLeading} />}
          <p
            className={[
              styles.text,
              isDisabled
                ? styles.textDisabled
                : hasPrimaryText
                ? styles.textPrimary
                : styles.textPlaceholder,
            ]
              .filter(Boolean)
              .join(" ")}
          >
            {text}
          </p>
          {isTyping && !isDisabled && <InputCaretItem className={styles.caretInline} />}
        </div>

        {isTyping && !isDisabled && (
          <InputClearButtonItem
            className={styles.clearButton}
            onClick={onClear}
          />
        )}
      </div>
    </div>
  );
}
