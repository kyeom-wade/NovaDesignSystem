import styles from "./BannerSearch.module.css";

interface BannerSearchProps {
	image?: string;
}

export function BannerSearch({ image }: BannerSearchProps) {
	return (
		<div className={styles.wrap} data-cx-component="BannerSearch">
			{image ? <img className={styles.product} src={image} alt="" /> : <span className={styles.ph} />}
		</div>
	);
}
