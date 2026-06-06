import type { Meta, StoryObj } from "@storybook/react-vite";
import { CarouselProductText } from "@cx/components";

const meta: Meta<typeof CarouselProductText> = {
	title: "cx/CarouselProductText",
	component: CarouselProductText as never,
};
export default meta;
type Story = StoryObj<typeof CarouselProductText>;

export const Default: Story = {
	render: () => <CarouselProductText {...({"subtitle":"설명 텍스트입니다","title":"샘플 제목","description":"설명 텍스트입니다","badges":["혜택","NEW"],"children":"샘플 콘텐츠"} as any)} />,
};
