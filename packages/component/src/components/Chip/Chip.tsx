import React from "react";
import styles from "./Chip.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.2--Token-Test- .Chip (node 50964:29387)
// anatomy: wrap[ ...ChipItem[ label ] ] — horizontal scrollable chip group; each ChipItem is pill-shaped, selected (dark) or unselected (light)

interface ChipItemProps {
  label: string;
  selected?: boolean;
  onClick?: () => void;
}

function ChipItem({ label, selected = false, onClick }: ChipItemProps) {
  return (
    <button
      type="button"
      className={`${styles.item} ${selected ? styles.itemSelected : styles.itemUnselected}`}
      aria-pressed={selected}
      onClick={onClick}
    >
      <span className={`${styles.label} ${selected ? styles.labelSelected : styles.labelUnselected}`}>
        {label}
      </span>
    </button>
  );
}

export interface ChipOption {
  label: string;
  value: string;
}

export interface Props {
  /** List of chip options */
  options?: ChipOption[];
  /** Currently selected value */
  selectedValue?: string;
  /** Called when a chip is clicked, receives the option value */
  onSelect?: (value: string) => void;
  /** Size variant */
  size?: "large";
}

export function Chip({
  options = [
    { label: "텍스트", value: "1" },
    { label: "텍스트", value: "2" },
    { label: "텍스트", value: "3" },
    { label: "텍스트", value: "4" },
    { label: "텍스트", value: "5" },
  ],
  selectedValue,
  onSelect,
  size = "large",
}: Props) {
  const effectiveSelected = selectedValue ?? (options.length > 0 ? options[0].value : undefined);

  return (
    <div className={`${styles.wrap} ${styles[size]}`} data-cx-component="Chip" data-size={size}>
      {options.map((opt) => (
        <ChipItem
          key={opt.value}
          label={opt.label}
          selected={opt.value === effectiveSelected}
          onClick={() => onSelect?.(opt.value)}
        />
      ))}
    </div>
  );
}
