import styles from "./BannerHorizontalMedium.module.css";

interface BannerHorizontalMediumProps {
	title?: string;
	subtitle?: string;
	showSubtitle?: boolean;
	showIndicator?: boolean;
	totalCount?: number;
	activeIndex?: number;
	image?: string; // 배경 이미지 (SB Image 슬롯)
}

export function BannerHorizontalMedium(props: BannerHorizontalMediumProps) {
	const showSubtitle = props.showSubtitle ?? true;
	const showIndicator = props.showIndicator ?? true;
	const total = props.totalCount ?? 6;
	const active = props.activeIndex ?? 0;
	return (
		<div className={styles.wrap} data-cx-component="BannerHorizontalMedium">
			<div
				className={styles.banner}
				style={props.image ? { backgroundImage: `url(${props.image})` } : undefined}
			>
				<div className={styles.textArea}>
					<p className={styles.title}>{props.title ?? "배너 타이틀"}</p>
					{showSubtitle && props.subtitle ? (
						<p className={styles.subtitle}>{props.subtitle}</p>
					) : null}
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
