import React from "react";
import { IconBack } from "../IconBack";
import { IconDummy } from "../IconDummy";
import styles from "./Appbar.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.3 .Appbar (node 54486:38840)
// anatomy: root[ Title[ ?AppBarItem(back), ?PageTitle ], ?AppBarItem(dummy x 3) ]
// Variants: variants(Default | Inverse)

interface IconButtonProps {
  /** Accessible label for the icon button */
  "aria-label"?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  /** Icon content; renders a placeholder shape when omitted */
  children?: React.ReactNode;
}

interface Props {
  /** @deprecated Legacy depth alias. Use variants instead. */
  variant?: "1Depth" | "2depth";
  /** Figma visual variant */
  variants?: "Default" | "Inverse";
  /** Page title text */
  pageTitle?: string;
  /** Legacy title text, or Figma title visibility boolean */
  title?: string | boolean;
  /** Show left back icon */
  leftItem?: boolean;
  /** Show right icon group */
  rightItem?: boolean;
  /** @deprecated Use leftItem instead. */
  showLeftItem?: boolean;
  /** @deprecated Use rightItem instead. */
  showRightItem?: boolean;
  /** Number of right-side icon buttons (1-3) */
  rightItemCount?: 1 | 2 | 3;
  /** Per-button config for right icon area */
  rightButtons?: IconButtonProps[];
  /** Left back-button config */
  leftButton?: IconButtonProps;
  /** Legacy 1Depth callbacks retained for compatibility */
  onBarcode?: () => void;
  onCart?: () => void;
  onMenu?: () => void;
  className?: string;
}

function IconButton({
  "aria-label": ariaLabel,
  onClick,
  children,
}: IconButtonProps) {
  return (
    <button
      type="button"
      className={styles.iconButton}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      <span className={styles.iconSlot}>{children}</span>
    </button>
  );
}

export function Appbar({
  variant,
  variants = "Default",
  pageTitle,
  title = true,
  leftItem,
  rightItem,
  showLeftItem,
  showRightItem,
  rightItemCount = 3,
  rightButtons = [],
  leftButton,
  className,
}: Props) {
  const resolvedVariant = variants ?? (variant === "1Depth" ? "Default" : "Default");
  const isInverse = resolvedVariant === "Inverse";
  const resolvedLeftItem = leftItem ?? showLeftItem ?? true;
  const resolvedRightItem = rightItem ?? showRightItem ?? true;
  const showTitle = typeof title === "boolean" ? title : true;
  const resolvedTitle = pageTitle ?? (typeof title === "string" ? title : "PageTitle");
  const resolvedRightItemCount = Math.min(Math.max(rightItemCount, 1), 3);
  const iconColor = isInverse
    ? "var(--skt-color-text-inverse-primary, #fff)"
    : "var(--skt-color-icon-neutral-primary, #060c1f)";
  const dummyColor = isInverse
    ? "var(--skt-color-palette-white-alpha-400, rgba(255, 255, 255, 0.4))"
    : "var(--skt-color-palette-gray-alpha-200, rgba(6, 12, 31, 0.2))";

  const rightSlots = Array.from(
    { length: resolvedRightItemCount },
    (_, i) =>
      rightButtons[i] ?? {
        "aria-label": "메뉴",
        children: <IconDummy size={24} color={dummyColor} />,
      }
  );
  const leftSlot = leftButton ?? {
    "aria-label": "뒤로가기",
    children: <IconBack size={24} color={iconColor} />,
  };

  return (
    <div
      className={[
        styles.root,
        isInverse ? styles.inverse : styles.default,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      data-cx-component="Appbar"
      data-variant={resolvedVariant}
    >
      <div className={styles.titleArea}>
        {resolvedLeftItem && <IconButton {...leftSlot} />}
        {showTitle && <p className={styles.titleText}>{resolvedTitle}</p>}
      </div>

      {resolvedRightItem && (
        <div className={styles.rightArea}>
          {rightSlots.map((button, index) => (
            <IconButton key={index} {...button} />
          ))}
        </div>
      )}
    </div>
  );
}
