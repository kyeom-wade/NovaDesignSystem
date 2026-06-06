import type { Meta, StoryObj } from "@storybook/react-vite";
import { ThumbnailSmall } from "@cx/components";

const meta: Meta<typeof ThumbnailSmall> = {
	title: "cx/ThumbnailSmall",
	component: ThumbnailSmall as never,
};
export default meta;
type Story = StoryObj<typeof ThumbnailSmall>;

export const Default: Story = {
	render: () => <ThumbnailSmall {...({} as any)} />,
};
