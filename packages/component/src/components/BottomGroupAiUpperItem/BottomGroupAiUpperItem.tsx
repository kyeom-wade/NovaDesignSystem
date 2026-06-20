import React from "react";
import styles from "./BottomGroupAiUpperItem.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.3 .BottomGroupAIUpperItem (node 55433:35204)
// anatomy: root[ iconItem(AI 16px), caption(gradient text) ]
// BottomGroup 상단 영역의 AI 안내 행 — AI 아이콘 + 그라디언트 텍스트 레이블.

interface Props {
  /** AI 안내 텍스트 (그라디언트 적용) */
  caption?: string;
  /** 아이콘 대체 텍스트 */
  iconAlt?: string;
  className?: string;
}

export function BottomGroupAiUpperItem({
  caption = "텍스트",
  iconAlt = "AI",
  className,
}: Props) {
  return (
    <div
      className={[styles.root, className ?? ""].filter(Boolean).join(" ")}
      data-cx-component="BottomGroupAiUpperItem"
    >
      <span className={styles.iconItem} role="img" aria-label={iconAlt}>
        <svg
          className={styles.iconShape}
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* AI sparkle — Figma IconItem/Variants=AI (node 51563:60166) */}
          <path
            d="M8 1.5C8.4 4.3 9.7 5.6 12.5 6C9.7 6.4 8.4 7.7 8 10.5C7.6 7.7 6.3 6.4 3.5 6C6.3 5.6 7.6 4.3 8 1.5Z"
            fill="url(#bgai-grad)"
          />
          <path
            d="M12.75 9.5C12.95 10.7 13.55 11.3 14.75 11.5C13.55 11.7 12.95 12.3 12.75 13.5C12.55 12.3 11.95 11.7 10.75 11.5C11.95 11.3 12.55 10.7 12.75 9.5Z"
            fill="url(#bgai-grad)"
          />
          <defs>
            <linearGradient id="bgai-grad" x1="0" y1="0" x2="16" y2="16" gradientUnits="userSpaceOnUse">
              <stop stopColor="#3617CE" />
              <stop offset="1" stopColor="#5F6AFD" />
            </linearGradient>
          </defs>
        </svg>
      </span>
      <p className={styles.caption}>{caption}</p>
    </div>
  );
}
