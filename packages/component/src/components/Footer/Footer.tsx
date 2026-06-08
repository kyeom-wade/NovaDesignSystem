import styles from "./Footer.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.2--Token-Test- .Footer (node 50943:30545)
// anatomy: root[ legalLinks[ term | divider | financeTerm | divider | privacy ], infoGroup[ businessRow[ bizName | divider | ceo ], regRow[ regNum ], addrRow[ address ], mailOrderRow[ mailOrder ], telRow[ tel ], emailRow[ email ] ], copyright ]
// Product variant: root[ disclaimerGroup[ brokerageSection[ brokerageTitle, brokerageBody ], obligationSection[ obligationTitle, obligationBody ], minorSection[ minorTitle, minorBody ] ] ]

import React from "react";

export interface FooterProps {
  /** Layout variant matching the Figma "Variants" property */
  variant?: "Main" | "Product";
  /** Legal: 이용약관 link label */
  termLabel?: string;
  /** Legal: 전자금융거래 이용약관 link label */
  financeTermLabel?: string;
  /** Legal: 개인정보처리방침 link label */
  privacyLabel?: string;
  /** Business name */
  businessName?: string;
  /** CEO name */
  ceo?: string;
  /** Business registration number */
  businessRegNo?: string;
  /** Company address */
  address?: string;
  /** Mail-order business registration number */
  mailOrderRegNo?: string;
  /** Customer service telephone */
  tel?: string;
  /** Customer service email */
  email?: string;
  /** Copyright text */
  copyright?: string;
  /** Callback for 이용약관 click */
  onTermClick?: () => void;
  /** Callback for 전자금융거래 이용약관 click */
  onFinanceTermClick?: () => void;
  /** Callback for 개인정보처리방침 click */
  onPrivacyClick?: () => void;
}

export function Footer({
  variant = "Main",
  termLabel = "이용약관",
  financeTermLabel = "전자금융거래 이용약관",
  privacyLabel = "개인정보처리방침",
  businessName = "SK플래닛(주)",
  ceo = "유재욱",
  businessRegNo = "815-81-01244",
  address = "경기도 성남시 분당구 판교로 264(삼평동)",
  mailOrderRegNo = "2014-경기성남-0036",
  tel = "1800-0133",
  email = "gifticon@skplanet.com",
  copyright = "Copyright ©️ SK Planet All Rights Reserved",
  onTermClick,
  onFinanceTermClick,
  onPrivacyClick,
}: FooterProps) {
  const isMain = variant === "Main";
  const isProduct = variant === "Product";

  return (
    <footer
      className={`${styles.root} ${isProduct ? styles.rootProduct : styles.rootMain}`}
      data-cx-component="Footer"
      data-variant={variant}
    >
      {/* ── Main: legal links row ── */}
      {isMain && (
        <div className={styles.legalLinks}>
          <button type="button" className={styles.legalBtn} onClick={onTermClick}>
            {termLabel}
          </button>
          <span className={styles.divider} aria-hidden="true" />
          <button type="button" className={styles.legalBtn} onClick={onFinanceTermClick}>
            {financeTermLabel}
          </button>
          <span className={styles.divider} aria-hidden="true" />
          <button type="button" className={styles.legalBtn} onClick={onPrivacyClick}>
            {privacyLabel}
          </button>
        </div>
      )}

      {/* ── Main: business info ── */}
      {isMain && (
        <div className={styles.infoGroup}>
          <div className={styles.infoRow}>
            <span className={styles.infoText}>{`사업자: ${businessName}`}</span>
            <span className={styles.infoDivider} aria-hidden="true" />
            <span className={styles.infoText}>{`대표 : ${ceo}`}</span>
          </div>
          <div className={styles.infoRow}>
            <span className={styles.infoText}>{`사업자등록번호 : ${businessRegNo}`}</span>
          </div>
          <div className={styles.infoRow}>
            <span className={styles.infoText}>{address}</span>
          </div>
          <div className={styles.infoRow}>
            <span className={styles.infoText}>{`통신판매업신고 : ${mailOrderRegNo}`}</span>
          </div>
          <div className={styles.infoRow}>
            <span className={styles.infoText}>{`전화 : ${tel}`}</span>
          </div>
          <div className={styles.infoRow}>
            <span className={styles.infoText}>{email}</span>
          </div>
        </div>
      )}

      {/* ── Main: copyright ── */}
      {isMain && (
        <p className={styles.copyright}>{copyright}</p>
      )}

      {/* ── Product: disclaimer sections ── */}
      {isProduct && (
        <div className={styles.disclaimerGroup}>
          <div className={styles.disclaimerSection}>
            <p className={styles.disclaimerTitle}>통신 판매 중개업 안내</p>
            <p className={styles.disclaimerBody}>
              제 3자가 판매하는 상품 및 거래의 경우 SK텔레콤(주)은 통신판매 중개자이며, 통신판매의 당사자가 아닙니다.
            </p>
          </div>
          <div className={styles.disclaimerSection}>
            <p className={styles.disclaimerTitle}>거래 의무 책임 안내</p>
            <p className={styles.disclaimerBody}>
              상품 및 거래에 관한 의무와 책임은 판매자에게 있습니다.
            </p>
          </div>
          <div className={styles.disclaimerSection}>
            <p className={styles.disclaimerTitle}>미성년자 거래 안내</p>
            <p className={styles.disclaimerBody}>
              법정대리인의 동의를 받지 않은 미성년자의 거래는 관련 법령에 따라 취소될 수 있습니다.
            </p>
          </div>
        </div>
      )}
    </footer>
  );
}
