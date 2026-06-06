import styles from "./OptionListItem.module.css";

interface OptionListItemProps {
	type?: "Module" | "List";
	label?: string;
	subText?: string;
	value?: string;
	unit?: string;
	badge?: string;
	price?: string;
	showColorChip?: boolean;
	colorChip?: string;
	selected?: boolean;
	onClick?: () => void;
}

export function OptionListItem(props: OptionListItemProps) {
	const isModule = String(props.type ?? "List").toLowerCase() === "module";
	const cls = `${styles.item} ${props.selected ? styles.selected : ""}`;
	if (isModule) {
		return (
			<button type="button" className={`${cls} ${styles.module}`} onClick={props.onClick} data-cx-component="OptionListItem" data-type="Module">
				{props.showColorChip ? <span className={styles.chip} style={props.colorChip ? { background: props.colorChip } : undefined} /> : null}
				<span className={styles.label}>{props.label ?? "옵션"}</span>
				{props.subText ? <span className={styles.sub}>{props.subText}</span> : null}
			</button>
		);
	}
	return (
		<button type="button" className={`${cls} ${styles.list}`} onClick={props.onClick} data-cx-component="OptionListItem" data-type="List">
			<span className={styles.value}>
				{props.value ?? "옵션"}
				{props.unit ? <em className={styles.unit}>{props.unit}</em> : null}
			</span>
			{props.badge ? <span className={styles.badge}>{props.badge}</span> : null}
			{props.price ? <span className={styles.price}>{props.price}</span> : null}
		</button>
	);
}
