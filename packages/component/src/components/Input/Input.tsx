import { InputItem } from "../InputItem/InputItem";
import { InputHelpTextItem } from "../InputHelpTextItem/InputHelpTextItem";
import styles from "./Input.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.3 .Input (node 51521:25412)
// anatomy: wrap[ label?, InputItem*, InputHelpTextItem? ]
// variants: 1Input = InputItem(button) + helpText, 2Input = 2 x InputItem(no button) + helpText, 3Input = InputItem(button) + 2 x InputItem(no button) + helpText

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
  /** Whether to show help text */
  helpText?: boolean;
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
  helpText = true,
  className,
}: Props) {
  const is2Input = variants === "2Input";
  const is3Input = variants === "3Input";
  const showSecondInput = is2Input || is3Input;

  return (
    <div
      className={[styles.wrap, className].filter(Boolean).join(" ")}
      data-cx-component="Input"
      data-variants={variants}
    >
      {label && (
        <p className={styles.label}>{labelText}</p>
      )}

      <InputItem
        className={styles.inputItem}
        button={!is2Input}
        buttonLabel={buttonLabel}
        placeholder={placeholder}
      />
      {showSecondInput && (
        <InputItem
          className={styles.inputItem}
          button={false}
          buttonLabel={buttonLabel}
          placeholder={placeholder}
        />
      )}
      {is3Input && (
        <InputItem
          className={styles.inputItem}
          button={false}
          buttonLabel={buttonLabel}
          placeholder={placeholder}
        />
      )}
      {helpText && (
        <InputHelpTextItem className={styles.helpText}>
          {helpTextContent}
        </InputHelpTextItem>
      )}
    </div>
  );
}
