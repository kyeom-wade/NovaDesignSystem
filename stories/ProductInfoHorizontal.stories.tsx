import type { Meta, StoryObj } from "@storybook/react-vite";
import { ProductInfoHorizontal } from "@cx/components";

const meta: Meta<typeof ProductInfoHorizontal> = {
	title: "cx/ProductInfoHorizontal",
	component: ProductInfoHorizontal as never,
};
export default meta;
type Story = StoryObj<typeof ProductInfoHorizontal>;

export const Default: Story = {
	render: () => <ProductInfoHorizontal {...({"subtitle":"설명 텍스트입니다","mainText":"샘플 제목","subText":"설명 텍스트입니다"} as any)} />,
};
