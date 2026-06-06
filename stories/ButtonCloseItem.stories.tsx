import type { Meta, StoryObj } from "@storybook/react-vite";
import { ButtonCloseItem } from "@cx/components";

const meta: Meta<typeof ButtonCloseItem> = {
	title: "cx/ButtonCloseItem",
	component: ButtonCloseItem as never,
};
export default meta;
type Story = StoryObj<typeof ButtonCloseItem>;

export const Default: Story = {
	render: () => <ButtonCloseItem {...({} as any)} />,
};
