import styles from "./IconInfo.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.2--Token-Test- .IconItem/Nomal/Info (node 51578:64731)
// anatomy: root<svg>[ path(info-circle) ] — two fill variants: line (outline info circle) | fill (solid info circle)

interface Props {
  /** Natural icon size from Figma (24px grid) */
  size?: number;
  /** Icon color — defaults to currentColor so it inherits text color */
  color?: string;
  /** Additional class names */
  className?: string;
  /**
   * Glyph style variant.
   * - "line" → outline info circle (Figma fill=Off, node 51561:33419)
   * - "fill" → solid filled info circle (Figma fill=On, node 51613:20857)
   */
  variant?: "line" | "fill";
}

export function IconInfo({
  size = 24,
  color = "currentColor",
  className,
  variant = "line",
}: Props) {
  const rootClass = [styles.root, className].filter(Boolean).join(" ");

  if (variant === "fill") {
    // Solid / filled info circle — Figma node 51613:20857 (fill=On)
    return (
      <svg
        data-cx-component="IconInfo"
        className={rootClass}
        width={size}
        height={size}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
      >
        <path
          d="M10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0ZM10 8C9.44772 8 9 8.44772 9 9V14C9 14.5523 9.44772 15 10 15C10.5523 15 11 14.5523 11 14V9C11 8.44772 10.5523 8 10 8ZM10 5C9.44772 5 9 5.44772 9 6C9 6.55228 9.44772 7 10 7C10.5523 7 11 6.55228 11 6C11 5.44772 10.5523 5 10 5Z"
          fill={color}
        />
      </svg>
    );
  }

  // Outline / line info circle — Figma node 51561:33419 (fill=Off)
  return (
    <svg
      data-cx-component="IconInfo"
      className={rootClass}
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0ZM10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2ZM10 8C10.5523 8 11 8.44772 11 9V14C11 14.5523 10.5523 15 10 15C9.44772 15 9 14.5523 9 14V9C9 8.44772 9.44772 8 10 8ZM10 5C10.5523 5 11 5.44772 11 6C11 6.55228 10.5523 7 10 7C9.44772 7 9 6.55228 9 6C9 5.44772 9.44772 5 10 5Z"
        fill={color}
      />
    </svg>
  );
}
