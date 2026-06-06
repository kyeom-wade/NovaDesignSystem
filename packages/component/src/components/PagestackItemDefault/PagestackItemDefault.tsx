import type { ReactNode } from "react";
import styles from "./PagestackItemDefault.module.css";

interface PagestackItemDefaultProps {
	children?: ReactNode;
}

export function PagestackItemDefault({ children }: PagestackItemDefaultProps) {
	return (
		<div className={styles.item} data-cx-component="PagestackItemDefault">
			{children}
		</div>
	);
}
