// Figma SSOT: SKT-Next_UI-Draft_3.2--Token-Test- .IconItem/Nomal/Bubble (node 51578:64729)
// Anatomy: speech-bubble outline (line) or filled (solid) with three dots inside, pointing tail at bottom-center

import styles from "./IconBubble.module.css";

export type IconBubbleVariant = "line" | "fill";

export interface IconBubbleProps {
  /** Icon size in px. Defaults to 24 (natural Figma size). */
  size?: number;
  /** CSS color value; defaults to currentColor for theme inheritance. */
  color?: string;
  /** Additional class names. */
  className?: string;
  /** Glyph variant: outline stroke ("line") or solid filled ("fill"). Defaults to "line". */
  variant?: IconBubbleVariant;
}

export function IconBubble({
  size = 24,
  color = "currentColor",
  className,
  variant = "line",
}: IconBubbleProps) {
  const rootClass = [styles.root, className].filter(Boolean).join(" ");

  if (variant === "fill") {
    return (
      <svg
        data-cx-component="IconBubble"
        className={rootClass}
        width={size}
        height={size}
        viewBox="0 0 18 16.3234"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M16 0C17.1046 0 18 0.895421 18 1.99998V10.8124C18 12.4692 16.6569 13.8124 15 13.8124H11.3682L9.80273 15.9198C9.4029 16.4577 8.5971 16.4577 8.19727 15.9198L6.63184 13.8124H3C1.34315 13.8124 0 12.4692 0 10.8124V1.99998C0 0.895421 0.895431 0 2 0H16ZM5 5.99994C4.44772 5.99994 4 6.44765 4 6.99993C4 7.55221 4.44772 7.99992 5 7.99992C5.55228 7.99992 6 7.55221 6 6.99993C6 6.44765 5.55228 5.99994 5 5.99994ZM9 5.99994C8.44772 5.99994 8 6.44765 8 6.99993C8 7.55221 8.44772 7.99992 9 7.99992C9.55228 7.99992 10 7.55221 10 6.99993C10 6.44765 9.55228 5.99994 9 5.99994ZM13 5.99994C12.4477 5.99994 12 6.44765 12 6.99993C12 7.55221 12.4477 7.99992 13 7.99992C13.5523 7.99992 14 7.55221 14 6.99993C14 6.44765 13.5523 5.99994 13 5.99994Z"
          fill={color}
        />
      </svg>
    );
  }

  // variant === "line" (default)
  return (
    <svg
      data-cx-component="IconBubble"
      className={rootClass}
      width={size}
      height={size}
      viewBox="0 0 18 16.3237"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M16 0C17.1046 0 18 0.895431 18 2V10.8125C18 12.4176 16.7394 13.7283 15.1543 13.8086L15 13.8125H11.3682L9.80273 15.9199L9.72363 16.0146C9.33215 16.4267 8.66785 16.4267 8.27637 16.0146L8.19727 15.9199L6.63184 13.8125H3C1.34315 13.8125 0 12.4694 0 10.8125V2C0 0.895431 0.895431 0 2 0H16ZM2 10.8125C2 11.3648 2.44771 11.8125 3 11.8125H6.63184L6.86719 11.8262C7.40997 11.8905 7.90723 12.1759 8.2373 12.6201L9 13.6455L9.7627 12.6201L9.91406 12.4395C10.2894 12.0418 10.8145 11.8126 11.3682 11.8125H15C15.5523 11.8125 16 11.3648 16 10.8125V2H2V10.8125ZM5 6C5.55228 6 6 6.44772 6 7C6 7.55228 5.55228 8 5 8C4.44772 8 4 7.55228 4 7C4 6.44772 4.44772 6 5 6ZM9 6C9.55228 6 10 6.44772 10 7C10 7.55228 9.55228 8 9 8C8.44772 8 8 7.55228 8 7C8 6.44772 8.44772 6 9 6ZM13 6C13.5523 6 14 6.44772 14 7C14 7.55228 13.5523 8 13 8C12.4477 8 12 7.55228 12 7C12 6.44772 12.4477 6 13 6Z"
        fill={color}
      />
    </svg>
  );
}
