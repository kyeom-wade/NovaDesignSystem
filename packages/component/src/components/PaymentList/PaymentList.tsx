import styles from "./PaymentList.module.css";

interface PaymentListProps {
	label?: string;
	badge?: string;
	showLogo?: boolean;
	logoSrc?: string;
	image?: string; // SB Image 슬롯 호환
	showCard?: boolean;
	cardTitle?: string;
	cardTitleHighlight?: string; // 그라데이션 강조 구간 (예: "11Pay")
	cardSubText?: string;
	selected?: boolean;
	onClick?: () => void;
}

export function PaymentList(props: PaymentListProps) {
	const showLogo = props.showLogo ?? true;
	const showCard = props.showCard ?? false;
	const logo = props.logoSrc ?? props.image;
	return (
		<div
			className={styles.row}
			data-cx-component="PaymentList"
			data-selected={props.selected ? "true" : undefined}
			onClick={props.onClick}
		>
			<span className={`${styles.radio} ${props.selected ? styles.radioOn : ""}`} />
			<div className={styles.text}>
				<div className={styles.logoText}>
					<div className={styles.logoLabel}>
						{showLogo ? (
							<span className={styles.logo}>
								{logo ? <img className={styles.logoImg} src={logo} alt="" /> : null}
							</span>
						) : null}
						<span className={styles.label}>{props.label ?? "결제 수단"}</span>
					</div>
					{props.badge ? <span className={styles.badge}>{props.badge}</span> : null}
				</div>
				{showCard ? (
					<div className={styles.card}>
						<div className={styles.cardText}>
							<p className={styles.cardTitle}>
								{props.cardTitleHighlight ? (
									<span className={styles.cardTitleHi}>{props.cardTitleHighlight}</span>
								) : null}
								<span>{props.cardTitle ?? ""}</span>
							</p>
							{props.cardSubText ? <p className={styles.cardSub}>{props.cardSubText}</p> : null}
						</div>
						<svg className={styles.chev} width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
							<path d="M6 4l4 4-4 4" stroke="#05001a" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
						</svg>
					</div>
				) : null}
			</div>
		</div>
	);
}
