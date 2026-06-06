import type { Meta, StoryObj } from "@storybook/react-vite";
import { PopupActionButton } from "@cx/components";

const meta: Meta<typeof PopupActionButton> = {
	title: "cx/PopupActionButton",
	component: PopupActionButton as never,
};
export default meta;
type Story = StoryObj<typeof PopupActionButton>;

export const Default: Story = {
	render: () => <PopupActionButton {...({"primaryLabel":"라벨","secondaryLabel":"라벨"} as any)} />,
};
