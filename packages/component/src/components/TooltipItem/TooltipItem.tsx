import React from "react";
import styles from "./TooltipItem.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.2--Token-Test- .TooltipItem (node 50943:28013)
// anatomy: root[ bubble[ text ], tail[ union ] ]
// tail position depends on direction: Bottom* = tail below bubble, Top* = tail above bubble, Left/Right = tail on side

type Direction =
  | "BottomLeft"
  | "BottomCenter"
  | "BottomRight"
  | "TopLeft"
  | "TopCenter"
  | "TopRight"
  | "Left"
  | "Right";

interface Props {
  /** Which direction the tooltip tail points toward (anchor point) */
  direction?: Direction;
  /** Tooltip body text */
  text?: string;
  className?: string;
}

// Inline SVG tail — a small upward-pointing triangle (11×5px).
// For Bottom* variants it's rendered normally (pointing up toward content).
// For Top* variants it's flipped vertically (pointing down).
// For Left/Right it's rotated 90°.
function TailSVG() {
  return (
    <svg
      width="11"
      height="5"
      viewBox="0 0 11 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M4.79289 0.292893C5.18342 -0.0976311 5.81658 -0.0976311 6.20711 0.292893L11 5H0L4.79289 0.292893Z"
        fill="white"
      />
    </svg>
  );
}

export function TooltipItem({
  direction = "BottomLeft",
  text = "내용입력되는 부분",
  className,
}: Props) {
  const isTop = direction === "TopLeft" || direction === "TopCenter" || direction === "TopRight";
  const isBottom = direction === "BottomLeft" || direction === "BottomCenter" || direction === "BottomRight";
  const isLeft = direction === "Left";
  const isRight = direction === "Right";
  const isSide = isLeft || isRight;

  // Tail horizontal alignment for Top/Bottom variants
  const tailAlignClass =
    direction === "BottomLeft" || direction === "TopLeft"
      ? styles.tailLeft
      : direction === "BottomCenter" || direction === "TopCenter"
      ? styles.tailCenter
      : direction === "BottomRight" || direction === "TopRight"
      ? styles.tailRight
      : "";

  const rootClass = [
    styles.root,
    isTop ? styles.dirTop : "",
    isBottom ? styles.dirBottom : "",
    isLeft ? styles.dirLeft : "",
    isRight ? styles.dirRight : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const bubble = (
    <div className={styles.bubble} data-name="Bubble">
      <span className={styles.text}>{text}</span>
    </div>
  );

  const tail = (
    <div className={[styles.tailWrapper, tailAlignClass].filter(Boolean).join(" ")} data-name="Tail">
      <div className={styles.tailIcon}>
        <TailSVG />
      </div>
    </div>
  );

  const tailFlipped = (
    <div className={[styles.tailWrapper, styles.tailFlipped, tailAlignClass].filter(Boolean).join(" ")} data-name="Tail">
      <div className={styles.tailIcon}>
        <TailSVG />
      </div>
    </div>
  );

  const tailRotatedRight = (
    <div className={[styles.tailWrapper, styles.tailRotatedRight].filter(Boolean).join(" ")} data-name="Tail">
      <div className={styles.tailIcon}>
        <TailSVG />
      </div>
    </div>
  );

  const tailRotatedLeft = (
    <div className={[styles.tailWrapper, styles.tailRotatedLeft].filter(Boolean).join(" ")} data-name="Tail">
      <div className={styles.tailIcon}>
        <TailSVG />
      </div>
    </div>
  );

  return (
    <div className={rootClass} data-cx-component="TooltipItem">
      {isTop && (
        <>
          {bubble}
          {tailFlipped}
        </>
      )}
      {isBottom && (
        <>
          {bubble}
          {tail}
        </>
      )}
      {isRight && (
        <>
          {tailRotatedLeft}
          {bubble}
        </>
      )}
      {isLeft && (
        <>
          {bubble}
          {tailRotatedRight}
        </>
      )}
    </div>
  );
}
