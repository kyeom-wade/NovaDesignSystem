import type { Meta, StoryObj } from "@storybook/react-vite";
import { ButtonListOrder } from "@cx/components";

const meta: Meta<typeof ButtonListOrder> = {
	title: "cx/ButtonListOrder",
	component: ButtonListOrder as never,
};
export default meta;
type Story = StoryObj<typeof ButtonListOrder>;

export const Default: Story = {
	render: () => <ButtonListOrder {...({"label":"라벨"} as any)} />,
};
