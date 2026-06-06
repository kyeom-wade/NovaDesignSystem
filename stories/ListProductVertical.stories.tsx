import type { Meta, StoryObj } from "@storybook/react-vite";
import { ListProductVertical } from "@cx/components";

const meta: Meta<typeof ListProductVertical> = {
	title: "cx/ListProductVertical",
	component: ListProductVertical as never,
};
export default meta;
type Story = StoryObj<typeof ListProductVertical>;

export const Default: Story = {
	render: () => <ListProductVertical {...({"subTitle":"설명 텍스트입니다","title":"샘플 제목","discountRate":"값","price":"12,000원","priceUnit":"12,000원","badges":["혜택","NEW"]} as any)} />,
};
