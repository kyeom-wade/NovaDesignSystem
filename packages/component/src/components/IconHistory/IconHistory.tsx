import React from "react";
import styles from "./IconHistory.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.2--Token-Test- .IconItem/Nomal/History (node 51578:64956)
// anatomy: root(svg) [ circular-arrow-body + clock-hand ] — single-glyph history/undo icon

interface Props {
  /** Natural icon size from Figma (24px grid) */
  size?: number;
  /** Icon color — defaults to currentColor so it inherits text color */
  color?: string;
  /** Additional class names */
  className?: string;
}

export function IconHistory({
  size = 24,
  color = "currentColor",
  className,
}: Props) {
  const rootClass = [styles.root, className].filter(Boolean).join(" ");

  return (
    <svg
      data-cx-component="IconHistory"
      className={rootClass}
      width={size}
      height={size}
      viewBox="0 0 17.0354 18.3424"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      {/* Union: circular counter-clockwise arrow with clock hands — history glyph */}
      <path
        d="M0.632275 0.821792C0.730684 0.27851 1.25102 -0.0821009 1.79438 0.0161279C2.33765 0.114548 2.69827 0.63489 2.60005 1.17824L2.39106 2.33253C3.59527 1.36309 5.03384 0.716 6.56977 0.462417C8.42482 0.156302 10.3298 0.438524 12.0161 1.27003C13.7024 2.10177 15.0867 3.4418 15.9731 5.10011C16.8593 6.7584 17.2039 8.65294 16.9584 10.5171C16.713 12.3814 15.8893 14.1222 14.604 15.4946C13.3186 16.8669 11.6355 17.8025 9.79145 18.1694C7.94724 18.5363 6.03352 18.3165 4.32075 17.5405C2.6081 16.7645 1.18186 15.4706 0.24165 13.8423C-0.0344926 13.364 0.129568 12.7522 0.607861 12.4761C1.08599 12.2006 1.69707 12.3644 1.9731 12.8423C2.7044 14.1089 3.81476 15.1147 5.14692 15.7183C6.4789 16.3216 7.96665 16.4927 9.40083 16.2075C10.8351 15.9221 12.1453 15.1948 13.145 14.1275C14.1445 13.0601 14.7851 11.7061 14.976 10.2564C15.1669 8.80642 14.8987 7.3323 14.2094 6.04249C13.52 4.75272 12.4429 3.71089 11.1313 3.06398C9.81976 2.41729 8.33776 2.19794 6.89497 2.43605C5.71011 2.63174 4.59932 3.12786 3.66743 3.8716L4.58442 4.03761C5.12769 4.13604 5.48831 4.65637 5.39009 5.19972C5.29166 5.74296 4.77131 6.10359 4.22798 6.00539L0.822704 5.39015C0.279311 5.29192 -0.0820335 4.77143 0.0160639 4.22804L0.632275 0.821792ZM8.03559 5.3423C8.58766 5.34256 9.03559 5.79018 9.03559 6.3423V8.92824L10.7426 10.6353C11.1328 11.0257 11.1328 11.6589 10.7426 12.0493C10.3522 12.4398 9.71911 12.4396 9.32856 12.0493L7.32856 10.0493C7.14103 9.86179 7.03559 9.60751 7.03559 9.3423V6.3423C7.03559 5.79001 7.48331 5.3423 8.03559 5.3423Z"
        fill={color}
      />
    </svg>
  );
}
