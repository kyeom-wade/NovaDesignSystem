import styles from "./BannerHorizontalSmall.module.css";

interface BannerHorizontalSmallProps {
	title?: string;
	subtitle?: string;
	showIndicator?: boolean;
	totalCount?: number;
	activeIndex?: number;
	image?: string;
}

export function BannerHorizontalSmall(props: BannerHorizontalSmallProps) {
	const showIndicator = props.showIndicator ?? true;
	const total = props.totalCount ?? 5;
	const active = props.activeIndex ?? 0;
	return (
		<div className={styles.wrap} data-cx-component="BannerHorizontalSmall">
			<div className={styles.banner} style={props.image ? { backgroundImage: `url(${props.image})` } : undefined}>
				<div className={styles.textArea}>
					<p className={styles.title}>{props.title ?? "배너 타이틀"}</p>
					{props.subtitle ? <p className={styles.subtitle}>{props.subtitle}</p> : null}
				</div>
			</div>
			{showIndicator ? (
				<div className={styles.indicator}>
					{Array.from({ length: total }).map((_, i) => (
						<span key={i} className={`${styles.dot} ${i === active ? styles.dotOn : ""}`} />
					))}
				</div>
			) : null}
		</div>
	);
}
