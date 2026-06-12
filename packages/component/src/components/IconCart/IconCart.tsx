import styles from "./IconCart.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.2--Token-Test- .IconItem/Nomal/Cart (node 51578:64735)
// anatomy: root<svg>[ g > path(Union) ] — two fill variants: line (outline cart) | fill (solid cart)

interface Props {
  /** Natural icon size from Figma (24px grid, glyph is 18×18) */
  size?: number;
  /** Icon color — defaults to currentColor so it inherits text color */
  color?: string;
  /** Additional class names */
  className?: string;
  /**
   * Glyph style variant.
   * - "line" → outline stroke cart (Figma fill=Off, node 51561:33296)
   * - "fill" → solid filled cart   (Figma fill=On,  node 51573:60633)
   */
  variant?: "line" | "fill";
}

export function IconCart({
  size = 24,
  color = "currentColor",
  className,
  variant = "line",
}: Props) {
  const rootClass = [styles.root, className].filter(Boolean).join(" ");

  if (variant === "fill") {
    // Solid / filled cart — Figma node 51573:60633 (fill=On)
    return (
      <svg
        data-cx-component="IconCart"
        className={rootClass}
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
      >
        <path
          d="M8.99838 0C11.2075 0 12.9984 1.79086 12.9984 4H14.4124C15.9843 4 17.2898 5.2136 17.4046 6.78125L17.9906 14.7812C18.1177 16.5196 16.7414 18 14.9984 18H3.00034C1.25729 18 -0.118961 16.5196 0.00814839 14.7812L0.594086 6.78125C0.708875 5.21375 2.01365 4.00023 3.5853 4H4.99838C4.99838 1.79098 6.78941 0.000193007 8.99838 0ZM8.99838 2C7.89398 2.00019 6.99838 2.89555 6.99838 4H10.9984C10.9984 2.89543 10.103 2 8.99838 2Z"
          transform="translate(3 3)"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  // Outline / line cart — Figma node 51561:33296 (fill=Off)
  return (
    <svg
      data-cx-component="IconCart"
      className={rootClass}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M8.99865 0C11.2076 0.000232944 12.9987 1.791 12.9987 4H14.4127C15.9844 4.00022 17.2901 5.21375 17.4049 6.78125L17.9908 14.7812C18.1139 16.4652 16.8259 17.9075 15.1608 17.9961L14.9987 18H2.99963C1.31112 17.9999 -0.0326266 16.6106 0.000603264 14.9434L0.0074392 14.7812L0.593377 6.78125C0.70819 5.21365 2.01377 4.00005 3.58556 4H4.99865C4.99865 1.79086 6.78951 0 8.99865 0ZM3.58556 6C3.06175 6.00005 2.62688 6.40436 2.58849 6.92676L2.00256 14.9268C1.96012 15.5062 2.41866 15.9999 2.99963 16H14.9987C15.5795 15.9997 16.0381 15.5061 15.9957 14.9268L15.4098 6.92676C15.3714 6.40446 14.9364 6.00022 14.4127 6H3.58556ZM8.99865 2C7.89408 2 6.99865 2.89543 6.99865 4H10.9987C10.9987 2.89557 10.103 2.00023 8.99865 2Z"
        transform="translate(3 3)"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
}
