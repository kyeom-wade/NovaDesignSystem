import styles from "./Thumbnail.module.css";

interface ThumbnailProps {
	type?: "Product" | "Brand";
	imageSrc?: string;
	brandName?: string;
	brandDesc?: string;
	category?: string;
	likeCount?: string | number;
	badges?: readonly string[];
	totalDots?: number;
	activeDotIndex?: number;
}

export function Thumbnail(props: ThumbnailProps) {
	const isBrand = String(props.type ?? "").toLowerCase() === "brand";
	const total = props.totalDots ?? 0;
	const active = props.activeDotIndex ?? 0;
	return (
		<div className={styles.wrap} data-cx-component="Thumbnail" data-type={isBrand ? "Brand" : "Product"}>
			<div className={styles.image}>
				{props.imageSrc ? <img className={styles.img} src={props.imageSrc} alt="" /> : null}
				{total > 1 ? (
					<div className={styles.indicator}>
						{Array.from({ length: total }).map((_, i) => (
							<span key={i} className={`${styles.dot} ${i === active ? styles.dotOn : ""}`} />
						))}
					</div>
				) : null}
			</div>
			{isBrand && (props.brandName || props.brandDesc) ? (
				<div className={styles.brandInfo}>
					{props.brandName ? <span className={styles.brandName}>{props.brandName}</span> : null}
					{props.brandDesc ? <span className={styles.brandDesc}>{props.brandDesc}</span> : null}
					{props.likeCount != null ? <span className={styles.like}>♥ {props.likeCount}</span> : null}
				</div>
			) : null}
		</div>
	);
}
