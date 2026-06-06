import type { ReactNode } from "react";
import styles from "./Pagestack.module.css";

interface PagestackProps {
	title?: string;
	showTitle?: boolean;
	children?: ReactNode;
}

export function Pagestack({ title, showTitle = true, children }: PagestackProps) {
	return (
		<div className={styles.wrap} data-cx-component="Pagestack">
			{showTitle && title ? <p className={styles.title}>{title}</p> : null}
			<div className={styles.contents}>{children}</div>
		</div>
	);
}
