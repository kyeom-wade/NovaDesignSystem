import type { Meta, StoryObj } from "@storybook/react-vite";
import { ActionButton } from "@cx/components";

const meta: Meta<typeof ActionButton> = {
	title: "cx/ActionButton",
	component: ActionButton as never,
};
export default meta;
type Story = StoryObj<typeof ActionButton>;

export const Default: Story = {
	render: () => <ActionButton {...({"label":"라벨","variant":"primary","fullWidth":true} as any)} />,
};
