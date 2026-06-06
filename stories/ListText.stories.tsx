import type { Meta, StoryObj } from "@storybook/react-vite";
import { ListText } from "@cx/components";

const meta: Meta<typeof ListText> = {
	title: "cx/ListText",
	component: ListText as never,
};
export default meta;
type Story = StoryObj<typeof ListText>;

export const Default: Story = {
	render: () => <ListText {...({"table":"off","title":"샘플 제목","subText":"설명 텍스트입니다","price":"12,000원","showRightItem":true} as any)} />,
};
