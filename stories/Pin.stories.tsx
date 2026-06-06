import type { Meta, StoryObj } from "@storybook/react-vite";
import { Pin } from "@cx/components";

const meta: Meta<typeof Pin> = {
	title: "cx/Pin",
	component: Pin as never,
};
export default meta;
type Story = StoryObj<typeof Pin>;

export const Default: Story = {
	render: () => <Pin {...({"number":"값","color":"값"} as any)} />,
};
