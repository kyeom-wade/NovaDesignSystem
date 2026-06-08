// Figma SSOT: SKT-Next_UI-Draft_3.2--Token-Test- .IconItem/Nomal/MapDotNumber (node 51693:75652)
// Anatomy: map pin (teardrop) filled with a dark body and a white numeral (1–5) centered inside

import styles from "./IconMapDotNumber.module.css";

export type IconMapDotNumberVariant = "1" | "2" | "3" | "4" | "5";

export interface IconMapDotNumberProps {
  /** Icon size in px. Defaults to 24 (natural Figma size). */
  size?: number;
  /**
   * Pin body fill color; defaults to --skt-color-palette-gray-1000 (#060C1F).
   * The numeral inside is always white.
   */
  color?: string;
  /** Additional class names. */
  className?: string;
  /** Which numeral (1–5) to display inside the map pin. Defaults to "1". */
  variant?: IconMapDotNumberVariant;
}

// Shared map-pin (teardrop) path — same across all variants
const PIN_PATH =
  "M7.74504 0C12.0225 0 15.4901 3.4415 15.4901 7.6868C15.4901 14.8495 7.74504 19.5664 7.74504 19.5664C7.74504 19.5664 0 14.5001 0 7.6868C0 3.494 3.46757 0 7.74504 0Z";

// Numeral paths extracted from Figma — viewBox 0 0 15.4901 19.5664
const NUMERAL: Record<IconMapDotNumberVariant, string> = {
  "1": "M8.87891 4.08573V10.449H7.55176V5.34256H7.5166L6.05762 6.25663V5.08768L7.63086 4.08573H8.87891Z",
  "2": "M5.49909 10.4492L5.4903 9.49121L7.77545 7.39062C8.37311 6.81934 8.68952 6.46777 8.68952 5.9668C8.68952 5.4043 8.25885 5.05273 7.67877 5.05273C7.08112 5.05273 6.6944 5.43066 6.6944 6.03711H5.43756C5.42877 4.78906 6.35162 3.99805 7.69635 3.99805C9.05866 3.99805 9.96393 4.77148 9.96393 5.87891C9.96393 6.59961 9.61237 7.19727 8.3028 8.38379L7.336 9.32422V9.35938H10.0518V10.4492H5.49909Z",
  "3": "M7.72754 10.5369C6.33008 10.5369 5.32812 9.76346 5.30176 8.65604H6.6377C6.66406 9.13065 7.12109 9.44706 7.73633 9.44706C8.36914 9.44706 8.82617 9.0867 8.81738 8.57694C8.82617 8.05838 8.36035 7.68924 7.61328 7.68924H7.02441V6.71366H7.61328C8.2373 6.71366 8.67676 6.37088 8.67676 5.86991C8.67676 5.38651 8.30762 5.05253 7.74512 5.05253C7.18262 5.05253 6.7168 5.36893 6.69922 5.85233H5.43359C5.45117 4.7537 6.44434 3.99784 7.74512 3.99784C9.07227 3.99784 9.95996 4.78006 9.95117 5.79081C9.95996 6.50272 9.45898 7.01249 8.74707 7.13553V7.18827C9.67871 7.30253 10.1973 7.87381 10.1885 8.66483C10.1973 9.75467 9.16016 10.5369 7.72754 10.5369Z",
  "4": "M5.18262 9.32422V8.27832L7.87207 4.08594H9.5332V8.26074H10.3418V9.32422H9.5332V10.4492H8.27637V9.32422H5.18262ZM6.51855 8.26074H8.29395V5.53613H8.23242L6.51855 8.20801V8.26074Z",
  "5": "M7.7627 10.5369C6.43555 10.5369 5.46875 9.75467 5.44238 8.65604H6.72559C6.75195 9.15702 7.20898 9.491 7.7627 9.491C8.42188 9.491 8.8877 9.02518 8.8877 8.366C8.8877 7.68924 8.41309 7.22342 7.74512 7.21463C7.27051 7.21463 6.93652 7.39042 6.74316 7.75077H5.54785L5.89062 4.08573H9.81055V5.16678H6.98047L6.80469 6.77518H6.85742C7.09473 6.45878 7.56934 6.23905 8.13184 6.23905C9.30078 6.23905 10.1709 7.10917 10.1709 8.33085C10.1709 9.61405 9.19531 10.5369 7.7627 10.5369Z",
};

export function IconMapDotNumber({
  size = 24,
  color = "var(--skt-color-palette-gray-1000, #060C1F)",
  className,
  variant = "1",
}: IconMapDotNumberProps) {
  const rootClass = [styles.root, className].filter(Boolean).join(" ");

  return (
    <svg
      data-cx-component="IconMapDotNumber"
      className={rootClass}
      width={size}
      height={size}
      viewBox="0 0 15.4901 19.5664"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Pin body */}
      <path d={PIN_PATH} fill={color} />
      {/* Numeral — always white so it contrasts against the dark pin */}
      <path d={NUMERAL[variant]} fill="white" />
    </svg>
  );
}
