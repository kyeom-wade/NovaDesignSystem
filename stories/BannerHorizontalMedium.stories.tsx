import type { Meta, StoryObj } from "@storybook/react-vite";
import { BannerHorizontalMedium } from "@cx/components";

const meta: Meta<typeof BannerHorizontalMedium> = {
	title: "cx/BannerHorizontalMedium",
	component: BannerHorizontalMedium,
};
export default meta;
type Story = StoryObj<typeof BannerHorizontalMedium>;

export const Default: Story = {
	args: { title: "신혼부부 프랜차이즈 무조건 할인", subtitle: "기다림은 짧게, 혜택은 특별하게", totalCount: 6, activeIndex: 0 },
};
