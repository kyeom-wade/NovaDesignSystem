import type { Meta, StoryObj } from "@storybook/react-vite";
import { ButtonItem } from "@cx/components";

const meta: Meta<typeof ButtonItem> = {
	title: "cx/ButtonItem",
	component: ButtonItem as never,
};
export default meta;
type Story = StoryObj<typeof ButtonItem>;

export const Default: Story = {
	render: () => <ButtonItem {...({"label":"라벨"} as any)} />,
};
