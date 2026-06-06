import type { Meta, StoryObj } from "@storybook/react-vite";
import { CarouselProduct } from "@cx/components";

const meta: Meta<typeof CarouselProduct> = {
	title: "cx/CarouselProduct",
	component: CarouselProduct as never,
};
export default meta;
type Story = StoryObj<typeof CarouselProduct>;

export const Default: Story = {
	render: () => <CarouselProduct {...({"subTitle":"설명 텍스트입니다","title":"샘플 제목","originalPrice":"12,000원","discountRate":"값","price":"12,000원","priceUnit":"12,000원","badges":["혜택","NEW"],"children":"샘플 콘텐츠"} as any)} />,
};
