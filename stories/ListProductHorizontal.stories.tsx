import type { Meta, StoryObj } from "@storybook/react-vite";
import { ListProductHorizontal } from "@cx/components";

const meta: Meta<typeof ListProductHorizontal> = {
	title: "cx/ListProductHorizontal",
	component: ListProductHorizontal as never,
};
export default meta;
type Story = StoryObj<typeof ListProductHorizontal>;

export const Default: Story = {
	render: () => <ListProductHorizontal {...({"title":"샘플 제목","brand":"라벨","description":"설명 텍스트입니다","price":"12,000원","originalPrice":"12,000원","discountRate":"값","imageUrl":["항목1","항목2"],"imageAlt":"설명 텍스트입니다","badges":["혜택","NEW"],"meta":["항목1","항목2"],"benefitText":"설명 텍스트입니다","ctaLabel":"라벨"} as any)} />,
};
