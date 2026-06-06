import type { ReactNode } from "react";
import styles from "./CardSection.module.css";

interface CardSectionProps {
	children?: ReactNode;
}

export function CardSection({ children }: CardSectionProps) {
	return (
		<section className={styles.section} data-cx-component="CardSection">
			{children}
		</section>
	);
}
