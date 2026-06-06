import styles from "./ProductInfoVertical.module.css";
interface Props { textSub?: string; textMain?: string; originalPrice?: string; discountRate?: string; price?: string; priceSuffix?: string; }
export function ProductInfoVertical(props: Props) {
  return (
    <div className={styles.wrap} data-cx-component="ProductInfoVertical">
      {props.textSub ? <span className={styles.sub}>{props.textSub}</span> : null}
      {props.textMain ? <span className={styles.main}>{props.textMain}</span> : null}
      {props.originalPrice ? <span className={styles.original}>{props.originalPrice}</span> : null}
      <div className={styles.priceRow}>
        {props.discountRate ? <span className={styles.rate}>{props.discountRate}</span> : null}
        {props.price ? <span className={styles.price}>{props.price}{props.priceSuffix ? <em>{props.priceSuffix}</em> : null}</span> : null}
      </div>
    </div>
  );
}
