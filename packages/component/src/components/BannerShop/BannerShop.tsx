import styles from "./BannerShop.module.css";

interface BannerShopProps {
	subtitle?: string;
	titleLine1?: string;
	titleLine2?: string;
	image?: string;
}

export function BannerShop(props: BannerShopProps) {
	return (
		<div className={styles.wrap} data-cx-component="BannerShop">
			<div className={styles.titleArea}>
				{props.image ? <img className={styles.logo} src={props.image} alt="" /> : null}
				{props.subtitle ? <span className={styles.subtitle}>{props.subtitle}</span> : null}
				<p className={styles.title}>
					{props.titleLine1 ?? "쇼핑 프로모션"}
					{props.titleLine2 ? (
						<>
							<br />
							{props.titleLine2}
						</>
					) : null}
				</p>
			</div>
		</div>
	);
}
