import styles from "./CardSummary.module.css";

interface SummaryItem {
	label: string;
	value?: string;
}

interface CardSummaryProps {
	subText?: string; // 상단 작은 줄 (16)
	title?: string; // 강조 메인 줄 (24)
	buttonLabel?: string;
	onButton?: () => void;
	items?: readonly SummaryItem[];
}

export function CardSummary({ subText, title, buttonLabel, onButton, items = [] }: CardSummaryProps) {
	return (
		<section className={styles.card} data-cx-component="CardSummary">
			<div className={styles.head}>
				<div className={styles.txt}>
					{subText ? <span className={styles.subText}>{subText}</span> : null}
					{title ? <strong className={styles.mainText}>{title}</strong> : null}
				</div>
				{buttonLabel ? (
					<button type="button" className={styles.btn} onClick={onButton}>
						{buttonLabel}
					</button>
				) : null}
			</div>
			{items.length > 0 ? (
				<ul className={styles.list}>
					{items.map((item, i) => (
						<li key={`${item.label}:${i}`} className={styles.item}>
							<span className={styles.itemLabel}>{item.label}</span>
							{item.value ? <span className={styles.itemVal}>{item.value}</span> : null}
						</li>
					))}
				</ul>
			) : null}
		</section>
	);
}
