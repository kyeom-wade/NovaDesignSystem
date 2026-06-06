import type { ReactNode } from "react";
import styles from "./ThumbnailSmall.module.css";

interface ThumbnailSmallProps {
	src?: string;
	image?: ReactNode;
	logo?: ReactNode;
}

export function ThumbnailSmall({ src, image, logo }: ThumbnailSmallProps) {
	return (
		<div className={styles.container} data-cx-component="ThumbnailSmall">
			<div className={styles.imageSlot}>
				{image ?? (src ? <img className={styles.img} src={src} alt="" /> : <span className={styles.ph} />)}
			</div>
			{logo ? <div className={styles.logoSlot}>{logo}</div> : null}
		</div>
	);
}
