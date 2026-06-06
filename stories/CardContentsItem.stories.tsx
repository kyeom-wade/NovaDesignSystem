import type { Meta, StoryObj } from "@storybook/react-vite";
import { CardContentsItem } from "@cx/components";

const meta: Meta<typeof CardContentsItem> = {
	title: "cx/CardContentsItem",
	component: CardContentsItem as never,
};
export default meta;
type Story = StoryObj<typeof CardContentsItem>;

export const Default: Story = {
	render: () => <CardContentsItem {...({"type":"List","title":"샘플 제목","subtitle":"설명 텍스트입니다"} as any)} />,
};
