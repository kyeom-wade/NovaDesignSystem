import type { ReactNode } from "react";
import styles from "./HomeCardCarousel.module.css";

interface HomeCardCarouselProps {
	subtitle?: string;
	titleLine1?: string;
	titleLine2?: string;
	children?: ReactNode;
}

export function HomeCardCarousel(props: HomeCardCarouselProps) {
	return (
		<div className={styles.wrap} data-cx-component="HomeCardCarousel">
			<div className={styles.titleMain}>
				{props.subtitle ? <span className={styles.subtitle}>{props.subtitle}</span> : null}
				<p className={styles.title}>
					{props.titleLine1 ?? "추천"}
					{props.titleLine2 ? (
						<>
							<br />
							{props.titleLine2}
						</>
					) : null}
				</p>
			</div>
			<div className={styles.track}>{props.children}</div>
		</div>
	);
}
