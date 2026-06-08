import styles from "./Dialog.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.2--Token-Test- .Dialog (node 50982:21648)
// anatomy: container[ titleRow[ title ], subText[ text ], slot[ children ], actionRow[ secondaryBtn, primaryBtn ] ]
interface Props {
  title?: string;
  subText?: string;
  showSubText?: boolean;
  primaryLabel?: string;
  secondaryLabel?: string;
  showContents?: boolean;
  children?: React.ReactNode;
  onPrimary?: () => void;
  onSecondary?: () => void;
}
export function Dialog({
  title = "섹션/콘텐츠 타이틀",
  subText = "텍스트",
  showSubText = true,
  primaryLabel = "확인",
  secondaryLabel = "취소",
  showContents = true,
  children,
  onPrimary,
  onSecondary,
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
      <div className={styles.actionRow}>
        <button type="button" className={styles.btnSecondary} onClick={onSecondary}>
          {secondaryLabel}
        </button>
        <button type="button" className={styles.btnPrimary} onClick={onPrimary}>
          {primaryLabel}
        </button>
      </div>
    </div>
  );
}
