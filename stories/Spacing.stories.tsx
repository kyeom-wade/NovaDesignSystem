import type { Meta, StoryObj } from "@storybook/react-vite";
import { Spacing } from "@cx/components";

const meta: Meta<typeof Spacing> = {
	title: "cx/Spacing",
	component: Spacing as never,
};
export default meta;
type Story = StoryObj<typeof Spacing>;

export const Default: Story = {
	render: () => <Spacing {...({"size":"값"} as any)} />,
};
