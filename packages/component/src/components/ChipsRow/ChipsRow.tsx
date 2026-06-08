import React from "react";
import styles from "./ChipsRow.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.2--Token-Test- .ChipsRow (node 51161:52982)
// anatomy: root[ row*[ quicklinkChip*[ iconWrap[ iconBg[ iconItem ] ], label ], chip*[ label ] ] ]
// Two scrollable rows of chips: quicklink chips (icon + label) and plain text chips.

export interface QuicklinkChipDef {
  text: string;
  iconSrc?: string;
  iconAlt?: string;
  onClick?: () => void;
}

export interface ChipDef {
  text: string;
  selected?: boolean;
  onClick?: () => void;
}

export interface ChipsRowItem {
  quicklinks?: QuicklinkChipDef[];
  chips?: ChipDef[];
}

interface Props {
  /** Array of rows; each row may have quicklink chips and/or plain chips */
  rows?: ChipsRowItem[];
  /** Padding-left applied to the outer container */
  paddingLeft?: number;
  className?: string;
}

const DEFAULT_QUICKLINKS: QuicklinkChipDef[] = [
  { text: "텍스트" },
  { text: "텍스트" },
  { text: "텍스트" },
  { text: "텍스트" },
  { text: "텍스트" },
  { text: "텍스트" },
];

const DEFAULT_CHIPS: ChipDef[] = [
  { text: "텍스트", selected: false },
  { text: "텍스트", selected: false },
  { text: "텍스트", selected: false },
];

const DEFAULT_ROWS: ChipsRowItem[] = [
  { quicklinks: DEFAULT_QUICKLINKS, chips: DEFAULT_CHIPS },
  { quicklinks: DEFAULT_QUICKLINKS, chips: DEFAULT_CHIPS },
];

export function ChipsRow({
  rows = DEFAULT_ROWS,
  paddingLeft = 20,
  className,
}: Props) {
  return (
    <div
      data-cx-component="ChipsRow"
      className={[styles.root, className].filter(Boolean).join(" ")}
      style={{ paddingLeft }}
    >
      {rows.map((row, rowIdx) => (
        <div key={rowIdx} className={styles.row}>
          {row.quicklinks?.map((ql, idx) => (
            <div
              key={`ql-${idx}`}
              className={styles.quicklinkChip}
              role="button"
              tabIndex={0}
              onClick={ql.onClick}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") ql.onClick?.();
              }}
            >
              <div className={styles.iconWrap}>
                <div className={styles.iconBg}>
                  <div className={styles.iconItem}>
                    {ql.iconSrc ? (
                      <img
                        className={styles.iconImg}
                        src={ql.iconSrc}
                        alt={ql.iconAlt ?? ""}
                      />
                    ) : (
                      <div className={styles.iconPlaceholder} aria-hidden="true" />
                    )}
                  </div>
                </div>
              </div>
              <span className={styles.quicklinkLabel}>{ql.text}</span>
            </div>
          ))}
          {row.chips?.map((chip, idx) => (
            <div
              key={`chip-${idx}`}
              className={[
                styles.chip,
                chip.selected ? styles.chipSelected : styles.chipUnselected,
              ]
                .filter(Boolean)
                .join(" ")}
              role="button"
              tabIndex={0}
              onClick={chip.onClick}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") chip.onClick?.();
              }}
            >
              <span
                className={
                  chip.selected ? styles.chipLabelSelected : styles.chipLabelUnselected
                }
              >
                {chip.text}
              </span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
