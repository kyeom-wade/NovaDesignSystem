import type { Meta, StoryObj } from "@storybook/react-vite";
import { BannerBenefit } from "@cx/components";

const meta: Meta<typeof BannerBenefit> = {
	title: "cx/BannerBenefit",
	component: BannerBenefit as never,
};
export default meta;
type Story = StoryObj<typeof BannerBenefit>;

export const Default: Story = {
	render: () => <BannerBenefit {...({"text":"설명 텍스트입니다"} as any)} />,
};
