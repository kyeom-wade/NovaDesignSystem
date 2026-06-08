import styles from "./IconItem.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.2--Token-Test- .IconItem (node 51561:60021)
// anatomy: root<svg>[ path(corner-brackets) ] — size-variant icon placeholder showing four corner-bracket handles

type IconVariant = "40" | "32" | "24" | "20" | "16" | "12" | "10";

const VARIANT_SIZE: Record<IconVariant, number> = {
  "40": 40,
  "32": 32,
  "24": 24,
  "20": 20,
  "16": 16,
  "12": 12,
  "10": 10,
};

interface Props {
  /** Size variant — maps to the corresponding Figma icon size */
  variant?: IconVariant;
  /** Explicit pixel size override; defaults to the variant's natural size */
  size?: number;
  /** Fill color; defaults to currentColor so the icon inherits surrounding text color */
  color?: string;
  className?: string;
}

// Single path: four-corner-bracket / viewfinder glyph on a 20×20 viewBox
const PATH =
  "M1 14C1.55228 14 2 14.4477 2 15V18H5C5.55228 18 6 18.4477 6 19C6 19.5523 5.55228 20 5 20H2C0.895431 20 9.65645e-08 19.1046 0 18V15C-1.03508e-09 14.4477 0.447715 14 1 14ZM19 14C19.5523 14 20 14.4477 20 15V18C20 19.1046 19.1046 20 18 20H15C14.4477 20 14 19.5523 14 19C14 18.4477 14.4477 18 15 18H18V15C18 14.4477 18.4477 14 19 14ZM5 0C5.55228 0 6 0.447715 6 1C6 1.55228 5.55228 2 5 2H2V5C2 5.55228 1.55228 6 1 6C0.447715 6 0 5.55228 0 5V2C0 0.89543 0.895431 0 2 0H5ZM18 0C19.1046 0 20 0.89543 20 2V5C20 5.55228 19.5523 6 19 6C18.4477 6 18 5.55228 18 5V2H15C14.4477 2 14 1.55228 14 1C14 0.447715 14.4477 0 15 0H18Z";

export function IconItem({
  variant = "24",
  size,
  color = "currentColor",
  className,
}: Props) {
  const px = size ?? VARIANT_SIZE[variant];
  const rootClass = [styles.root, className].filter(Boolean).join(" ");

  return (
    <svg
      data-cx-component="IconItem"
      className={rootClass}
      width={px}
      height={px}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d={PATH} fill={color} fillRule="evenodd" clipRule="evenodd" />
    </svg>
  );
}
