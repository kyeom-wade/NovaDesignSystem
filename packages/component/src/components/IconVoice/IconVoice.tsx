import React from "react";
import styles from "./IconVoice.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.2--Token-Test- .IconItem/Nomal/Voice (node 51578:64955)
// anatomy: root(svg) [ voice-bars-path ] — audio waveform with four vertical bars of varying heights

interface Props {
  /** Icon size in px — matches the 24px Figma grid */
  size?: number;
  /** Icon color; defaults to currentColor for theme inheritance */
  color?: string;
  /** Additional class names */
  className?: string;
}

/**
 * Real path data extracted from Figma (node 51578:74177 / Shape › Union).
 * Natural viewBox is "0 0 15.5 14" — four rounded vertical bars forming
 * an audio voice / waveform glyph (음성입력, 음성, Voice).
 *
 * Placement inside 24×24 canvas:
 *   Figma inset top/bottom = 20.83% of 24px ≈ 5px  → content height = 14px
 *   Figma inset left/right = 17.71% of 24px ≈ 4.25px → content width ≈ 15.5px
 *   translate(4.25, 5) centres the 15.5×14 glyph in the 24px frame.
 */
const VOICE_PATH =
  "M5.5 0C6.05228 0 6.5 0.447715 6.5 1V13C6.5 13.5523 6.05228 14 5.5 14C4.94772 14 4.5 13.5523 4.5 13V1C4.5 0.447715 4.94772 0 5.5 0ZM10 2C10.5523 2 11 2.44772 11 3V11C11 11.5523 10.5523 12 10 12C9.44772 12 9 11.5523 9 11V3C9 2.44772 9.44772 2 10 2ZM1 3C1.55228 3 2 3.44772 2 4V10C2 10.5523 1.55228 11 1 11C0.447715 11 0 10.5523 0 10V4C0 3.44772 0.447715 3 1 3ZM14.5 3C15.0523 3 15.5 3.44772 15.5 4V10C15.5 10.5523 15.0523 11 14.5 11C13.9477 11 13.5 10.5523 13.5 10V4C13.5 3.44772 13.9477 3 14.5 3Z";

export function IconVoice({ size = 24, color = "currentColor", className }: Props) {
  const rootClass = [styles.root, className].filter(Boolean).join(" ");

  return (
    <svg
      data-cx-component="IconVoice"
      className={rootClass}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      {/* Voice waveform — four rounded vertical bars of varying heights */}
      <path
        d={VOICE_PATH}
        transform="translate(4.25 5)"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
}
