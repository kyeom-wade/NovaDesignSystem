import styles from "./InputHelpTextItem.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.3 .InputHelpTextItem (node 54558:54703)
// anatomy: root[ text ]
// variants: danger(false | true)

interface Props {
  /** Help text content */
  children?: string;
  /** Danger state */
  danger?: boolean;
  className?: string;
}

export function InputHelpTextItem({
  children = "Help Text",
  danger = false,
  className,
}: Props) {
  const rootClass = [styles.root, className].filter(Boolean).join(" ");

  return (
    <div
      className={rootClass}
      data-cx-component="InputHelpTextItem"
      data-node-id="54558:54703"
      data-danger={danger ? "true" : "false"}
    >
      <p className={[styles.text, danger ? styles.danger : styles.default].join(" ")}>
        {children}
      </p>
    </div>
  );
}
