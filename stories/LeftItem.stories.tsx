import type { Meta, StoryObj } from "@storybook/react-vite";
import { LeftItem } from "@cx/components";

const meta: Meta<typeof LeftItem> = {
	title: "cx/LeftItem",
	component: LeftItem as never,
};
export default meta;
type Story = StoryObj<typeof LeftItem>;

export const Default: Story = {
	render: () => <LeftItem {...({"type":"Ai","color":"값"} as any)} />,
};
