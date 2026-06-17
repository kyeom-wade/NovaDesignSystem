import styles from "./BadgeIconItem.module.css";
import { IconLogo } from "../IconLogo/IconLogo";

// Figma SSOT: SKT-Next_UI-Draft_3.3 .BadgeIconItem (node 54182:34717)
// anatomy: root[ main[ Ico, label ], caption? ]
// Variants: subtext("Subtext2"|"On")

export interface BadgeIconItemProps {
  /** Main label text shown next to the icon. Figma property name: label */
  label?: string;
  /** Right-side caption shown when subtext="On". Figma property name: caption */
  caption?: string;
  /** Figma variant property. "Subtext2" is compact, "On" shows caption. */
  subtext?: "Subtext2" | "On";
  /** Legacy alias for label */
  text?: string;
  /** Legacy alias for caption */
  subText?: string;
  /** Legacy alias for subtext="On" */
  showSubText?: boolean;
  /** Optional custom icon src URL */
  iconSrc?: string;
  /** Alt text for the icon image */
  iconAlt?: string;
  className?: string;
}

export function BadgeIconItem({
  label,
  caption,
  subtext,
  text,
  subText,
  showSubText,
  iconSrc,
  iconAlt = "",
  className,
}: BadgeIconItemProps) {
  const resolvedLabel = label ?? text ?? "Label";
  const resolvedCaption = caption ?? subText ?? "Caption";
  const resolvedSubtext = subtext ?? (showSubText ? "On" : "Subtext2");
  const isOn = resolvedSubtext === "On";

  const rootClass = [
    styles.root,
    isOn ? styles.withCaption : styles.compact,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={rootClass}
      data-cx-component="BadgeIconItem"
      data-subtext={resolvedSubtext}
    >
      <div className={styles.main}>
        <div className={styles.iconWrap}>
          {iconSrc ? (
            <img className={styles.icon} src={iconSrc} alt={iconAlt} />
          ) : (
            <IconLogo className={styles.defaultIcon} variant="TW" size={16} />
          )}
        </div>
        <p className={styles.label}>{resolvedLabel}</p>
      </div>
      {isOn && <p className={styles.caption}>{resolvedCaption}</p>}
    </div>
  );
}
