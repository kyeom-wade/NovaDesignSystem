import styles from "./Sheet.module.css";

interface SheetProps {
	logoSrc?: string;
	productName?: string;
	price?: string;
	priceUnit?: string;
	priceNote?: string;
}

export function Sheet({ logoSrc, productName = "상품명", price, priceUnit, priceNote }: SheetProps) {
	return (
		<div className={styles.wrap} data-cx-component="Sheet">
			<div className={styles.leftItem}>
				<span className={styles.thumb}>{logoSrc ? <img className={styles.img} src={logoSrc} alt="" /> : null}</span>
				<div className={styles.text}>
					<span className={styles.name}>{productName}</span>
					{price ? (
						<span className={styles.price}>
							{price}
							{priceUnit ? <em className={styles.unit}>{priceUnit}</em> : null}
							{priceNote ? <em className={styles.note}>{priceNote}</em> : null}
						</span>
					) : null}
				</div>
			</div>
			<span className={styles.plus} aria-hidden="true">
				<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
					<path d="M8 3v10M3 8h10" stroke="#05001a" strokeWidth="1.5" strokeLinecap="round" />
				</svg>
			</span>
		</div>
	);
}
