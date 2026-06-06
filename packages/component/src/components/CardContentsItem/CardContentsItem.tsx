import styles from "./CardContentsItem.module.css";
interface Props { type?: "List" | "Barcode" | "Ai"; imageSrc?: string; title?: string; subtitle?: string; daysLeft?: string; buttonLabel?: string; aiText?: string; barcodeNum?: string; }
export function CardContentsItem(props: Props) {
  const type = String(props.type ?? "List");
  if (type === "Ai") return <div className={styles.ai} data-cx-component="CardContentsItem"><span className={styles.aiDot} /><span>{props.aiText ?? props.title ?? "AI 추천"}</span></div>;
  if (type === "Barcode") return <div className={styles.barcode} data-cx-component="CardContentsItem"><div className={styles.bars} /><span className={styles.num}>{props.barcodeNum ?? "0000 0000 0000"}</span></div>;
  return (
    <div className={styles.list} data-cx-component="CardContentsItem">
      <span className={styles.thumb}>{props.imageSrc ? <img className={styles.img} src={props.imageSrc} alt="" /> : null}</span>
      <div className={styles.text}>
        <span className={styles.title}>{props.title ?? "항목"}</span>
        {props.subtitle ? <span className={styles.sub}>{props.subtitle}</span> : null}
      </div>
      {props.daysLeft ? <span className={styles.dday}>{props.daysLeft}</span> : null}
      {props.buttonLabel ? <button type="button" className={styles.btn}>{props.buttonLabel}</button> : null}
    </div>
  );
}
