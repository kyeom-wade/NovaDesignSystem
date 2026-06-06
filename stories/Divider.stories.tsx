import type { Meta, StoryObj } from "@storybook/react-vite";
import { Divider } from "@cx/components";

const meta: Meta<typeof Divider> = {
	title: "cx/Divider",
	component: Divider as never,
};
export default meta;
type Story = StoryObj<typeof Divider>;

export const Default: Story = {
	render: () => <Divider {...({"type":"contents"} as any)} />,
};
