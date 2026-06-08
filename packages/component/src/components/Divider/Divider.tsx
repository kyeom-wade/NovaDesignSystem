import styles from "./Divider.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.2--Token-Test- .Divider (node 50943:27999)
// anatomy: root[ line ]
// variants: Contents (1px thin rule) | Section (4px thick rule)

interface Props {
  /** Visual weight of the divider line. "contents" = 1px, "section" = 4px. */
  variant?: "contents" | "section";
  /** Additional class for layout overrides from the consumer */
  className?: string;
}

export function Divider({ variant = "contents", className }: Props) {
  return (
    <div
      className={[styles.root, styles[variant], className].filter(Boolean).join(" ")}
      data-cx-component="Divider"
      role="separator"
      aria-orientation="horizontal"
    >
      <div className={styles.line} />
    </div>
  );
}
