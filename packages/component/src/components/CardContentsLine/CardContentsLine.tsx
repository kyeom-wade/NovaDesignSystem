import type { ReactNode } from "react";
import styles from "./CardContentsLine.module.css";

interface CardContentsLineProps {
	children?: ReactNode;
}

export function CardContentsLine({ children }: CardContentsLineProps) {
	return (
		<div className={styles.card} data-cx-component="CardContentsLine">
			{children}
		</div>
	);
}
