import { useState } from "react";
import type { ReactNode } from "react";
import styles from "./AccordionProductInfo.module.css";

interface AccordionProductInfoProps {
	states?: "Default" | "Open";
	logoSrc?: string;
	logoBg?: string;
	brandName?: string;
	productName?: string;
	children?: ReactNode;
}

export function AccordionProductInfo(props: AccordionProductInfoProps) {
	const [open, setOpen] = useState(String(props.states ?? "").toLowerCase() === "open");
	return (
		<div className={styles.wrap} data-cx-component="AccordionProductInfo" data-open={open}>
			<button type="button" className={styles.title} onClick={() => setOpen((v) => !v)}>
				<span className={styles.logo} style={props.logoBg ? { background: props.logoBg } : undefined}>
					{props.logoSrc ? <img className={styles.logoImg} src={props.logoSrc} alt="" /> : null}
				</span>
				<span className={styles.info}>
					{props.brandName ? <span className={styles.brand}>{props.brandName}</span> : null}
					<span className={styles.product}>{props.productName ?? "상품명"}</span>
				</span>
				<svg className={`${styles.chevron} ${open ? styles.chevronOpen : ""}`} width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
					<path d="M6 8l4 4 4-4" stroke="#05001a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
				</svg>
			</button>
			{open ? <div className={styles.content}>{props.children}</div> : null}
		</div>
	);
}
