import React from "react";
import styles from "./Search.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.2--Token-Test- .Search (node 50943:30637)
// anatomy: wrap[ searchBar[ placeholder|text, [caret], [clearButton], searchIcon ] ]
// States: Default (placeholder + search icon), Focused (caret + placeholder + search icon),
//         Typing (input text + caret + clear button + search icon),
//         Completed (input text + clear button + search icon), Disabled (dimmed placeholder + search icon)

export type SearchState = "Default" | "Focused" | "Typing" | "Completed" | "Disabled";

interface Props {
  /** Visual/interaction state of the search field */
  state?: SearchState;
  /** Placeholder text shown in Default/Focused/Disabled states */
  placeholder?: string;
  /** Input value shown in Typing/Completed states */
  value?: string;
  /** Called when the clear (×) button is clicked */
  onClear?: () => void;
  /** Called when the search icon is clicked */
  onSearch?: () => void;
}

/** Blinking caret cursor — brand-blue 1 px × 20 px pill */
function Caret() {
  return <span className={styles.caret} aria-hidden="true" />;
}

/** Magnifying-glass search icon rendered via inline SVG */
function SearchIcon({ dimmed = false }: { dimmed?: boolean }) {
  return (
    <span className={`${styles.iconWrap} ${dimmed ? styles.iconDimmed : ""}`} aria-hidden="true">
      <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="7.5" cy="7.5" r="5.75" stroke="currentColor" strokeWidth="1.5" />
        <line x1="11.7803" y1="12.2197" x2="15.2803" y2="15.7197" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </span>
  );
}

/** Clear (×) button */
function ClearButton({ onClick }: { onClick?: () => void }) {
  return (
    <button
      type="button"
      className={styles.clearBtn}
      onClick={onClick}
      aria-label="검색어 지우기"
    >
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="1.5" y1="1.5" x2="8.5" y2="8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="8.5" y1="1.5" x2="1.5" y2="8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </button>
  );
}

export function Search({
  state = "Default",
  placeholder = "검색",
  value = "텍스트를 입력하세요",
  onClear,
  onSearch,
}: Props) {
  const isDisabled = state === "Disabled";
  const isFocused = state === "Focused";
  const isTyping = state === "Typing";
  const isCompleted = state === "Completed";
  const showValue = isTyping || isCompleted;
  const showClear = isTyping || isCompleted;
  const showPlaceholder = !showValue;

  return (
    <div
      className={`${styles.wrap} ${isDisabled ? styles.wrapDisabled : ""}`}
      data-cx-component="Search"
      data-state={state}
    >
      <div className={`${styles.searchBar} ${isDisabled ? styles.searchBarDisabled : ""}`}>
        {/* Left content: caret + text */}
        <div className={styles.textField}>
          {isFocused && <Caret />}
          {showPlaceholder && (
            <span
              className={`${styles.placeholder} ${isDisabled ? styles.placeholderDisabled : ""}`}
            >
              {placeholder}
            </span>
          )}
          {showValue && (
            <>
              <span className={styles.inputText}>{value}</span>
              {isTyping && <Caret />}
            </>
          )}
        </div>

        {/* Right content: clear button + search icon */}
        <div className={styles.rightSlot}>
          {showClear && <ClearButton onClick={onClear} />}
          <button
            type="button"
            className={styles.searchIconBtn}
            onClick={onSearch}
            aria-label="검색"
            disabled={isDisabled}
          >
            <SearchIcon dimmed={isDisabled} />
          </button>
        </div>
      </div>
    </div>
  );
}
