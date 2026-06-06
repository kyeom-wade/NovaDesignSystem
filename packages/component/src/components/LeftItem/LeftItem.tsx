import styles from "./LeftItem.module.css";
interface Props { type?: "Ai" | "Ai+Gift"; color?: string; onAiClick?: () => void; onGiftClick?: () => void; }
export function LeftItem({ type = "Ai", color, onAiClick, onGiftClick }: Props) {
  const withGift = String(type) === "Ai+Gift";
  return (
    <div className={styles.wrap} data-cx-component="LeftItem">
      <button type="button" className={styles.ai} style={color ? { color } : undefined} onClick={onAiClick} aria-label="AI"><span className={styles.spark} /></button>
      {withGift ? <button type="button" className={styles.gift} onClick={onGiftClick} aria-label="선물"><span className={styles.giftIco} /></button> : null}
    </div>
  );
}
