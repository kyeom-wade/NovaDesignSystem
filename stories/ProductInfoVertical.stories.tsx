import type { Meta, StoryObj } from "@storybook/react-vite";
import { ProductInfoVertical } from "@cx/components";

const meta: Meta<typeof ProductInfoVertical> = {
	title: "cx/ProductInfoVertical",
	component: ProductInfoVertical as never,
};
export default meta;
type Story = StoryObj<typeof ProductInfoVertical>;

export const Default: Story = {
	render: () => <ProductInfoVertical {...({"textSub":"설명 텍스트입니다","textMain":"샘플 제목","price":"12,000원","discountRate":"값"} as any)} />,
};
