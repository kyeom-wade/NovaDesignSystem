import React from "react";
import { BadgeItem } from "../BadgeItem";
import { IconArrow } from "../IconArrow";
import { RadioItem } from "../RadioItem";
import { ThumbnailRoundItem } from "../ThumbnailRoundItem";
import styles from "./CellPayment.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.3 .CellPayment (node 55320:116556)
// anatomy: root[ RadioItem, Text[ LogoText[ ThumbnailRoundItem?, label, BadgeItem? ], Card? ] ]
// Properties: badge(boolean), card(boolean), label(string), thumbnail(boolean)

interface Props {
  /** Figma property: badge visibility */
  badge?: boolean;
  /** Figma property: bottom card visibility */
  card?: boolean;
  /** Figma property: payment label */
  label?: string;
  /** Figma property: thumbnail visibility */
  thumbnail?: boolean;
  className?: string;
}

export function CellPayment({
  badge = true,
  card = true,
  label = "Label",
  thumbnail = true,
  className,
}: Props) {
  return (
    <div
      className={[styles.root, className].filter(Boolean).join(" ")}
      data-cx-component="CellPayment"
      data-badge={badge ? "on" : "off"}
      data-card={card ? "on" : "off"}
      data-thumbnail={thumbnail ? "on" : "off"}
    >
      <RadioItem selected={false} disabled={false} />
      <div className={styles.text}>
        <div className={styles.logoText}>
          <div className={styles.labelGroup}>
            {thumbnail && <ThumbnailRoundItem size="20" />}
            <p className={styles.label}>{label}</p>
          </div>
          {badge && <BadgeItem color="Strong" size="Small" label="Label" />}
        </div>

        {card && (
          <div className={styles.card}>
            <div className={styles.cardText}>
              <div className={styles.cardTitle}>
                <span className={styles.brand}>11Pay</span>
                <span className={styles.cardTitleText}>로 쉽고 빠르게</span>
              </div>
              <p className={styles.cardBody}>이용을 위해 약관 동의를 진행해 주세요</p>
            </div>
            <IconArrow size={16} variant="right" color="currentColor" />
          </div>
        )}
      </div>
    </div>
  );
}
