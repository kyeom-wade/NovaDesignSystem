import styles from "./TextGroupProductDetail.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.2--Token-Test- .TextGroupProductDetail (node 51083:55039)
// anatomy: root[ textProduct[ txtSub[ subText ], titleText ], toogleItem?[ heartIcon, countLabel ] ]

import React from "react";
import { ToogleItem } from "../ToogleItem";

interface Props {
  /** Short sub-label above the title (e.g. product category / tag) */
  subText?: string;
  /** Main product title line */
  titleText?: string;
  /** Whether to render the toggle/heart item on the right */
  showToogle?: boolean;
  /** Whether the heart toggle is in selected (liked) state */
  toogleSelected?: boolean;
  /** Like count label shown in the toggle */
  toogleLabel?: string;
  /** Callback when the toggle/heart is clicked */
  onToogle?: () => void;
}

export function TextGroupProductDetail({
  subText = "T 우주패스 TVING & Wavve 프리미엄",
  titleText = "TVING 프리미엄, Wavve 콘텐츠 팩 프리미엄",
  showToogle = true,
  toogleSelected = false,
  toogleLabel = "9,999",
  onToogle,
}: Props) {
  return (
    <div className={styles.root} data-cx-component="TextGroupProductDetail">
      <div className={styles.textProduct}>
        <div className={styles.txtSub}>
          <span className={styles.subText}>{subText}</span>
        </div>
        <p className={styles.titleText}>{titleText}</p>
      </div>
      {showToogle && (
        <ToogleItem
          variant="Text"
          selection={toogleSelected}
          label={toogleLabel}
          onClick={onToogle}
        />
      )}
    </div>
  );
}
