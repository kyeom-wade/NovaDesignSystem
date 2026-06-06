import type { Meta, StoryObj } from "@storybook/react-vite";
import { Thumbnail } from "@cx/components";

const meta: Meta<typeof Thumbnail> = {
	title: "cx/Thumbnail",
	component: Thumbnail as never,
};
export default meta;
type Story = StoryObj<typeof Thumbnail>;

export const Default: Story = {
	render: () => <Thumbnail {...({"type":"Product","brandName":"샘플 제목","brandDesc":"설명 텍스트입니다","likeCount":"값","badges":["혜택","NEW"],"totalDots":"값","activeDotIndex":"값"} as any)} />,
};
