import styles from "./CarouselProductText.module.css";

interface TextBadge {
	icon?: string;
	label?: string;
	subLabel?: string;
}

interface CarouselProductTextProps {
	subtitle?: string;
	title?: string;
	description?: string;
	logoSrc?: string;
	badges?: readonly TextBadge[];
}

export function CarouselProductText(props: CarouselProductTextProps) {
	return (
		<div className={styles.card} data-cx-component="CarouselProductText">
			<div className={styles.header}>
				<div className={styles.textInfo}>
					{props.subtitle ? <span className={styles.subtitle}>{props.subtitle}</span> : null}
					{props.title ? <span className={styles.title}>{props.title}</span> : null}
					{props.description ? <span className={styles.desc}>{props.description}</span> : null}
				</div>
				{props.logoSrc ? <img className={styles.logo} src={props.logoSrc} alt="" /> : null}
			</div>
			{props.badges && props.badges.length ? (
				<div className={styles.badgeList}>
					{props.badges.map((b, i) => (
						<span key={i} className={styles.badge}>
							{b.label}
							{b.subLabel ? <em className={styles.sub}>{b.subLabel}</em> : null}
						</span>
					))}
				</div>
			) : null}
		</div>
	);
}
