import type { ReactNode } from "react";
import styles from "./CardText.module.css";

interface CardTextProps {
	title?: string;
	description?: string;
	body?: string; // SB body 슬롯 호환 (description 별칭)
	children?: ReactNode;
}

export function CardText({ title, description, body, children }: CardTextProps) {
	const desc = description ?? body;
	return (
		<section className={styles.card} data-cx-component="CardText">
			{title ? <strong className={styles.title}>{title}</strong> : null}
			{desc ? <p className={styles.body}>{desc}</p> : null}
			{children}
		</section>
	);
}
