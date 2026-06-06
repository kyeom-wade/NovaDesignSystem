import type { Meta, StoryObj } from "@storybook/react-vite";
import { BannerHorizontalSmall } from "@cx/components";

const meta: Meta<typeof BannerHorizontalSmall> = {
	title: "cx/BannerHorizontalSmall",
	component: BannerHorizontalSmall as never,
};
export default meta;
type Story = StoryObj<typeof BannerHorizontalSmall>;

export const Default: Story = {
	render: () => <BannerHorizontalSmall {...({"title":"샘플 제목","subtitle":"설명 텍스트입니다","showIndicator":true,"totalCount":"값","activeIndex":"값"} as any)} />,
};
