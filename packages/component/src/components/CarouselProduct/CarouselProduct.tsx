import styles from "./CarouselProduct.module.css";

interface CarouselProductProps {
	imageSrc?: string;
	subTitle?: string;
	title?: string;
	originalPrice?: string;
	discountRate?: string;
	price?: string;
	priceUnit?: string;
	badges?: readonly string[];
}

export function CarouselProduct(props: CarouselProductProps) {
	return (
		<div className={styles.card} data-cx-component="CarouselProduct">
			<div className={styles.thumb}>
				{props.imageSrc ? <img className={styles.img} src={props.imageSrc} alt="" /> : null}
			</div>
			<div className={styles.info}>
				{props.subTitle ? <span className={styles.subTitle}>{props.subTitle}</span> : null}
				{props.title ? <span className={styles.title}>{props.title}</span> : null}
				{props.originalPrice ? <span className={styles.original}>{props.originalPrice}</span> : null}
				<div className={styles.priceRow}>
					{props.discountRate ? <span className={styles.discount}>{props.discountRate}</span> : null}
					{props.price ? (
						<span className={styles.price}>
							{props.price}
							{props.priceUnit ? <em className={styles.unit}>{props.priceUnit}</em> : null}
						</span>
					) : null}
				</div>
				{props.badges && props.badges.length ? (
					<div className={styles.badges}>
						{props.badges.map((b, i) => (
							<span key={`${b}:${i}`} className={styles.badge}>{b}</span>
						))}
					</div>
				) : null}
			</div>
		</div>
	);
}
