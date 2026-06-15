import styles from "./InputCaretItem.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.3 .InputCaretItem (node 51715:87224)
// anatomy: root — 1px × 20px pill-shaped brand-colored input caret indicator

interface Props {
  /** Additional class name */
  className?: string;
}

export function InputCaretItem({ className }: Props) {
  const rootClass = [styles.root, className]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={rootClass}
      data-cx-component="InputCaretItem"
      data-node-id="51715:87224"
      aria-hidden="true"
    />
  );
}
