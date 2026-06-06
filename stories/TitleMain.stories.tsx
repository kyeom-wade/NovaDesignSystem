import type { Meta, StoryObj } from "@storybook/react-vite";
import { TitleMain } from "@cx/components";

const meta: Meta<typeof TitleMain> = {
	title: "cx/TitleMain",
	component: TitleMain as never,
};
export default meta;
type Story = StoryObj<typeof TitleMain>;

export const Default: Story = {
	render: () => <TitleMain {...({"type":"Complete","title":"샘플 제목","subText":"설명 텍스트입니다"} as any)} />,
};
