import type { Meta, StoryObj } from "@storybook/react-vite";
import { ThumbnailItem } from "@cx/components";

const meta: Meta<typeof ThumbnailItem> = {
	title: "cx/ThumbnailItem",
	component: ThumbnailItem as never,
};
export default meta;
type Story = StoryObj<typeof ThumbnailItem>;

export const Default: Story = {
	render: () => <ThumbnailItem {...({"size":"64"} as any)} />,
};
