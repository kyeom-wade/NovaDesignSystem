import React from "react";
import styles from "./Accordion.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.2--Token-Test- .Accordion (node 50943:29095)
// anatomy: root[ titleGroup[ ?thumbnail, titleSectionItem[ titleTextItem[ title, ?subText ], rightItem[ chevronIcon ] ], ?divider ], ?slot[ children ] ]
// Variants: variants("Info"|"Product"|"Price") × disclosure(bool) — 6 total

interface Props {
  /** Visual variant of the accordion */
  variants?: "Info" | "Product" | "Price";
  /** Whether the accordion panel is open (disclosed) */
  disclosure?: boolean;
  /** Main title text */
  title?: string;
  /** Sub-text shown below title (Product variant only) */
  subText?: string;
  /** Thumbnail image URL (Product variant only) */
  thumbnailSrc?: string;
  /** Slot content rendered when disclosure=true */
  children?: React.ReactNode;
  /** Click handler for the title row */
  onClick?: () => void;
  className?: string;
}

function ChevronDownIcon() {
  return (
    <svg
      className={styles.chevronIcon}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M4 6L8 10L12 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronUpIcon() {
  return (
    <svg
      className={styles.chevronIcon}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M4 10L8 6L12 10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Accordion({
  variants = "Info",
  disclosure = false,
  title = "섹션/콘텐츠 타이틀",
  subText = "서브 텍스트",
  thumbnailSrc,
  children,
  onClick,
  className,
}: Props) {
  const rootClasses = [
    styles.root,
    variants === "Info" ? styles.rootInfo : "",
    variants === "Product" ? styles.rootProduct : "",
    variants === "Price" ? styles.rootPrice : "",
    disclosure ? styles.rootDisclosed : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={rootClasses} data-cx-component="Accordion">
      {/* Title group — clickable header row */}
      <div
        className={styles.titleGroup}
        onClick={onClick}
        role={onClick ? "button" : undefined}
        tabIndex={onClick ? 0 : undefined}
        onKeyDown={onClick ? (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onClick(); } } : undefined}
        aria-expanded={disclosure}
      >
        {/* Thumbnail (Product variant only) */}
        {variants === "Product" && (
          <div className={styles.thumbnail}>
            {thumbnailSrc ? (
              <img className={styles.thumbnailImg} src={thumbnailSrc} alt="" />
            ) : (
              <div className={styles.thumbnailPlaceholder} />
            )}
          </div>
        )}

        {/* Title section */}
        <div className={styles.titleSection}>
          {/* Text area */}
          <div className={styles.titleTextItem}>
            <span className={styles.titleText}>{title}</span>
            {variants === "Product" && (
              <span className={styles.subTextContent}>{subText}</span>
            )}
          </div>

          {/* Chevron icon */}
          <div className={styles.iconItem}>
            {disclosure ? <ChevronUpIcon /> : <ChevronDownIcon />}
          </div>
        </div>
      </div>

      {/* Divider (Product and Price variants when disclosed) */}
      {disclosure && (variants === "Product" || variants === "Price") && (
        <div className={styles.divider} />
      )}

      {/* Expandable slot */}
      {disclosure && (
        <div className={styles.slot}>
          {children}
        </div>
      )}
    </div>
  );
}
