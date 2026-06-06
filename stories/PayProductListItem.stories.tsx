import type { Meta, StoryObj } from "@storybook/react-vite";
import { PayProductListItem } from "@cx/components";

const meta: Meta<typeof PayProductListItem> = {
	title: "cx/PayProductListItem",
	component: PayProductListItem as never,
};
export default meta;
type Story = StoryObj<typeof PayProductListItem>;

export const Default: Story = {
	render: () => <PayProductListItem {...({"type":"Pay","brand":"설명 텍스트입니다","productName":"샘플 제목","priceRows":[{"label":"항목","value":"값"},{"label":"항목2","value":"값2"}],"totalPrice":"12,000원"} as any)} />,
};
