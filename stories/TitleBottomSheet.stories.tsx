import type { Meta, StoryObj } from "@storybook/react-vite";
import { TitleBottomSheet } from "@cx/components";

// Figma SSOT: SKT_GenUI_Test .TitleBottomSheet (node 9412:12082)
// anatomy: titleRow[ title 20/Medium #05001A · closeIco ] / subText[ 14/Medium gray-400 · highlight 14/SemiBold #3617ce ]
const meta: Meta<typeof TitleBottomSheet> = {
	title: "cx/TitleBottomSheet",
	component: TitleBottomSheet as never,
};
export default meta;
type Story = StoryObj<typeof TitleBottomSheet>;

// Figma 풀 anatomy: 타이틀 + 서브텍스트 + 강조(brand) + 닫기
export const Default: Story = {
	render: () => (
		<div style={{ width: 329 }}>
			<TitleBottomSheet
				{...({ title: "타이틀", subText: "텍스트", subTextHighlight: "텍스트", onClose: () => {} } as any)}
			/>
		</div>
	),
};

// 강조 텍스트 없음 (subTextHighlight 미지정)
export const TitleOnly: Story = {
	render: () => (
		<div style={{ width: 329 }}>
			<TitleBottomSheet {...({ title: "이중납부·반영 지연 알림 이력", onClose: () => {} } as any)} />
		</div>
	),
};
