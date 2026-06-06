import type { Meta, StoryObj } from "@storybook/react-vite";
import { ThumbnailLogoItem } from "@cx/components";

const meta: Meta<typeof ThumbnailLogoItem> = {
	title: "cx/ThumbnailLogoItem",
	component: ThumbnailLogoItem as never,
};
export default meta;
type Story = StoryObj<typeof ThumbnailLogoItem>;

export const Default: Story = {
	render: () => <ThumbnailLogoItem {...({"bgColor":"값"} as any)} />,
};
