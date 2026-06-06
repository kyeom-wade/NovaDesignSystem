import styles from "./PopupActionButton.module.css";

interface PopupActionButtonProps {
	primaryLabel?: string;
	secondaryLabel?: string;
	onPrimary?: () => void;
	onSecondary?: () => void;
}

export function PopupActionButton({ primaryLabel = "확인", secondaryLabel, onPrimary, onSecondary }: PopupActionButtonProps) {
	return (
		<div className={styles.group} data-cx-component="PopupActionButton">
			{secondaryLabel ? (
				<button type="button" className={`${styles.btn} ${styles.secondary}`} onClick={onSecondary}>
					{secondaryLabel}
				</button>
			) : null}
			<button type="button" className={`${styles.btn} ${styles.primary}`} onClick={onPrimary}>
				{primaryLabel}
			</button>
		</div>
	);
}
