import styles from "./IconEvent.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.2--Token-Test- .IconItem/Nomal/Event (node 51578:64793)
// anatomy: root<svg>[ g > g > path(calendar body) + path(left pin) + path(right pin) ]

interface Props {
  /** Natural icon size from Figma (24px grid, glyph is 16×17) */
  size?: number;
  /** Icon color — defaults to currentColor so it inherits text color */
  color?: string;
  /** Additional class names */
  className?: string;
}

export function IconEvent({
  size = 24,
  color = "currentColor",
  className,
}: Props) {
  const rootClass = [styles.root, className].filter(Boolean).join(" ");

  return (
    <svg
      data-cx-component="IconEvent"
      className={rootClass}
      width={size}
      height={size}
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      {/* calendar body with star glyph cutout */}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.0801 3C15.1404 3 16 3.85957 16 4.91992V15.0801C16 16.1404 15.1404 17 14.0801 17H1.91992C0.859709 16.9998 4.2172e-05 16.1403 0 15.0801V4.91992C4.20593e-05 3.85968 0.859709 3.00017 1.91992 3H14.0801ZM8.79883 6.65918C8.54737 5.88528 7.45263 5.88528 7.20117 6.65918L6.8418 7.76562C6.72933 8.11161 6.40678 8.34564 6.04297 8.3457H4.87891C4.06533 8.34588 3.72748 9.38698 4.38574 9.86523L5.32715 10.5498C5.62122 10.7637 5.74409 11.1424 5.63184 11.4883L5.27246 12.5957C5.0213 13.3695 5.90719 14.0124 6.56543 13.5342L7.50684 12.8506C7.80122 12.6368 8.1998 12.6367 8.49414 12.8506L9.43555 13.5342C10.0938 14.0124 10.9788 13.3695 10.7275 12.5957L10.3682 11.4883C10.2559 11.1423 10.3795 10.7636 10.6738 10.5498L11.6152 9.86523C12.2732 9.38685 11.9347 8.3457 11.1211 8.3457H9.95801C9.5941 8.3457 9.27066 8.11172 9.1582 7.76562L8.79883 6.65918Z"
        fill={color}
      />
      {/* left calendar pin */}
      <path
        d="M3.0002 1.2C3.0002 0.537258 3.53745 0 4.2002 0C4.86294 0 5.4002 0.537259 5.4002 1.2V3.6C5.4002 4.26274 4.86294 4.8 4.2002 4.8C3.53745 4.8 3.0002 4.26274 3.0002 3.6V1.2Z"
        fill={color}
      />
      {/* right calendar pin */}
      <path
        d="M11.0002 1.2C11.0002 0.537258 11.5375 0 12.2002 0C12.8629 0 13.4002 0.537259 13.4002 1.2V3.6C13.4002 4.26274 12.8629 4.8 12.2002 4.8C11.5375 4.8 11.0002 4.26274 11.0002 3.6V1.2Z"
        fill={color}
      />
    </svg>
  );
}
