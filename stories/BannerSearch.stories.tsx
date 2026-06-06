import type { Meta, StoryObj } from "@storybook/react-vite";
import { BannerSearch } from "@cx/components";

const meta: Meta<typeof BannerSearch> = {
	title: "cx/BannerSearch",
	component: BannerSearch as never,
};
export default meta;
type Story = StoryObj<typeof BannerSearch>;

export const Default: Story = {
	render: () => <BannerSearch {...({} as any)} />,
};
