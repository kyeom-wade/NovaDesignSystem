import styles from "./CardInfo.module.css";

interface CardInfoProps {
	type?: "Brand" | "Place";
	// Brand
	label?: string; // 상단 작은 라벨 (편의점)
	title?: string; // 주 타이틀 (세븐일레븐)
	subtitle?: string; // SB Subtitle 슬롯 호환 (title 미지정 시 대체)
	badges?: readonly string[];
	badge?: string; // SB Badge 슬롯 호환 (단일)
	logoSrc?: string;
	image?: string; // SB Image 슬롯 호환
	logoColor?: string;
	// Place
	pinNumber?: string | number;
	distance?: string;
	placeName?: string;
	actionLabel?: string;
	onAction?: () => void;
}

export function CardInfo(props: CardInfoProps) {
	// SB는 variant를 소문자(brand/place)로 넘기므로 대소문자 무시 비교
	const isPlace = String(props.type ?? "").toLowerCase() === "place";
	if (isPlace) {
		const mainTitle = props.placeName ?? props.title ?? props.subtitle ?? "매장명";
		return (
			<section className={styles.card} data-cx-component="CardInfo" data-type="Place">
				<div className={styles.leftItem}>
					{props.pinNumber != null ? (
						<span className={styles.pin}>
							<span className={styles.pinNum}>{props.pinNumber}</span>
						</span>
					) : null}
					<div className={styles.text}>
						{props.distance ? <span className={styles.label}>{props.distance}</span> : null}
						<strong className={styles.title}>{mainTitle}</strong>
					</div>
				</div>
				{props.actionLabel ? (
					<button type="button" className={styles.actionBtn} onClick={props.onAction}>
						{props.actionLabel}
					</button>
				) : null}
			</section>
		);
	}

	// Brand (기본)
	const mainTitle = props.title ?? props.subtitle ?? "브랜드명";
	const badges = props.badges ?? (props.badge ? [props.badge] : []);
	const logo = props.logoSrc ?? props.image;
	return (
		<section className={styles.card} data-cx-component="CardInfo" data-type="Brand">
			<div className={styles.text}>
				{props.label ? <span className={styles.label}>{props.label}</span> : null}
				<strong className={styles.title}>{mainTitle}</strong>
				{badges.length > 0 ? (
					<div className={styles.badgeList}>
						{badges.map((b, i) => (
							<span key={`${b}:${i}`} className={styles.badge}>
								{b}
							</span>
						))}
					</div>
				) : null}
			</div>
			<div
				className={styles.logo}
				style={props.logoColor ? { background: props.logoColor } : undefined}
			>
				{logo ? <img className={styles.logoImg} src={logo} alt="" /> : null}
			</div>
		</section>
	);
}
