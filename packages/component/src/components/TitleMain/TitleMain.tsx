import styles from "./TitleMain.module.css";

interface TitleMainProps {
	type?: "Complete" | "Search";
	title?: string;
	subText?: string;
	chipSrc?: string;
	deviceName?: string;
	indicatorCount?: number;
	indicatorActiveIndex?: number;
}

export function TitleMain(props: TitleMainProps) {
	const isSearch = String(props.type ?? "").toLowerCase() === "search";
	return (
		<div className={styles.wrap} data-cx-component="TitleMain" data-type={isSearch ? "Search" : "Complete"}>
			<div className={styles.titleText}>
				{props.chipSrc ? <img className={styles.chip} src={props.chipSrc} alt="" /> : null}
				<p className={styles.title}>{props.title ?? (isSearch ? "검색 결과" : "완료되었습니다")}</p>
				{props.subText ? <p className={styles.subText}>{props.subText}</p> : null}
			</div>
		</div>
	);
}
