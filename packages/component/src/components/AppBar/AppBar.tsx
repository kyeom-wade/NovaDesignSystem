import React from "react";
import { AppBarItem } from "../AppBarItem";
import { IconBack } from "../IconBack";
import { IconBarcode } from "../IconBarcode";
import { IconCart } from "../IconCart";
import { IconClose } from "../IconClose";
import { IconMenu } from "../IconMenu";
import { IconSearch } from "../IconSearch";
import styles from "./AppBar.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.2--Token-Test- .Appbar (node 51664:73057)
// anatomy:
//   1Depth: root[ leftArea, rightArea[ Tab(barcode), Tab(cart), Tab(menu) ] ]
//   2depth: root[ titleArea[ backBtn?, title ], rightArea[ iconBtn × 1..3 ] ]

interface IconButtonProps {
  /** Accessible label for the icon button */
  "aria-label"?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  /** Icon content; renders a placeholder shape when omitted */
  children?: React.ReactNode;
}

interface Props {
  /** Bar depth — "1Depth" is the home-only header; "2depth" is a sub-page nav bar */
  variant?: "1Depth" | "2depth";
  /** (2depth only) Page title text */
  title?: string;
  /** (2depth only) Show left back/close icon button slot */
  showLeftItem?: boolean;
  /** (2depth only) Show right icon button group */
  showRightItem?: boolean;
  /** (2depth only) Number of right-side icon buttons (1–3) */
  rightItemCount?: 1 | 2 | 3;
  /** (1Depth only) Click handler for Barcode icon */
  onBarcode?: () => void;
  /** (1Depth only) Click handler for Cart icon */
  onCart?: () => void;
  /** (1Depth only) Click handler for Menu icon */
  onMenu?: () => void;
  /** (2depth only) Per-button config for right icon area */
  rightButtons?: IconButtonProps[];
  /** (2depth only) Left back-button config */
  leftButton?: IconButtonProps;
  className?: string;
}

/** Pill-style icon button used in the 1Depth (home) right area */
function TabButton({
  "aria-label": ariaLabel,
  onClick,
  children,
}: IconButtonProps) {
  return (
    <button
      type="button"
      className={styles.tabBtn}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      <span className={styles.tabIcon}>{children}</span>
    </button>
  );
}

export function Appbar({
  variant = "1Depth",
  title = "페이지명",
  showLeftItem = true,
  showRightItem = true,
  rightItemCount = 3,
  onBarcode,
  onCart,
  onMenu,
  rightButtons = [],
  leftButton,
  className,
}: Props) {
  const is1Depth = variant === "1Depth";
  const is2Depth = variant === "2depth";

  const rightSlots = Array.from(
    { length: rightItemCount },
    (_, i) => rightButtons[i] ?? [
      { "aria-label": "검색", children: <IconSearch size={24} /> },
      { "aria-label": "메뉴", children: <IconMenu size={24} /> },
      { "aria-label": "닫기", children: <IconClose size={24} /> },
    ][i] ?? {}
  );
  const leftSlot = leftButton ?? {
    "aria-label": "뒤로가기",
    children: <IconBack size={24} />,
  };

  return (
    <div
      className={[
        styles.root,
        is1Depth ? styles.root1Depth : styles.root2Depth,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      data-cx-component="Appbar"
      data-variant={variant}
    >
      {/* ── 1Depth: home header ─────────────────────────────────────── */}
      {is1Depth && (
        <>
          {/* Left placeholder area (48×48, kept for spacing symmetry) */}
          <div className={styles.leftArea1Depth} aria-hidden="true" />

          {/* Right icon tabs */}
          <div className={styles.rightArea1Depth}>
            <TabButton aria-label="바코드" onClick={onBarcode}>
              <IconBarcode size={24} />
            </TabButton>
            <TabButton aria-label="장바구니" onClick={onCart}>
              <IconCart size={24} />
            </TabButton>
            <TabButton aria-label="메뉴" onClick={onMenu}>
              <IconMenu size={24} />
            </TabButton>
          </div>
        </>
      )}

      {/* ── 2depth: sub-page nav bar ────────────────────────────────── */}
      {is2Depth && (
        <>
          {/* Title area (left icon + text) */}
          <div className={styles.titleArea}>
            {showLeftItem && (
              <AppBarItem
                count={1}
                buttons={[leftSlot]}
                className={styles.leftItem}
              />
            )}
            <p className={styles.titleText}>{title}</p>
          </div>

          {/* Right icon button group */}
          {showRightItem && (
            <AppBarItem
              count={rightItemCount}
              buttons={rightSlots}
              className={styles.rightArea2Depth}
            />
          )}
        </>
      )}
    </div>
  );
}
