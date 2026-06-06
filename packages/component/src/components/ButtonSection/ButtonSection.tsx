import styles from "./ButtonSection.module.css";

interface ButtonSectionProps {
	leftIcon?: string;
	leftLabel?: string;
	rightIcon?: string;
	rightLabel?: string;
	onLeft?: () => void;
	onRight?: () => void;
}

export function ButtonSection({ leftIcon, leftLabel = "메뉴", rightIcon, rightLabel = "메뉴", onLeft, onRight }: ButtonSectionProps) {
	return (
		<div className={styles.card} data-cx-component="ButtonSection">
			<button type="button" className={styles.menu} onClick={onLeft}>
				{leftIcon ? <img className={styles.icon} src={leftIcon} alt="" /> : <span className={styles.iconPh} />}
				<span className={styles.label}>{leftLabel}</span>
			</button>
			<span className={styles.divider} />
			<button type="button" className={styles.menu} onClick={onRight}>
				{rightIcon ? <img className={styles.icon} src={rightIcon} alt="" /> : <span className={styles.iconPh} />}
				<span className={styles.label}>{rightLabel}</span>
			</button>
		</div>
	);
}
