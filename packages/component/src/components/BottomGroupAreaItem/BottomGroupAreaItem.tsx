import { ButtonItem } from "../ButtonItem/ButtonItem";
import styles from "./BottomGroupAreaItem.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.3 .BottomGroupAreaItem (node 50990:41804)
// anatomy: wrap[ ButtonItem(primary) ] | wrap[ ButtonItem(secondary), ButtonItem(primary) ]

interface Props {
  /** Layout variant: one full-width button or two equal buttons side-by-side */
  variants?: "1 Botton" | "2 Botton";
  /** Label for the primary (brand-filled) button */
  primaryLabel?: string;
  /** Label for the secondary (neutral-filled) button — only shown in "2 Botton" */
  secondaryLabel?: string;
  /** Click handler for primary button */
  onPrimary?: () => void;
  /** Click handler for secondary button */
  onSecondary?: () => void;
  className?: string;
}

export function BottomGroupAreaItem({
  variants = "1 Botton",
  primaryLabel = "버튼",
  secondaryLabel = "버튼",
  onPrimary,
  onSecondary,
  className,
}: Props) {
  const is2Button = variants === "2 Botton";

  return (
    <div
      className={[styles.wrap, is2Button ? styles.wrapDual : "", className]
        .filter(Boolean)
        .join(" ")}
      data-cx-component="BottomGroupAreaItem"
    >
      {is2Button && (
        <ButtonItem
          className={styles.button}
          variant="Secondary"
          size="XLarge"
          label={secondaryLabel}
          icon={false}
          onClick={onSecondary}
        />
      )}
      <ButtonItem
        className={styles.button}
        variant="Primary"
        size="XLarge"
        label={primaryLabel}
        icon={false}
        onClick={onPrimary}
      />
    </div>
  );
}
