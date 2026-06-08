import styles from "./Icon0.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.2--Token-Test- .IconItem/Nomal/0 (node 51578:64790)
// anatomy: root<svg>[ path(digit-0 glyph, fill-rule=evenodd) ]

interface Props {
  /** Natural icon size from Figma (24px container, glyph is ~14×18) */
  size?: number;
  /** Icon color — defaults to currentColor so it inherits text color */
  color?: string;
  /** Additional class names */
  className?: string;
}

export function Icon0({
  size = 24,
  color = "currentColor",
  className,
}: Props) {
  const rootClass = [styles.root, className].filter(Boolean).join(" ");

  return (
    <svg
      data-cx-component="Icon0"
      className={rootClass}
      width={size}
      height={size}
      viewBox="0 0 14.4012 18.0008"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.02382 0.454768C5.37502 0.231267 6.27855 -0.158708 7.0834 0.0690255C7.88795 0.296895 7.6249 0.990918 7.39297 1.30926C7.26704 1.49009 7.08202 1.86334 7.34511 1.91473C7.67584 1.97799 10.6745 0.455835 12.6957 2.48504C14.7171 4.51478 14.4074 7.53567 14.351 8.30731C14.2945 9.07878 13.993 12.4219 11.3129 15.2048C8.63283 17.9875 6.4701 18.0243 5.7084 17.9968C4.94666 17.9692 3.18004 18.0429 1.40273 15.8571C-0.37459 13.6713 -0.449688 9.26241 1.10195 5.65301C2.34326 2.76551 4.2339 0.984433 5.02382 0.454768ZM10.2318 6.57391C10.0788 5.36904 9.2424 4.38294 7.76406 4.62176C6.28544 4.86078 5.35048 6.28522 4.55507 8.17742C3.75965 10.0697 3.88027 13.8151 5.65468 13.8151C7.42901 13.8151 7.65301 12.6395 8.20547 11.4245C8.43003 10.9306 8.75834 10.7275 9.07461 10.6735C9.27123 10.6572 9.36904 10.7142 9.52968 10.7663C9.79269 10.8514 9.85669 10.7298 9.85586 10.6579C9.85586 10.6579 10.3848 7.77902 10.2318 6.57391Z"
        fill={color}
      />
    </svg>
  );
}
