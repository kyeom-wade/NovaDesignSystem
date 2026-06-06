import styles from "./BannerBenefit.module.css";

interface BannerBenefitProps {
	text?: string;
	image?: string;
}

export function BannerBenefit({ text = "카드 혜택을 확인하세요", image }: BannerBenefitProps) {
	return (
		<div className={styles.wrap} data-cx-component="BannerBenefit">
			<p className={styles.text}>{text}</p>
			<div className={styles.imgFrame}>
				{image ? <img className={styles.img} src={image} alt="" /> : null}
			</div>
		</div>
	);
}
