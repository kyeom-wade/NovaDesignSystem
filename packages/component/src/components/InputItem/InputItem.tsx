import { ButtonItem } from "../ButtonItem/ButtonItem";
import { InputTypeItem, type InputTypeItemState } from "../InputTypeItem/InputTypeItem";
import styles from "./InputItem.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.3 .InputItem (node 50943:28032)
// anatomy: wrap[ Contents[ InputTypeItem, ButtonItem? ] ]
// States: Default | Focused | Typing | Typed | Disabled

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
  button = true,
  buttonLabel = "버튼",
  placeholder = "텍스트를 입력하세요",
  onButtonClick,
  className,
}: Props) {
  const isDisabled = states === "Disabled";
  const inputState: InputTypeItemState =
    states === "Typed" ? "Completed" : states;

  return (
    <div
      className={[styles.wrap, className].filter(Boolean).join(" ")}
      data-cx-component="InputItem"
      data-state={states}
      data-error={error ? "true" : undefined}
    >
      <div className={styles.contents} data-name="Contents">
        <InputTypeItem
          className={styles.inputType}
          danger={error}
          state={inputState}
          text={placeholder}
        />
        {button && (
          <ButtonItem
            className={styles.button}
            variant="Secondary"
            size="Large"
            state={isDisabled ? "Disabled" : "Default"}
            label={buttonLabel}
            icon={false}
            onClick={onButtonClick}
          />
        )}
      </div>
    </div>
  );
}
