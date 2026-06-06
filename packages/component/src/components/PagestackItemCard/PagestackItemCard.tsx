import type { ReactNode } from "react";
import styles from "./PagestackItemCard.module.css";

interface PagestackItemCardProps {
	children?: ReactNode;
}

export function PagestackItemCard({ children }: PagestackItemCardProps) {
	return (
		<div className={styles.item} data-cx-component="PagestackItemCard">
			{children}
		</div>
	);
}
