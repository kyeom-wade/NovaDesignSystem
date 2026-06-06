import styles from "./PayProductListItem.module.css";
interface PriceRow { label?: string; value?: string; }
interface Props {
  type?: "Pay" | "Cart"; brand?: string; productName?: string; thumbnailSrc?: string;
  showBox?: boolean; boxOption?: string; priceRows?: readonly PriceRow[];
  totalLabel?: string; totalPeriod?: string; totalPrice?: string;
  showChangeLink?: boolean; onClose?: () => void; onChangeClick?: () => void;
}
export function PayProductListItem(props: Props) {
  const isCart = String(props.type ?? "Pay").toLowerCase() === "cart";
  return (
    <div className={styles.wrap} data-cx-component="PayProductListItem" data-type={isCart ? "Cart" : "Pay"}>
      <div className={styles.head}>
        <span className={styles.thumb}>{props.thumbnailSrc ? <img className={styles.img} src={props.thumbnailSrc} alt="" /> : null}</span>
        <div className={styles.info}>
          {props.brand ? <span className={styles.brand}>{props.brand}</span> : null}
          <span className={styles.name}>{props.productName ?? "상품명"}</span>
        </div>
        {isCart ? (
          <button type="button" className={styles.close} onClick={props.onClose} aria-label="삭제">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 4l8 8M12 4l-8 8" stroke="rgba(6,12,31,0.5)" strokeWidth="1.4" strokeLinecap="round"/></svg>
          </button>
        ) : null}
      </div>
      {props.showBox && (props.boxOption || (props.priceRows && props.priceRows.length)) ? (
        <div className={styles.box}>
          {props.boxOption ? <span className={styles.opt}>{props.boxOption}</span> : null}
          {(props.priceRows ?? []).map((r, i) => (
            <div key={i} className={styles.row}><span>{r.label}</span><span className={styles.rv}>{r.value}</span></div>
          ))}
          {props.totalPrice ? (
            <div className={styles.total}>
              <span>{props.totalLabel ?? "합계"}{props.totalPeriod ? <em className={styles.per}> {props.totalPeriod}</em> : null}</span>
              <strong>{props.totalPrice}</strong>
            </div>
          ) : null}
        </div>
      ) : null}
      {props.showChangeLink ? <button type="button" className={styles.change} onClick={props.onChangeClick}>변경</button> : null}
    </div>
  );
}
