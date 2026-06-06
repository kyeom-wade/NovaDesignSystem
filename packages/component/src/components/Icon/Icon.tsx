import styles from "./Icon.module.css";
import { iconRegistry } from "./iconRegistry";

interface IconProps {
	name?: string;
	size?: number;
	color?: string;
	className?: string;
	"aria-label"?: string;
}

// SKT 시스템 아이콘 — Figma .IcoItem(10338:19141)에서 추출한 SVG path 레지스트리.
// 등록된 이름은 인라인 SVG(currentColor 틴트)로 렌더, 미등록은 약어 플레이스홀더 폴백.
export function Icon({ name = "icon", size = 24, color, className, ...rest }: IconProps) {
	const entry = iconRegistry[name];
	const label = rest["aria-label"] ?? name;
	if (entry) {
		// colored(Graphic) 아이콘은 원색 유지, monochrome(System)은 currentColor 틴트
		return (
			<svg
				className={`${styles.svg} ${className ?? ""}`}
				width={size}
				height={size}
				viewBox={entry.vb}
				fill={entry.colored ? "none" : "currentColor"}
				style={!entry.colored && color ? { color } : undefined}
				role="img"
				aria-label={label}
				data-cx-component="Icon"
				data-icon={name}
				// biome-ignore lint/security/noDangerouslySetInnerHtml: trusted build-time icon paths
				dangerouslySetInnerHTML={{ __html: entry.inner }}
			/>
		);
	}
	return (
		<span
			className={`${styles.icon} ${className ?? ""}`}
			style={{ width: size, height: size, color }}
			data-cx-component="Icon"
			data-icon={name}
			aria-label={label}
			role="img"
		>
			<span className={styles.glyph}>{name.slice(0, 1).toUpperCase()}</span>
		</span>
	);
}
