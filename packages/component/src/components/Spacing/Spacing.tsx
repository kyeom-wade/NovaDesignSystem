import styles from "./Spacing.module.css";

interface SpacingProps {
	size?: 2 | 4 | 8 | 12 | 16 | 20 | 24 | 28;
}

export function Spacing({ size = 8 }: SpacingProps) {
	return <div className={styles.spacing} style={{ height: size }} data-cx-component="Spacing" />;
}
