// Figma SSOT: SKT-Next_UI-Draft_3.2--Token-Test- .IconItem/Nomal/Calender (node 51578:64653)
// Anatomy: single-path calendar glyph (body + hook tabs + date bar cutout) on a 24×24 canvas.
import styles from "./IconCalender.module.css";

type IconCalenderProps = {
  size?: number;
  color?: string;
  className?: string;
};

export function IconCalender({ size = 24, color = "currentColor", className }: IconCalenderProps) {
  return (
    <svg
      data-cx-component="IconCalender"
      className={[styles.root, className].filter(Boolean).join(" ")}
      width={size}
      height={size}
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.2002 0C12.8629 0 13.4004 0.537453 13.4004 1.2002V3H14.0801C15.1404 3 16 3.85957 16 4.91992V15.0801C16 16.1404 15.1404 17 14.0801 17H1.91992C0.859709 16.9998 4.2172e-05 16.1403 0 15.0801V4.91992C4.20593e-05 3.85968 0.859709 3.00017 1.91992 3H3V1.2002C3 0.53747 3.53748 2.64136e-05 4.2002 0C4.86294 0 5.40039 0.537453 5.40039 1.2002V3H11V1.2002C11 0.53747 11.5375 2.64136e-05 12.2002 0ZM6.09961 5.5C5.76855 5.50021 5.50021 5.76855 5.5 6.09961C5.5 6.43085 5.76842 6.69998 6.09961 6.7002H9.90039C10.2316 6.69998 10.5 6.43085 10.5 6.09961C10.4998 5.76855 10.2315 5.50021 9.90039 5.5H6.09961Z"
        fill={color}
      />
    </svg>
  );
}
