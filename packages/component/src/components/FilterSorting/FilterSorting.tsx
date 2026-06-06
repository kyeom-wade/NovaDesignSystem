import styles from "./FilterSorting.module.css";

interface FilterSortingProps {
	countLabel?: string;
	sortLabel?: string;
	filterLabel?: string;
	showSort?: boolean;
	showFilter?: boolean;
	showDivider?: boolean;
	onSort?: () => void;
	onFilter?: () => void;
}

export function FilterSorting({
	countLabel = "전체 0개",
	sortLabel = "인기순",
	filterLabel = "필터",
	showSort = true,
	showFilter = true,
	showDivider = true,
	onSort,
	onFilter,
}: FilterSortingProps) {
	return (
		<div className={styles.wrap} data-cx-component="FilterSorting">
			<div className={styles.bar}>
				<span className={styles.count}>{countLabel}</span>
				<div className={styles.actions}>
					{showSort ? (
						<button type="button" className={styles.action} onClick={onSort}>
							<span>{sortLabel}</span>
							<svg className={styles.ico} width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
								<path d="M4.5 6.5l3.5 3.5 3.5-3.5" stroke="#05001a" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
							</svg>
						</button>
					) : null}
					{showSort && showFilter ? <span className={styles.sep} /> : null}
					{showFilter ? (
						<button type="button" className={styles.action} onClick={onFilter}>
							<span>{filterLabel}</span>
							<svg className={styles.ico} width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
								<path d="M2.5 4.5h11M4.5 8h7M6.5 11.5h3" stroke="#05001a" strokeWidth="1.4" strokeLinecap="round" />
							</svg>
						</button>
					) : null}
				</div>
			</div>
			{showDivider ? <div className={styles.divider} /> : null}
		</div>
	);
}
