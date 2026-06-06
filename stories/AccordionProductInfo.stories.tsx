import type { Meta, StoryObj } from "@storybook/react-vite";
import { AccordionProductInfo } from "@cx/components";

const meta: Meta<typeof AccordionProductInfo> = {
	title: "cx/AccordionProductInfo",
	component: AccordionProductInfo as never,
};
export default meta;
type Story = StoryObj<typeof AccordionProductInfo>;

export const Default: Story = {
	render: () => <AccordionProductInfo {...({"states":"Default","brandName":"설명 텍스트입니다","productName":"샘플 제목","children":"샘플 콘텐츠"} as any)} />,
};
