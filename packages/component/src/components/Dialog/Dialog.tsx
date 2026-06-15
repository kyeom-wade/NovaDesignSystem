import React from "react";
import { DialogActionButtonItem } from "../DialogActionButtonItem/DialogActionButtonItem";
import styles from "./Dialog.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.3 .Dialog (node 50982:21648)
// anatomy: wrap[ titleRow[ title ], subText[ subTextContent ], slot[ children ], DialogActionButtonItem ]

interface Props {
  /** 다이얼로그 타이틀 텍스트 */
  title?: string;
  /** 서브 텍스트 (보조 설명) */
  subText?: string;
  /** 서브 텍스트 표시 여부 */
  showSubText?: boolean;
  /** 슬롯(콘텐츠 영역) 표시 여부 */
  showContents?: boolean;
  /** 슬롯에 들어갈 커스텀 콘텐츠 */
  children?: React.ReactNode;
  /** 보조(취소) 버튼 레이블 */
  secondaryLabel?: string;
  /** 주요(확인) 버튼 레이블 */
  primaryLabel?: string;
  /** 보조 버튼 클릭 핸들러 */
  onSecondary?: () => void;
  /** 주요 버튼 클릭 핸들러 */
  onPrimary?: () => void;
}

export function Dialog({
  title = "섹션/콘텐츠 타이틀",
  subText = "텍스트",
  showSubText = true,
  showContents = true,
  children,
  secondaryLabel = "버튼",
  primaryLabel = "버튼",
  onSecondary,
  onPrimary,
}: Props) {
  return (
    <div className={styles.wrap} data-cx-component="Dialog">
      <div className={styles.titleRow}>
        <span className={styles.title}>{title}</span>
      </div>

      {showSubText && (
        <div className={styles.subText}>
          <p className={styles.subTextContent}>{subText}</p>
        </div>
      )}

      {showContents && (
        <div className={styles.slot}>{children}</div>
      )}

      <DialogActionButtonItem
        options="2Button"
        primaryLabel={primaryLabel}
        secondaryLabel={secondaryLabel}
        onPrimary={onPrimary}
        onSecondary={onSecondary}
      />
    </div>
  );
}
