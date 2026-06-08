import styles from "./IconData.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.2--Token-Test- .IconItem/Nomal/Data (node 51578:64851)
// anatomy: root<svg>[ path(Union — three bar-chart columns rising left-to-right) ]

interface Props {
  /** Natural icon size from Figma (24px grid) */
  size?: number;
  /** Icon color — defaults to currentColor so it inherits text color */
  color?: string;
  /** Additional class names */
  className?: string;
}

export function IconData({ size = 24, color = "currentColor", className }: Props) {
  const rootClass = [styles.root, className].filter(Boolean).join(" ");

  return (
    <svg
      data-cx-component="IconData"
      className={rootClass}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      {/* Path scaled from Figma viewBox "0 0 13.2002 14.4004" inset 20%/22.5% inside 24px container */}
      <path
        d="M20.36 2.4C21.69 2.4 22.8 3.504 22.8 4.836V19.164C22.8 20.497 21.69 21.6 20.36 21.6H19.96C18.629 21.6 17.52 20.497 17.52 19.164V4.836C17.52 3.504 18.629 2.4 19.96 2.4H20.36ZM4.04 12C5.37 12 6.48 13.103 6.48 14.436V19.155C6.48 20.488 5.37 21.6 4.04 21.6H3.64C2.31 21.6 1.2 20.488 1.2 19.155V14.436C1.2 13.103 2.31 12 3.64 12H4.04ZM12.2 7.2C13.53 7.2 14.64 8.304 14.64 9.636V19.164C14.64 20.497 13.529 21.6 12.2 21.6H11.8C10.47 21.6 9.36 20.497 9.36 19.164V9.636C9.36 8.304 10.47 7.2 11.8 7.2H12.2Z"
        fill={color}
      />
    </svg>
  );
}
