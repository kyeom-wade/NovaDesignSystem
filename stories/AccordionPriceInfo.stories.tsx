import type { Meta, StoryObj } from "@storybook/react-vite";
import { AccordionPriceInfo } from "@cx/components";

const meta: Meta<typeof AccordionPriceInfo> = {
	title: "cx/AccordionPriceInfo",
	component: AccordionPriceInfo as never,
};
export default meta;
type Story = StoryObj<typeof AccordionPriceInfo>;

export const Default: Story = {
	render: () => <AccordionPriceInfo {...({"title":"샘플 제목","description":"설명 텍스트입니다","priceText":"12,000원","expanded":false} as any)} />,
};
