import React from "react";
import { ButtonItem } from "../ButtonItem/ButtonItem";
import { NavigationButtonItem } from "../NavigationButtonItem/NavigationButtonItem";
import styles from "./BottomGroupAiAreaItem.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.3 .BottomGroupAiAreaItem (node 51308:127243)
// anatomy: root[ buttonGroup[ NavigationButtonItem(AI collapsed), ButtonItem | splitButton[ secondary, divider, primary ] ] ]
// Variants: "1 Botton" = icon + primary CTA, "2 Botton" = icon + split primary pill

interface Props {
  /** Layout variant: single button or two-split button */
  variant?: "1 Botton" | "2 Botton";
  /** Figma variant prop name alias */
  variants?: "1 Botton" | "2 Botton";
  /** Figma label prop alias. Used as primaryLabel fallback. */
  label?: string;
  /** Primary CTA label — used as-is for "1 Botton", becomes the right label for "2 Botton" */
  primaryLabel?: string;
  /** Left label shown only in "2 Botton" variant */
  secondaryLabel?: string;
  /** Click handler for the main (right) button */
  onPrimary?: () => void;
  /** Click handler for the secondary (left) button — only meaningful in "2 Botton" */
  onSecondary?: () => void;
  /** Alt-text for the icon image */
  iconAlt?: string;
  className?: string;
}

export function BottomGroupAiAreaItem({
  variant = "1 Botton",
  variants,
  label,
  primaryLabel = "Label",
  secondaryLabel = "Label",
  onPrimary,
  onSecondary,
  className,
}: Props) {
  const resolvedVariant = variants ?? variant;
  const is2Botton = resolvedVariant === "2 Botton";
  const resolvedPrimaryLabel = label ?? primaryLabel;

  return (
    <div
      className={[styles.root, className].filter(Boolean).join(" ")}
      data-cx-component="BottomGroupAiAreaItem"
      data-variant={resolvedVariant}
    >
      <div className={styles.buttonGroup}>
        <NavigationButtonItem
          className={styles.iconButton}
          variant="AI"
          disclosureAi={false}
        />

        {is2Botton && (
          <div className={styles.splitButton}>
            <button
              type="button"
              className={styles.splitCta}
              onClick={onSecondary}
            >
              {secondaryLabel}
            </button>
            <span className={styles.divider} aria-hidden="true" />
            <button
              type="button"
              className={styles.splitCta}
              onClick={onPrimary}
            >
              {resolvedPrimaryLabel}
            </button>
          </div>
        )}

        {!is2Botton && (
          <ButtonItem
            className={styles.primaryButton}
            variant="Primary"
            size="XLarge"
            label={resolvedPrimaryLabel}
            icon={false}
            onClick={onPrimary}
          />
        )}
      </div>
    </div>
  );
}
