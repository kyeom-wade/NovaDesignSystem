import styles from "./ProductInfoHorizontal.module.css";
interface Props { subtitle?: string; mainText?: string; subText?: string; discountLabel?: string; discountAmount?: string; }
export function ProductInfoHorizontal(props: Props) {
  return (
    <div className={styles.wrap} data-cx-component="ProductInfoHorizontal">
      {props.subtitle ? <span className={styles.subtitle}>{props.subtitle}</span> : null}
      <span className={styles.main}>{props.mainText ?? "상품 정보"}</span>
      {props.subText ? <span className={styles.sub}>{props.subText}</span> : null}
      {props.discountAmount ? <span className={styles.discount}>{props.discountLabel ? <em>{props.discountLabel} </em> : null}{props.discountAmount}</span> : null}
    </div>
  );
}
