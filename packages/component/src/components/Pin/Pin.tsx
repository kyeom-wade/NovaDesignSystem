import styles from "./Pin.module.css";

interface PinProps {
	number?: number | string;
	color?: string;
}

export function Pin({ number, color }: PinProps) {
	return (
		<span className={styles.pin} style={color ? { background: color } : undefined} data-cx-component="Pin">
			{number != null ? <span className={styles.num}>{number}</span> : null}
		</span>
	);
}
