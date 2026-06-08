import React from "react";
import styles from "./TitleTextLeftItem.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.2--Token-Test- .TitleTextLeftItem (node 50943:28006)
// anatomy: root[ ?textVariant[ value ], ?iconVariant[ iconWrap[ icon ] ], ?badgeVariant[ badgeWrap[ badgeLabel ] ] ]
// Variants: variant="Text"|"Icon"|"Badge"

interface Props {
  /** Which left-side indicator variant to render */
  variant?: "Text" | "Icon" | "Badge";
  /** Text number/label shown in Text variant */
  textValue?: string;
  /** Alt text for icon in Icon variant */
  iconAlt?: string;
  /** Label shown inside Badge variant pill */
  badgeLabel?: string;
  className?: string;
}

const INFO_ICON_SRC =
  "https://www.figma.com/api/mcp/asset/72dcf1a3-ff78-4033-bf75-bbdb456be982";

export function TitleTextLeftItem({
  variant = "Text",
  textValue = "2",
  iconAlt = "",
  badgeLabel = "Badge",
  className,
}: Props) {
  return (
    <div
      className={[styles.root, className].filter(Boolean).join(" ")}
      data-cx-component="TitleTextLeftItem"
    >
      {variant === "Text" && (
        <span className={styles.textValue}>{textValue}</span>
      )}

      {variant === "Icon" && (
        <div className={styles.iconWrap} data-name="IconItem">
          <div className={styles.iconInner} data-name="Variants=Info, Fill=Off">
            <div className={styles.iconShape}>
              <img className={styles.iconImg} src={INFO_ICON_SRC} alt={iconAlt} />
            </div>
          </div>
        </div>
      )}

      {variant === "Badge" && (
        <div className={styles.badgeWrap} data-name="BadgeItem">
          <span className={styles.badgeLabel}>{badgeLabel}</span>
        </div>
      )}
    </div>
  );
}
