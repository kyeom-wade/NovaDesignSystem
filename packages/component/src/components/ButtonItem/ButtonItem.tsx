import styles from "./ButtonItem.module.css";

interface ButtonItemProps {
	label?: string;
	onClick?: () => void;
}

export function ButtonItem({ label = "전체보기", onClick }: ButtonItemProps) {
	return (
		<button type="button" className={styles.btn} onClick={onClick} data-cx-component="ButtonItem">
			{label}
		</button>
	);
}
