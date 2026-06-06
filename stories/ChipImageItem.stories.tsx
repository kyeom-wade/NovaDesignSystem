import type { Meta, StoryObj } from "@storybook/react-vite";
import { ChipImageItem } from "@cx/components";

const meta: Meta<typeof ChipImageItem> = {
	title: "cx/ChipImageItem",
	component: ChipImageItem as never,
};
export default meta;
type Story = StoryObj<typeof ChipImageItem>;

export const Default: Story = {
	render: () => <ChipImageItem {...({"label":"라벨","selected":false} as any)} />,
};
