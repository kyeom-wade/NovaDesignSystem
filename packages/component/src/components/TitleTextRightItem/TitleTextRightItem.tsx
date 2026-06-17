import styles from "./TitleTextRightItem.module.css";
import { BadgeItem } from "../BadgeItem/BadgeItem";
import { IconInfo } from "../IconInfo/IconInfo";

// Figma SSOT: SKT-Next_UI-Draft_3.3 .TitleTextRightItem (node 50943:28006)
// anatomy: root[ IconItem | BadgeItem ]
// Variants: variants("Icon" | "Badge")

export interface TitleTextRightItemProps {
  /** Visual variant matching the Figma property name */
  variants?: "Icon" | "Badge";
  /** Label shown inside Badge variant */
  badgeLabel?: string;
  /** Accessible label for the Icon variant */
  iconLabel?: string;
  className?: string;
}

export function TitleTextRightItem({
  variants = "Icon",
  badgeLabel = "Label",
  iconLabel = "정보",
  className,
}: TitleTextRightItemProps) {
  const isBadge = variants === "Badge";

  return (
    <span
      className={[
        styles.root,
        isBadge ? styles.rootBadge : styles.rootIcon,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      data-cx-component="TitleTextRightItem"
      data-variant={variants}
    >
      {isBadge ? (
        <BadgeItem className={styles.badge} size="Small" color="Neutral" text={badgeLabel} />
      ) : (
        <span className={styles.iconAccessible} role="img" aria-label={iconLabel}>
          <IconInfo className={styles.icon} size={16} variant="line" />
        </span>
      )}
    </span>
  );
}
