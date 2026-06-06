import type { Meta, StoryObj } from "@storybook/react-vite";
import { ProductInfo } from "@cx/components";

const meta: Meta<typeof ProductInfo> = {
	title: "cx/ProductInfo",
	component: ProductInfo as never,
};
export default meta;
type Story = StoryObj<typeof ProductInfo>;

export const Default: Story = {
	render: () => <ProductInfo {...({"brand":"라벨","title":"샘플 제목","description":"설명 텍스트입니다","price":"12,000원","originalPrice":"12,000원","discountRate":"값","badges":["혜택","NEW"]} as any)} />,
};
